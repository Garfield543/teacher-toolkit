# 專案交接紀錄 (Handoff)

- **更新時間**：2026-09-15 23:59
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 修復「**雄筆順練習導覽（康軒115二上生字筆順）**」首頁 `wordCount` 元素 ID 轉義錯誤，確保點選 L1～L12 能正常切換各課生字、網址與 QR Code。
- 依老師最新教學截圖需求，將雄筆順練習預設參數調整為「**全關閉自主模式**」（序號 `number=0`、提示點 `track=0`、指引 `hint=0`、語音 `sound=0`），網頁按鈕與平板 QR Code 均已同步。
- 專案線上總大廳入口：[https://garfield543.github.io/teacher-toolkit/](https://garfield543.github.io/teacher-toolkit/)。
- 核心工具與遊戲模組清單：
  - ✍️🐻 **雄筆順練習導覽**：[雄筆順練習/](https://garfield543.github.io/teacher-toolkit/雄筆順練習/)
  - 🐾 **成語大冒險 v2.0**：[成語遊戲/](https://garfield543.github.io/teacher-toolkit/成語遊戲/)
  - 🎒 **語文遊戲（的得大挑戰）**：[語文遊戲/](https://garfield543.github.io/teacher-toolkit/語文遊戲/)
  - 🖐️💡 **語文遊戲（做作大挑戰）**：[做作大挑戰/](https://garfield543.github.io/teacher-toolkit/做作大挑戰/)

## ➡️ 下一步建議 (Next Steps)
1. **課堂筆順實測**：使用平板掃描 L1～L12 測試學生自主書寫與練習流暢度。
2. **擴充新版本/年級**：依教學需求擴充南一、翰林版或二下生字題庫。
3. **擴充新遊戲模組**：依第一線教學需求持續開發部首冒險、多音字挑戰等教材。

## 📝 本次主要更動
- `雄筆順練習/index.html`：修復 ID 拋錯問題，並將設定勾選框與 URL 預設為全關閉自主模式。
- `雄筆順練習/README.md`：更新 L1～L12 網址為無提示純練習參數。
- `handoff.md` & `工作筆記.md`：同步更新交接紀錄。

## 🕳️ 踩坑與注意事項
- **HTML 屬性轉義**：動態產生 HTML 時避免在 ID 屬性加入轉義反斜線（如 `id=\"wordCount\"`），以確保 `getElementById` 正常運作。
