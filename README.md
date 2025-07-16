# 🌐 MIKA Scraper — Modular, Modern Web Scraping Toolkit

![MIKA Scraper Logo](https://files.catbox.moe/mhd4vl.jpeg)

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

## 🔥 New in v1.2.0

- ✅ Adding Some Features

### 🥞 New Features

- `BlackboxChat()` - Chat With Blackbox AI Model
  > ♑ Cek Documentation [BlackboxChat()](https://mika-scrapdocs.ichiapi.my.id/functions/BlackboxChat)
- `GPTImageCanvas()` - Edit your image using GPT Image
  > 🌊 Cek Documentation [GPTImageCanvas()](https://mika-scrapdocs.ichiapi.my.id/functions/GPTImageCanvas)
- `ScreenshotWebsite()` - Screenshot a website
  > 🥬 Cek Documentation [ScreenshotWebsite()](https://mika-scrapdocs.ichiapi.my.id/functions/ScreenshotWebsite)
- `VocalRemover()` - Remove the Vocal on the Audio
  > 🥟 Cek Documentation [VocalRemover()](https://mika-scrapdocs.ichiapi.my.id/classes/VocalRemover)
- `YoutubeTracker()` - Track Youtube with username
  > 🌺 Cek Documentation [YoutubeTracker()](https://mika-scrapdocs.ichiapi.my.id/classes/YoutubeTracker)
- `YTDL2()` - Download Audio and Video on Youtube ( Versi 2 )
  > 🥬 Cek Documentation [YTDL2()](https://mika-scrapdocs.ichiapi.my.id/classes/YTDL2)
- `TiktokEarnings()` - Track Tictiok Earnings with username
  > 💝 Cek Documentation [TiktokEarnings()](https://mika-scrapdocs.ichiapi.my.id/classes/TiktokEarnings)
- `TranslateImageClient()` - Translate to Text into the Image Ecommerse Product
  > 💝 Cek Documentation [TranslateImageClient()](https://mika-scrapdocs.ichiapi.my.id/classes/TranslateImageClient)
- `ChatUpAI()`
  > 💝 Cek Documentation [ChatUpAI()](https://mika-scrapdocs.ichiapi.my.id/classes/ChatUpAI)
- `GalaxyAI()`
  > 💝 Cek Documentation [GalaxyAI()](https://mika-scrapdocs.ichiapi.my.id/classes/GalaxyAI)
- `SnappinDownloader()`
  > 💝 Cek Documentation [SnappinDownloader()](https://mika-scrapdocs.ichiapi.my.id/classes/SnappinDownloader)

> ⚠️ Note: Features like `DeepfakeTransform()` ad `text2nsfw()` are intended for ethical, educational use only.

---

## 📦 Installation

```bash
npm install mika-scraper
# or
yarn add mika-scraper
# or
pnpm add mika-scraper
# or
bun install mika-scraper
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
# if done, run a command, (e.g in below)
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

🌸 Documentation is now ready

> 🍃 Link Documentation: [https://mika-scrapdocs.ichiapi.my.id](https://mika-scrapdocs.ichiapi.my.id/resources)

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
