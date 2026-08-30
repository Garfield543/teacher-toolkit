# 專案交接紀錄 (Handoff)

- **更新時間**：2026-08-30 15:55
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 根據小一國語辨析教案完整研發「**做作大挑戰（做與作魔法分辨術）**」互動遊戲，已成功部署並整合至總大廳 Portal。
- 專案線上總大廳入口：[https://garfield543.github.io/teacher-toolkit/](https://garfield543.github.io/teacher-toolkit/)。
- 核心遊戲模組：
  - 🐾 **成語大冒險 v2.0**：[成語遊戲/](https://garfield543.github.io/teacher-toolkit/成語遊戲/)
  - 🎒 **語文遊戲（的得大挑戰）**：[語文遊戲/](https://garfield543.github.io/teacher-toolkit/語文遊戲/)
  - 🖐️💡 **語文遊戲（做作大挑戰）**：[做作大挑戰/](https://garfield543.github.io/teacher-toolkit/做作大挑戰/)
- 專案開發規範：`classroom-game-builder` 技能跨平台運作中。

## ➡️ 下一步建議 (Next Steps)
1. **課堂實測**：使用平板或電子白板讓學生試玩「做作大挑戰」，體驗動手做 vs 動腦作的口訣辨析與 1~30 號班級進度牆。
2. **擴充新主題**：可依教師需求持續開發「部首大冒險」、「量詞配對」、「多音字挑戰」等新模組。

## 📝 本次主要更動
- `做作大挑戰/index.html`：完整單一 HTML 互動遊戲主程式（67 題庫、注音一鍵開關、雙大按鈕、8秒彩虹競速、Web Audio 音效、Firebase 排行榜）。
- `做作大挑戰/README.md` & `questions.json`：完整教學手冊與教育部校對題庫池。
- `index.html`：總大廳新增「做作大挑戰」精美卡片。
- `README.md` / `ANTIGRAVITY.md` / `CLAUDE.md` / `AGENTS.md` / `handoff.md` / `工作筆記.md`：三方文件全面更新。

## 🕳️ 踩坑與注意事項
- **輕聲符號格式**：標準教育部國語注音符號橫排時，輕聲符號置於拼音開頭前（例：`˙ㄉㄜ`、`˙ㄌㄧ`、`˙ㄗ`、`˙ㄌㄜ`）。
- **三端版面最適化**：鎖定 `100dvh` 與 `touch-action: manipulation`，消除連續點擊延遲與誤觸縮放。
