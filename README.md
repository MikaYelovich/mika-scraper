# 🌐 MIKA Scraper — Modular, Modern Web Scraping Toolkit

![MIKA Scraper Logo](https://files.catbox.moe/cj0afq.jpeg)

[![NPM Version](https://img.shields.io/npm/v/mika-scraper.svg?style=for-the-badge)](https://www.npmjs.com/package/mika-scraper)
[![Downloads](https://img.shields.io/npm/dt/mika-scraper.svg?style=for-the-badge)](https://www.npmjs.com/package/mika-scraper)
[![License](https://img.shields.io/npm/l/mika-scraper.svg?style=for-the-badge)](https://github.com/MikaYelovich/mika-scraper/blob/main/LICENSE)
![TypeScript](https://img.shields.io/badge/written%20in-TypeScript-blue.svg?style=for-the-badge)

---

**MIKA Scraper** is a fully extensible, decorator-powered web scraping toolkit written in TypeScript. Engineered for performance and simplicity, it empowers developers to focus on what matters most—**data extraction**.

---

## 🚀 Why Choose MIKA Scraper?

- 🧠 **Type-Safe & Modern**: Built with TypeScript, ensuring robust autocompletion and strict typing.
- 🧩 **Plugin-Ready**: Seamlessly integrate plugins for caching, proxy handling, UA rotation, and more.
- 🛠 **Decorator API**: Clean, declarative syntax for scraper logic.
- ⚡ **Powered by Axios + Cheerio**: Proven performance for HTTP and HTML parsing.
- 🛡️ **zod Integration**: Schema validation for type-safe results.
- 🧑‍💻 **CLI Included**: Powerful CLI to simplify scraping tasks.

---

## 🔥 New in v1.1.0

### Core Fixes & Optimizations

- ✅ Fix Gemini Image Error

### 🆕 Features

- `AIFreeBox`
- `Deepfake` – Realistic media generation
- `ToGhibli` – Turn prompts into Studio Ghibli style
- `MCStalker`, `Nakanimendo`, `Song Lyrics`, `Gemini`, `CatboxUpload`, `imageToPrompt`, `SnackVideoDownloader`, `GuessFlag`

### 🥞 New Features

- `ImageFilter` - Filter your image to many style, 39 filter (e.g: toBlack, toWhite, toHijab)
- `GPTOnline` - Chat with GPT Online
- `TextToNsfw` - Make text to NSFW image
- `TokopediaSearch` - Search product info on Tokopedia

> ⚠️ Note: Features like `Deepfake` ad `TextToNsfw` are intended for ethical, educational use only.

---

## 📦 Installation

```bash
npm install mika-scraper
# or
yarn add mika-scraper
# or
pnpm add mika-scraper
```

---

## ⚡ Quick Start

```js
// index.js
// ESM
import { humanizeText } from 'mika-scraper';
// CJS
const { humanizeText } = require('mika-scraper');

(async () => {
  const result = await humanizeText('Nama saya adalah Zann');
  console.log(result); // Output: "Namaku ialah Zann"
})();
```

### Run via CLI

```bash
npm install -g mika-scraper

mika-scraper humanize --text "Nama saya adalah Zann" --level enhanced
```

---

## 💻 CLI Guide

```bash
mika-scraper <command> [options]
```

### Commands

- `humanize`:
  - `--text <text>`: Text to humanize
  - `--level`: Humanization level (default: `enhanced`)

Example:

```bash
mika-scraper humanize --text "Nama saya adalah Zann" --level enhanced
```

---

## 📚 Documentation

> 📘 Full documentation is currently being expanded.

---

## 🤝 Contribution Guide

1. Fork this repo
2. Create your feature branch: `git checkout -b feat/AmazingFeature`
3. Commit: `git commit -m "Add AmazingFeature"`
4. Push: `git push origin feat/AmazingFeature`
5. Open Pull Request

---

## 📜 License

MIT License © [Zann Roderizz](https://github.com/MikaYelovich)

---

_Crafted with ❤️ by Zann Roderizz_
