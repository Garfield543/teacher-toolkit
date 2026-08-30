# teacher-toolkit — 我的班級工具總專案

## 對話開始時請先讀
進度與最近更動都在 Obsidian：`secondbrain/teacher-toolkit/工作筆記.md`

## 工作模式
- **加新工具**：對 AI 說「我想做一個 XXX 工具」→ 會建立專屬子資料夾、引導進行開發
- **開工**：對 AI 說「**開工**」→ 讀取工作筆記、回報狀態與建議下一步
- **結束工作**：對 AI 說「**收工**」→ 自動 commit + push + 更新 Obsidian 工作筆記
- **接續工作**：對 AI 說「讀工作筆記、告訴我上次做到哪」

## 工作桌 + 三個家
- 📋 GDrive 工作桌：`G:\我的雲端硬碟\teacher-toolkit\`（自動跨電腦同步）
- 🐙 GitHub repo：[Garfield543/teacher-toolkit](https://github.com/Garfield543/teacher-toolkit)（公開，網頁的家）
- 📘 Obsidian 駕駛艙：`secondbrain/teacher-toolkit/工作筆記.md`（想法的家）
- 🔥 Firebase 專案：`my-teaching-tools`（資料的家）

## 工具清單
- **遊戲大廳 (Portal)**：`index.html`（GitHub Pages 首頁與遊戲選單入口）
- **成語遊戲（成語大冒險 v2.0）**：`成語遊戲/`（低年級互動式成語學習與闖關遊戲，含選一選、拼一拼、配一配、成語偵探）
- **語文遊戲（的得大挑戰）**：`語文遊戲/`（低年級「的」「得」語法辨析互動遊戲，含百寶袋與小老師教學、80+海量題庫隨機抽取、8秒競速計分、叮咚音效與班級進度牆）
- **做作大挑戰**：`做作大挑戰/`（低年級「做」與「作」魔法辨析遊戲，含動手做vs動腦作口訣、67題生活題庫、注音開關、雙大按鈕與班級進度牆）

## 工作注意事項
- 學生資料一律去識別化（只用座號 + 班級代號）
- commit 訊息要寫清楚做了什麼 + 為什麼
- 收工前說「收工」讓 AI 同步三方
