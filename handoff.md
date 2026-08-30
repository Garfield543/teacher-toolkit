# 專案交接紀錄 (Handoff)

- **更新時間**：2026-08-30 15:23
- **專案名稱**：teacher-toolkit (老師班級工具箱)

## ⏯️ 目前進度 / 上次做到哪
- 已將互動遊戲之核心規格（注音開關、電腦/手機/平板三端響應式排版、Web Audio 音效、Firebase 班級排行榜與進度牆）封裝為全域專案技能 `classroom-game-builder`（國小班級互動教學遊戲建置器）。
- 已部署至 AntiGravity (`~/.gemini/config/skills/classroom-game-builder`) 與 Claude (`~/.claude/skills/classroom-game-builder`)。
- 「語文遊戲（的得大挑戰）」線上版：[https://garfield543.github.io/teacher-toolkit/語文遊戲/](https://garfield543.github.io/teacher-toolkit/%E8%AA%9E%E6%96%87%E9%81%8A%E6%88%B2/)。

## ➡️ 下一步建議 (Next Steps)
1. **製作新遊戲**：未來隨時可對 AI 說「做一個 XXX 互動遊戲」（如：部首大冒險、量詞配對、多音字辨析等），將自動遵循 `classroom-game-builder` 規範產出標準三端適配、注音開關與排行榜之單一 HTML 檔案。
2. **課堂實測**：使用平板或電子白板讓學生試玩「成語遊戲」與「語文遊戲」，驗證注音切換與排行榜連線。

## 📝 本次主要更動
- `classroom-game-builder`：建立專案技能 SKILL.md 定義檔（雙平台部署）。
- `語文遊戲/index.html`：校正注音為標準前置輕聲 `˙ㄉㄜ`，支援雙開關。
- `handoff.md` / `工作筆記.md`：同步更新交接紀錄。

## 🕳️ 踩坑與注意事項
- **輕聲符號格式**：標準教育部國語注音符號橫排時，輕聲符號置於拼音開頭前（例：`˙ㄉㄜ`、`˙ㄌㄧ`、`˙ㄗ`、`˙ㄌㄜ`）。
