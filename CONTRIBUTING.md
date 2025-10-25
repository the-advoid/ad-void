<div align="center">
  <img src="https://raw.githubusercontent.com/the-advoid/ad-void/main/assets/icon.png" alt="AdVoid icon - privacy-first ad-block filter list by Igor Dimitrijević (@igorskyflyer), trusted by hundreds of thousands" width="256" height="256">
  <h1>AdVoid</h1>
</div>

<blockquote align="center">Super-Fast Updates • More Complete Blocking • Always-Fresh Protection • Trusted by Thousands Daily</blockquote>

<h4 align="center">
  🛡️ A set of modular, highly-optimized, and efficient filter lists that block ads, trackers, malware, phishing, and intrusive web clutter - from cookie banners to fake links. 👾
</h4>

<br>

## 🤝 Contributing to AdVoid

We appreciate your interest in enhancing the web to be cleaner, faster, and more respectful.

AdVoid is a carefully curated set of filter rules designed for accuracy and performance rather than excess. Whether you are proposing a minor adjustment, assisting in the refinement of larger sections or suggesting optimizations, every contribution is significant.

## 🚀 Getting Started

We welcome:
- 🧪 **Malformed Rule Reports** — Broken, outdated, or overly aggressive filters.
- ⚙️ **Optimizations** — Smaller, smarter, faster alternatives (e.g. modifier shorthand, regex refinement).
- 🧱 **New Rules** — Targeted filters that eliminate intrusive content without affecting layout or core functionality.

Use the appropriate [**issue template**](https://github.com/the-advoid/ad-void/issues/new/choose) when opening a suggestion.

## 🧠 Style Guide

Keep things clean, elegant, and surgically precise. Follow the established AdVoid conventions:

- Use **alias modifiers** when possible (`$1p`, `$xhr`, `$css`, etc.).
- Group filters by domain and function. Keep unrelated rules separate.
- Regex should be precise and performant—avoid overly greedy or complex expressions.
- Prefer CSS filters (`##`) over JS scriptlets (`##+js`) unless JS is required.

> ✳️ *Less is more: every rule should justify its presence.*

## 📄 Submitting Pull Requests

- Fork the repo and create a topic branch.
- Name your PR using a clear, prefix-based format, e.g.  
  `feat: add filter for example.com`  
  `fix: regex adjustment for Imgur scriptlet`  
  `chore: replace verbose modifiers with shorthand`
- If applicable, mention which list your edit applies to (`AdVoid.Full`, `AdVoid.Lite`, etc.).

PRs that are respectful, focused, and well-explained get reviewed fastest.

## ✅ Before You Submit

- [ ] Ensure your rules don't break essential site functionality.
- [ ] Check for duplicates—someone may have suggested a similar fix.
- [ ] Run a dry test with uBlock Origin or another supported engine.
- [ ] Follow the commit and PR naming guidelines above.

## 🧷 Maintainer Notes

This project values:
- Simplicity without compromise
- Speed without sloppiness
- Collaboration without ego

---
