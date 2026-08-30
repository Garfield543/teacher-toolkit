# 專案交接紀錄 (Handoff)

- **更新時間**：2026-08-30 15:42
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 完成全新互動工具模組「**語文遊戲（的得大挑戰）**」初始化、80+ 題庫池、注音雙開關（標準輕聲 `˙ㄉㄜ`）與 Firebase 排行榜 / 進度牆全功能上線。
- 提煉並建立 **`classroom-game-builder`（國小班級互動教學遊戲建置器）** 專案技能，已成功部署至 **AntiGravity**、**Codex**、**Claude Code**、**Claude Desktop** 四大環境。
- 線上展示網址：[https://garfield543.github.io/teacher-toolkit/語文遊戲/](https://garfield543.github.io/teacher-toolkit/%E8%AA%9E%E6%96%87%E9%81%8A%E6%88%B2/)。

## ➡️ 下一步建議 (Next Steps)
1. **製作新遊戲**：隨時在任一 AI 平台（AntiGravity / Codex / Claude）說「做一個 XXX 互動遊戲」（如：部首大冒險、量詞配對、多音字辨析等），將自動遵循 `classroom-game-builder` 規範產出標準三端適配、注音開關與排行榜之單一 HTML 檔案。
2. **課堂實測**：使用平板或電子白板讓學生試玩「成語遊戲」與「語文遊戲」，觀察注音切換與排行榜連線。

## 📝 本次主要更動
- `語文遊戲/index.html`：完整互動主程式，含注音開關（前置輕聲 `˙ㄉㄜ`）、三端響應式介面、Web Audio 音效與 Firebase 即時榜。
- `classroom-game-builder` 技能：跨四大 AI 平台部署，封裝遊戲化學習標準。
- `README.md` / `ANTIGRAVITY.md` / `CLAUDE.md` / `handoff.md` / `工作筆記.md`：三方文件完整更新。

## 🕳️ 踩坑與注意事項
- **輕聲符號格式**：標準教育部國語注音符號橫排時，輕聲符號置於拼音開頭前（例：`˙ㄉㄜ`、`˙ㄌㄧ`、`˙ㄗ`、`˙ㄌㄜ`）。
- **三端版面最適化**：鎖定 `100dvh` 與 `touch-action: manipulation`，消除連續點擊延遲與誤觸縮放。
