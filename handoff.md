# 專案交接紀錄 (Handoff)

- **更新時間**：2026-08-30 00:47
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 完成全新工具模組「**語文遊戲（的得大挑戰）**」初始化與全功能實作。
- 部署於 `teacher-toolkit/語文遊戲/`，支援線上網址：[https://garfield543.github.io/teacher-toolkit/語文遊戲/](https://garfield543.github.io/teacher-toolkit/%E8%AA%9E%E6%96%87%E9%81%8A%E6%88%B2/)。
- 已完成 GDrive、Obsidian、GitHub 三方同步。

## ➡️ 下一步建議 (Next Steps)
1. **課堂實測**：使用平板或電子白板讓低年級學生試玩 20 題競速闖關，驗證 8 秒計時與教學回饋節奏。
2. **擴充更多語文小遊戲**：未來可依教學單元增加「部首配對」、「部件組字」、「多音字辨析」或「量詞大冒險」等新子模組。
3. **班級資料管理**：觀察 Firebase Firestore (`chinese_de_game_scores` 與 `idiom_game_scores`) 之讀寫與進度牆連線穩定度。

## 📝 本次主要更動
- `語文遊戲/index.html`：建立單一 HTML 互動遊戲主程式，內建「百寶袋 vs 打分數小老師」教學、80+ 題去答案化隨機題庫、8 秒彩虹計時器、競速計分系統、Web Audio 專屬音效、Firebase 即時英雄榜與 1~30 號進度牆。
- `語文遊戲/README.md`：建立語文遊戲模組規格與教學架構文件。
- `README.md` / `ANTIGRAVITY.md` / `CLAUDE.md`：更新總專案說明與 AI 協作指引，加入語文遊戲模組。
- `handoff.md`：建立專案交接紀錄。

## 🕳️ 踩坑與注意事項
- **字體與排版**：低年級學生使用純文字超大字級（60px~128px）配合「🎒百寶袋 / 👩‍🏫小老師」顏色視覺分組，體驗最佳且跨裝置不會有注音字型缺字或聲調跑版問題。
- **Firebase 安全路徑**：資料庫寫入使用 Compat 模式，去識別化只記錄座號。
