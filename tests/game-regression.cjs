const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.join(__dirname, '..', '成語遊戲', 'index.html'), 'utf8');
function original(name) {
  const start = source.indexOf('    function ' + name + '(');
  assert.ok(start >= 0, '找不到原始函式：' + name);
  const next = source.indexOf('\n    function ', start + 1);
  assert.ok(next > start);
  return source.slice(start, next).replace(/\r?\n    \/\*[^]*$/, '');
}
const elements = new Map();
const local = new Map();
let writes = [];
let remote = {};
let failRead = false;
let failWrite = false;
const timers = new Map();
let seq = 0;
const ctx = {
  whack: {active:true,combo:0,bestCombo:0,hits:0,misses:0,score:0,moles:[]},
  document: {querySelector:()=>null},
  sound: {correct(){},wrong(){}}, albumRecord(){}, whackHud(){}, whackNextWave(){},
  setTimeout(fn) {const id=++seq;timers.set(id,fn);return id;},
  clearTimeout(id){timers.delete(id);},
  localStorage: {getItem:k=>local.get(k)||null,setItem:(k,v)=>local.set(k,v)},
  albumState:{key:'seat-30',counts:{},sync:'local',saveTimer:null},
  state:{seatNumber:30}, albumKey(){return ctx.state.seatNumber ? 'seat-'+String(ctx.state.seatNumber).padStart(2,'0') : 'guest';},
  albumRefresh(){},
  firebase:{firestore:{FieldValue:{serverTimestamp:()=> 'server-time'}}},
  db:{collection(name){assert.equal(name,'idiom_album');return {doc(key){return {
    get(){return failRead ? Promise.reject(new Error('offline')) : Promise.resolve({exists:true,data:()=>({counts:remote})});},
    set(data,options){if(failWrite)return Promise.reject(new Error('offline'));writes.push({key,data:JSON.parse(JSON.stringify(data)),options});return Promise.resolve();}
  };}};}}
};
vm.createContext(ctx);
for(const name of ['whackHit','albumLevel','albumReadLocal','albumSaveLocal','albumMerge','albumLoad','albumPushRemote']) vm.runInContext(original(name),ctx);
const results=[];
function test(name,fn){fn();results.push(name);}
const flush=()=>new Promise(resolve=>setImmediate(resolve));
(async()=>{
  test('連續答對加分 10、12、14、16、18、20，之後維持 20 上限',()=>{
    const gains=[];
    for(let i=0;i<8;i++){
      ctx.whack.moles=[{hole:0,correct:true,done:false,idiom:{id:'sample'}}];
      const before=ctx.whack.score;ctx.whackHit(0);gains.push(ctx.whack.score-before);
    }
    assert.deepEqual(gains,[10,12,14,16,18,20,20,20]);assert.equal(ctx.whack.bestCombo,8);
  });
  test('答錯只中斷連擊、不扣既得分，下一次答對回到 10 分',()=>{
    const before=ctx.whack.score;
    ctx.whack.moles=[{hole:1,correct:false,done:false,idiom:{id:'wrong'}}];ctx.whackHit(1);
    assert.equal(ctx.whack.score,before);assert.equal(ctx.whack.combo,0);assert.equal(ctx.whack.misses,1);
    ctx.whack.moles=[{hole:0,correct:true,done:false,idiom:{id:'sample'}}];ctx.whackHit(0);
    assert.equal(ctx.whack.score,before+10);
  });
  test('同一地鼠重複點擊與遊戲結束後點擊不重複計分',()=>{
    const before=ctx.whack.score;ctx.whackHit(0);assert.equal(ctx.whack.score,before);
    ctx.whack.active=false;ctx.whack.moles=[{hole:0,correct:true,done:false,idiom:{id:'sample'}}];ctx.whackHit(0);assert.equal(ctx.whack.score,before);
  });
  test('圖鑑 3／6／10 詞的卡片升級邊界',()=>{
    assert.deepEqual([0,2,3,5,6,9,10].map(ctx.albumLevel),['locked','locked','lit','lit','silver','silver','gold']);
  });
  test('圖鑑本機與雲端合併保留較高進度與雙方獨有詞',()=>{
    const merged=ctx.albumMerge({a:3,b:1},{a:2,c:4});assert.equal(merged.a,3);assert.equal(merged.b,1);assert.equal(merged.c,4);
  });
  test('本機損壞 JSON 不致中斷遊戲',()=>{
    local.set('idiom_album_broken','{broken');assert.equal(Object.keys(ctx.albumReadLocal('broken')).length,0);
  });
  failRead=true;local.set('idiom_album_seat-30',JSON.stringify({a:3,b:1}));ctx.albumLoad();await flush();
  test('離線讀取失敗仍保留本機圖鑑並標示同步錯誤',()=>{
    assert.equal(ctx.albumState.counts.a,3);assert.equal(ctx.albumState.sync,'error');assert.equal(writes.length,0);
  });
  failWrite=true;ctx.albumState.counts.b=2;ctx.albumSaveLocal();ctx.albumPushRemote(true);await flush();
  test('離線寫入失敗不清空本機進度',()=>{
    assert.equal(JSON.parse(local.get('idiom_album_seat-30')).b,2);assert.equal(ctx.albumState.sync,'error');
  });
  failRead=false;failWrite=false;remote={a:2,c:4};ctx.albumLoad();await flush();await flush();
  test('恢復連線後重新載入會合併本機與雲端並成功回寫',()=>{
    assert.equal(ctx.albumState.sync,'synced');assert.equal(writes.length,1);
    assert.deepEqual(writes[0].data.counts,{a:3,b:2,c:4});assert.equal(writes[0].key,'seat-30');
  });
  const count=writes.length;ctx.state.seatNumber=null;ctx.albumState.counts={guestOnly:2};ctx.albumPushRemote(true);await flush();
  test('訪客圖鑑不寫入 Firestore',()=>assert.equal(writes.length,count));
let shuffleOffset=0;
ctx.shuffle=(items)=>{const offset=(shuffleOffset++*3)%items.length;return [...items.slice(offset),...items.slice(0,offset)];};
ctx.stopChallengeTimer=()=>{};ctx.setScreen=()=>{};ctx.isBinaryType=t=>t==='judge'||t==='sort';
ctx.BINARY_GAMES={judge:{build:n=>Array.from({length:n},(_,i)=>({idiom:{id:'q'+i}}))},sort:{build:n=>Array.from({length:n},(_,i)=>({idiom:{id:'q'+i}}))}};
let renders=0,resultsShown=0;
ctx.renderRound=()=>{renders++;ctx.state.locked=false;ctx.state.current=ctx.state.order?.[ctx.state.index];};
ctx.showResult=()=>{resultsShown++;};ctx.setStatus=()=>{};ctx.triggerConfetti=()=>{};
ctx.$=id=>{if(!elements.has(id))elements.set(id,{textContent:''});return elements.get(id);};
for(const name of ['createMatchRounds','startPractice','correctRound','nextPracticeRound','checkScramble']) vm.runInContext(original(name),ctx);
for(const type of ['choice','detective','scramble']){
  test(type+' 完整練習十題、重複提交不重複加分、末題只結算一次',()=>{
    ctx.state.currentIdioms=Array.from({length:10},(_,i)=>({id:'q'+i}));ctx.state.selectedVolume='6';
    resultsShown=0;ctx.startPractice(type);assert.equal(ctx.state.total,10);
    for(let i=0;i<10;i++){
      timers.clear();ctx.correctRound('correct');ctx.correctRound('duplicate');
      assert.equal(ctx.state.score,i+1);assert.equal(timers.size,1);
      const callback=[...timers.values()][0];timers.clear();callback();
    }
    assert.equal(resultsShown,1);assert.equal(ctx.state.index,10);
  });
}
test('重複中文字的衣冠楚楚可依序組合並計分',()=>{
  timers.clear();ctx.state.current={id:'test',idiom:'衣冠楚楚'};ctx.state.scramblePicked=[...'衣冠楚楚'].map(char=>({char}));ctx.state.locked=false;ctx.state.score=0;
  ctx.checkScramble();assert.equal(ctx.state.score,1);assert.equal(timers.size,1);
});
for(const volume of ['6','all','all2']){
  test(volume+' 配對產生的回合數與可進行回合數一致，每回四組',()=>{
    ctx.state.selectedVolume=volume;ctx.state.currentIdioms=Array.from({length:volume==='6'?10:50},(_,i)=>({id:'q'+i}));
    ctx.startPractice('match');assert.equal(ctx.state.matchRounds.length,ctx.state.total);
    for(const round of ctx.state.matchRounds)assert.equal(new Set(round.map(x=>x.id)).size,4);
    assert.ok(new Set(ctx.state.matchRounds.flat().map(x=>x.id)).size>=10);
  });
}
ctx.sound.flip=()=>{};ctx.renderMatchBoard=()=>{};ctx.albumRecordById=()=>{};
vm.runInContext(original('selectMatch'),ctx);
test('全輯配對實際完成六回、每回四組、重複配對不重複加分',()=>{
  resultsShown=0;ctx.state.selectedVolume='all2';ctx.state.currentIdioms=Array.from({length:50},(_,i)=>({id:'q'+i}));ctx.startPractice('match');
  for(let round=0;round<6;round++){
    ctx.state.locked=false;ctx.state.matchMatched=[];ctx.state.matchSelected={left:null,right:null};timers.clear();
    for(const item of ctx.state.matchRounds[round]){
      ctx.selectMatch('left',item.id);ctx.selectMatch('right',item.id);
      const score=ctx.state.score;ctx.selectMatch('left',item.id);assert.equal(ctx.state.score,score);
    }
    assert.equal(ctx.state.score,round+1);assert.equal(timers.size,1);
    const callback=[...timers.values()][0];timers.clear();callback();
  }
  assert.equal(ctx.state.score,6);assert.equal(ctx.state.index,5);assert.equal(resultsShown,1);
});
test('字塊未滿四字或順序錯誤時可重試、不計分',()=>{
  ctx.state.locked=false;ctx.state.score=0;ctx.state.current={id:'test',idiom:'衣冠楚楚'};timers.clear();
  ctx.state.scramblePicked=[{char:'衣'}];ctx.checkScramble();assert.equal(ctx.state.score,0);assert.equal(ctx.state.locked,false);
  ctx.state.scramblePicked=[...'楚衣冠楚'].map(char=>({char}));ctx.checkScramble();assert.equal(ctx.state.score,0);assert.equal(timers.size,0);
});
  console.log(JSON.stringify({passed:results.length,tests:results,scope:'原始函式隔離測試；DOM、計時器、localStorage 與 Firestore 以測試替身提供；不連網、不寫學生資料。'},null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});