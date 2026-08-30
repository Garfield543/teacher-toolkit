# 專案交接紀錄 (Handoff)

- **更新時間**：2026-08-30 15:48
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 完成專案骨架盤點與重整，建立 GitHub Pages 總大廳首頁（`index.html`）、Multi-Agent 規範檔 `AGENTS.md`、擴充 `.gitignore`，已完成遠端 commit + push 同步。
- 專案線上總大廳入口：[https://garfield543.github.io/teacher-toolkit/](https://garfield543.github.io/teacher-toolkit/)。
- 核心遊戲模組：
  - 🐾 **成語大冒險 v2.0**：[成語遊戲/](https://garfield543.github.io/teacher-toolkit/成語遊戲/)
  - 🎒 **語文遊戲（的得大挑戰）**：[語文遊戲/](https://garfield543.github.io/teacher-toolkit/語文遊戲/)
- 專案開發規範：`classroom-game-builder` 技能已跨四大 AI 平台部署。

## ➡️ 下一步建議 (Next Steps)
1. **製作新遊戲**：隨時在任一 AI 平台說「做一個 XXX 互動遊戲」（例如：做與作辨析、部首大冒險、量詞配對等），系統將自動遵循規範產出標準單一 HTML 遊戲。
2. **課堂實測**：使用平板或電子白板讓學生從大廳入口開始遊玩，測試即時排行榜連線。

## 📝 本次主要更動
- `index.html`：建立專案總大廳 Portal，卡片式導覽直達各遊戲。
- `AGENTS.md`：建立跨 Agent 統一開發標準與三方架構規範。
- `.gitignore`：補齊作業系統、IDE 及各 AI Agent 之忽略規則。
- `README.md` / `handoff.md` / `工作筆記.md`：三方文件完整更新並同步。

## 🕳️ 踩坑與注意事項
- **輕聲符號格式**：標準教育部國語注音符號橫排時，輕聲符號置於拼音開頭前（例：`˙ㄉㄜ`、`˙ㄌㄧ`、`˙ㄗ`、`˙ㄌㄜ`）。
- **三端版面最適化**：鎖定 `100dvh` 與 `touch-action: manipulation`，消除連續點擊延遲與誤觸縮放。
