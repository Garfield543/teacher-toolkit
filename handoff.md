# 專案交接紀錄 (Handoff)

- **更新時間**：2026-08-30 14:58
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 完成「**語文遊戲（的得大挑戰）**」注音切換功能實作，支援頂部功能列與題卡右上角「🔤 注音：開 / 關」即時切換。
- 內建全字庫注音字典，以教科書風格 Ruby 標註漢字上方注音符號，偏好狀態自動保存於 localStorage。
- 線上網址：[https://garfield543.github.io/teacher-toolkit/語文遊戲/](https://garfield543.github.io/teacher-toolkit/%E8%AA%9E%E6%96%87%E9%81%8A%E6%88%B2/)。

## ➡️ 下一步建議 (Next Steps)
1. **課堂實測**：於平板或電子白板讓一年級（開注重音）與二年級（純字模式）學生試玩，觀察辨讀效果。
2. **擴充更多語文小遊戲**：未來可依教學單元增加「部首配對」、「部件組字」、「多音字辨析」或「量詞大冒險」等新子模組。
3. **班級資料管理**：觀察 Firebase Firestore (`chinese_de_game_scores`) 之讀寫與進度牆連線穩定度。

## 📝 本次主要更動
- `語文遊戲/index.html`：新增 `zhuyinDict` 字典、`renderWithZhuyin()` 函式、頂部 `btn-zhuyin` 與題卡 `q-zhuyin-btn` 雙重開關，答題與回饋視窗皆同步支援注音。
- `語文遊戲/README.md`：更新注音輔助功能規格說明。
- `handoff.md`：更新交接紀錄。

## 🕳️ 踩坑與注意事項
- **Ruby 注音排版相容性**：採用 Flexbox 垂直對齊 `<ruby><rt>`，並將注音字級設為 0.36em，避免干擾漢字大字本體，手機與平板均能完美呈現。
