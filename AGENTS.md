# teacher-toolkit — 老師班級工具總專案

## 專案導覽與三方架構
- 📋 **GDrive 工作區**：G:\我的雲端硬碟\teacher-toolkit\
- 🐙 **GitHub Repo**：[Garfield543/teacher-toolkit](https://github.com/Garfield543/teacher-toolkit)
- 📘 **Obsidian 工作筆記**：G:\我的雲端硬碟\secondbrain\teacher-toolkit\工作筆記.md
- 🔥 **Firebase 專案**：teacherstudy-12846（以成語遊戲目前 firebaseConfig 為準）

## 標準指令
- **開工**：讀取 Obsidian 工作筆記、確認進度與下一步。
- **收工**：自動 commit + push 儲存庫，並更新 Obsidian 工作筆記。
- **做新遊戲 / 工具**：遵循 classroom-game-builder 規範（注音切換、三端適配、Web Audio 音效、Firebase 排行榜）。

## 核心工具清單
1. **成語遊戲（成語大冒險）**：`成語遊戲/`
2. **語文遊戲（的得大挑戰）**：`語文遊戲/`
3. **語文遊戲（做作大挑戰）**：`做作大挑戰/`
4. **生字筆順（雄筆順練習）**：`雄筆順練習/`

## 開發守則
- 學生資料去識別化（僅用座號 1~30 號與班級代號）。
- 所有網頁採單一 HTML 封裝（相容 GitHub Pages 直接託管）。
- commit 訊息清楚記錄更動原因。

## 首頁維護邊界
- `index.html` 是正式首頁；`index_1.html` 是歷史快照，不作為正式來源，也不要求同步。
- 玩法說明必須標示題庫適用範圍；不可將 100 詞題庫寫成每輪 100 題。
- 未完成的跨裝置、Firebase 與教師教材複核不可記為通過；進度寫入 handoff.md 與 Obsidian。
