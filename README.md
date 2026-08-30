# 老師班級工具箱 (teacher-toolkit) 🧰

專為第一線國小課堂與教師設計的互動教學遊戲與實用工具集。

🌐 **線上遊戲大廳**：[https://garfield543.github.io/teacher-toolkit/](https://garfield543.github.io/teacher-toolkit/)

---

## 🛠️ 現有工具清單

| 工具名稱 | 適用對象 | 核心特色 | 線上連結 |
| :--- | :---: | :--- | :---: |
| **🐾 [成語大冒險 v2.0](./成語遊戲/)** | 國小低 / 中年級 | 4 種玩法、三輯精選題庫、Web Audio 音效、Firebase 班級榜與 1~30 號進度牆 | [🔗 開始遊玩](https://garfield543.github.io/teacher-toolkit/成語遊戲/) |
| **🎒 [語文遊戲 — 的得大挑戰](./語文遊戲/)** | 國小低年級 | 🔤 題目注音一鍵切換（標準前置輕聲˙ㄉㄜ）、百寶袋與打分數小老師口訣、80+ 去答案化隨機題庫、8 秒彩虹競速、叮咚四連音 | [🔗 開始遊玩](https://garfield543.github.io/teacher-toolkit/語文遊戲/) |

---

## 🌟 互動遊戲四大核心標準 (classroom-game-builder)

專案內所有遊戲均嚴格遵循以下四項規格開發：
1. 🔤 **題目注音開關**：標準教科書 Ruby 標註、前置輕聲（˙ㄉㄜ），提供一鍵切換與記憶。
2. 📱 **三端自適應排版**：大螢幕白板、iPad 平板、直橫式手機自適應，大觸控熱區與防誤觸縮放（100dvh）。
3. 🔊 **Web Audio 即時合成音效**：清脆叮咚四連音、低沉喔喔下滑音與通關號角，無外部音檔相依。
4. ☁️ **Firebase 班級即時榜**：1~30 號免打字點選，自動聚合全班通關狀態與英雄榜。

---

## 📁 檔案結構

`
teacher-toolkit/
├── index.html                                        # 遊戲與教學大廳入口（GitHub Pages 首頁）
├── README.md                                         # 專案總說明與架構
├── AGENTS.md                                         # Multi-Agent 開發指引
├── ANTIGRAVITY.md / CLAUDE.md                        # AntiGravity & Claude 專案指引
├── handoff.md                                        # 跨平台交接狀態紀錄
├── 成語遊戲/                                          # 成語大冒險模組
│   ├── index.html
│   └── README.md
└── 語文遊戲/                                          # 語文辨析模組（的得大挑戰）
    ├── index.html
    ├── README.md
    ├── 國小「的」「得」互動遊戲設計---Google-Gemini.md
    └── 教一年級分辨「做」與「作」---Google-Gemini.md
`

---

## 🚀 常用操作指令

- **開工**：對 AI 說「**開工**」，自動檢查進度、更新狀態並提供下一步建議。
- **收工**：對 AI 說「**收工**」，自動執行三方同步（Git commit + push、更新 Obsidian 工作筆記與 handoff.md）。
- **建立新遊戲**：對 AI 說「**我想做一個 XXX 遊戲**」，將自動載入 classroom-game-builder 規格進行開發。
