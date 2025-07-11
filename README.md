<div align="center">
  <h1>Mika Scraper</h1>
  <img src="https://files.catbox.moe/rmobse.jpeg" alt="Mika Scraper Logo" width="800">
  <p>
    <strong>A modular and extensible web scraping toolkit built with TypeScript, axios, and cheerio.</strong>
  </p>
  <p>
    Crafted for developers who need a reliable, fast, and easy-to-use solution for data extraction.
  </p>
  
  <p>
    <a href="https://www.npmjs.com/package/mika-scraper"><img src="https://img.shields.io/npm/v/mika-scraper.svg?style=flat-square" alt="NPM Version"></a>
    <a href="https://github.com/MikaYelovich/mika-scraper/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/MikaYelovich/mika-scraper/ci.yml?branch=main&style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/MikaYelovich/mika-scraper"><img src="https://img.shields.io/codecov/c/github/MikaYelovich/mika-scraper.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://www.npmjs.com/package/mika-scraper"><img src="https://img.shields.io/npm/dt/mika-scraper.svg?style=flat-square" alt="NPM Downloads"></a>
    <a href="https://github.com/MikaYelovich/mika-scraper/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/mika-scraper.svg?style=flat-square" alt="License"></a>
    <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/written%20in-TypeScript-blue.svg?style=flat-square" alt="Written in TypeScript"></a>
  </p>
</div>

---

**Mika Scraper** provides a powerful, decorator-based architecture to build, organize, and manage your web scrapers efficiently. With first-class TypeScript support, robust error handling, and a flexible plugin system, you can focus on extracting data, not on boilerplate code.

## 🤔 Why Mika Scraper?

Web scraping can be complex. You need to handle network requests, parse HTML, manage state, and deal with various anti-bot measures. Mika Scraper simplifies this process by providing a structured framework.

- **✨ Modern & Type-Safe**: Built entirely in TypeScript, offering excellent autocompletion and compile-time checks.
- **🔩 Modular Architecture**: Organize your scrapers into clean, reusable classes. The decorator-based API keeps your code declarative and easy to read.
- **🚀 Powered by the Best**: Uses `axios` for robust HTTP requests and `cheerio` for lightning-fast server-side HTML parsing.
- **🧩 Extensible with Plugins**: Easily add new functionality like caching, proxy rotation, or user-agent switching through a simple plugin system.
- **🛡️ Schema Validation**: Integrated with `zod` for powerful and type-safe validation of your scraped data.
- **💻 Powerful CLI**: A command-line interface to run your scrapers, manage configurations, and streamline your workflow.

---

## 📋 Table of Contents

- Installation
- 🚀 Quick Start
- 🧀 Full Documentation
- 💻 CLI Usage
- 🤝 Contributing
- 📜 License

---

## 🔧 Installation

Get started by installing Mika Scraper using your favorite package manager.

```bash
npm install mika-scraper
# or
yarn add mika-scraper
# or
pnpm add mika-scraper
```

---

## 🚀 Quick Start

Create your first scraper in just a few lines of code. Let's scrape the title from a website.

1.  **Create a file `index.js` or `index.mjs`:**

```js
// esm
import { humanizeText } from 'mika-scraper';
// cjs
const { humanizeText } = require('mika-scraper');

(async() => {
    const result = await humanizeText("Nama saya adalah Zann");
    console.log(result); // "Namaku ialah Zann"
})()
```

2.  **Run the scraper:**

You can run it via `node index.js` or via the CLI.


**Via CLI:**

First, install the CLI globally:
```bash
npm install -g mika-scraper
# or
npm link
```

And now you can run the CLI:

```bash
# Run the scraper by its name
mika-scraper humanize --text "Nama saya adalah Zann"
```

---



---

## 💻 CLI Usage

Mika Scraper comes with a handy CLI to make running your scrapers a breeze.

```bash
mika-scraper <command> [options]
```

**Commands:**

- **`humanize`**: Executes a specific scraper.
  - `--text <text>`: Text to be humanized.
  - `--level`: Level of humanization (default: `enhanced`).
  
**Example:**

```bash
# Run the 'humanize' scraper
mika-scraper humanize --text "Nama saya adalah Zann" --level enhanced
```

---

## 🧀 Full Documentation

> 🌏 **Note:** This documentation is a work in progress.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please make sure to update tests as appropriate.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>
    Crafted with ❤️ by <a href="https://github.com/MikaYelovich">Zann Roderizz</a>
  </p>
</div>