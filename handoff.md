# 專案交接紀錄 (Handoff)

- **更新時間**：2026-08-30 22:40
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 完成「**雄筆順練習（康軒115二上生字筆順）**」模組初始化與建置，解析 115 學年度康軒國語二上 L1~L12 各課生字清單，生成雄老師 HTML5 FUN 與教育部筆順學習網對照表。
- 雄筆順模組每課網址與 iPad 掃描 QR Code 已全面注入標準教學參數（序號 `number=1`、提示點 `track=1`、指引 `hint=1`、語音 `sound=1` 全開）。
- 已同步整合至總大廳 Portal (`index.html`)、更新 `AGENTS.md`、`README.md` 與 Obsidian 工作筆記，並已推送至 GitHub Pages。
- 專案線上總大廳入口：[https://garfield543.github.io/teacher-toolkit/](https://garfield543.github.io/teacher-toolkit/)。
- 核心工具與遊戲模組清單：
  - ✍️🐻 **雄筆順練習導覽**：[雄筆順練習/](https://garfield543.github.io/teacher-toolkit/雄筆順練習/)
  - 🐾 **成語大冒險 v2.0**：[成語遊戲/](https://garfield543.github.io/teacher-toolkit/成語遊戲/)
  - 🎒 **語文遊戲（的得大挑戰）**：[語文遊戲/](https://garfield543.github.io/teacher-toolkit/語文遊戲/)
  - 🖐️💡 **語文遊戲（做作大挑戰）**：[做作大挑戰/](https://garfield543.github.io/teacher-toolkit/做作大挑戰/)

## ➡️ 下一步建議 (Next Steps)
1. **課堂生字筆順實測**：使用大螢幕或平板掃描 QR Code 測試 115 康軒二上 L1~L12 筆順書寫與語音提示效果。
2. **擴充其他版本/年級**：後續可依需求擴充南一、翰林或二下/三年級等生字筆順題庫。
3. **持續擴充新遊戲模組**：可依教師需求開發「部首大冒險」、「量詞配對」、「多音字挑戰」等。

## 📝 本次主要更動
- `雄筆順練習/index.html`：生字筆順導覽主程式（L1~L12 快速切換、單字筆順練習、平板 QR Code 掃描、即時參數調整面板）。
- `雄筆順練習/README.md`：115 康軒二上各課生字對照表與雙筆順來源連結。
- `index.html`：總大廳加入「雄筆順練習導覽」卡片。
- `AGENTS.md` & `工作筆記.md` & `handoff.md`：三方工作狀態全面同步。

## 🕳️ 踩坑與注意事項
- **雄筆順參數規範**：URL 參數 `number=1`（筆順序號）、`track=1`（提示起點）、`hint=1`（下一筆指引）、`sound=1`（語音朗讀），可直接由網址控制開關。
