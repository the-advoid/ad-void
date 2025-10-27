<div align="center">
  <img src="https://raw.githubusercontent.com/the-advoid/ad-void/main/assets/icon.png" alt="AdVoid icon - privacy-first ad-block filter list by Igor Dimitrijević (@igorskyflyer), trusted by hundreds of thousands" width="256" height="256">
  <h1>AdVoid</h1>
</div>

<blockquote align="center">Super-Fast Updates • More Complete Blocking • Always-Fresh Protection • Trusted by Thousands Daily</blockquote>

<h4 align="center">
  🛡️ A set of modular, highly-optimized, and efficient filter lists that block ads, trackers, malware, phishing, and intrusive web clutter - from cookie banners to fake links. 👾
</h4>

<br>

## 📃 Table of Contents

- [**Contributing to AdVoid**](#-contributing-to-advoid)
- [**Getting Started**](#-getting-started)
- [**Style Guide**](#-style-guide)
- [**Submitting Pull Requests**](#-submitting-pull-requests)
- [**Before You Submit**](#-before-you-submit)
- [**Maintainer Notes**](#-maintainer-notes)

<br>

## 🤝 Contributing to AdVoid

We appreciate your interest in enhancing the web to be cleaner, faster, and more respectful.

`AdVoid` is a carefully curated set of filter lists and rules designed for accuracy and performance rather than excess.  
`AdVoid` lists are **not** edited directly, they are generated from [**ADBT**](https://github.com/adbt-lang/adbt) templates using the [**Aria**](https://github.com/aria-toolkit/aria-cli) compiler.  

Whether you are proposing a minor adjustment, assisting in the refinement of larger sections or suggesting optimizations, every contribution is significant, even a single rule can improve the browsing experience for thousands of users.

<br>

## 🚀 Getting Started

We welcome:
- 🧱 **New Rules** - New rules that eliminate intrusive content without affecting layout or core functionality.
- 🧪 **Malformed Rule Reports** - Broken, outdated, or overly aggressive filters.
- ⚙️ **Optimizations** - Smaller, smarter, faster alternatives (e.g. modifier shorthand, regex refinement).
- ⚠️ **Anomalies Reports** - Reports of rule(s) that break site(s) functionality.

Use the appropriate [**issue template**](https://github.com/the-advoid/ad-void/issues/new/choose) when opening a suggestion.

<br>

## 🧠 Style Guide
Keep things clean, elegant and straightforward by following the established `AdVoid` conventions:
- All changes should happen in the [**/rules**](https://github.com/the-advoid/ad-void/tree/main/rules) directory, editing the final, compiled filter lists e.g. `AdVoid.Core.txt`, `AdVoid.Full.txt` is **not** permitted ([**why?**](https://github.com/the-advoid/ad-void#-case-study)).
- Use **alias modifiers** when possible (`$1p`, `$xhr`, `$css`, etc.), see [**AdGuard's tutorial**](https://adguard.com/kb/general/ad-filtering/create-own-filters/#basic-rule-modifiers?aid=135952) for more information.
- Group filters by domain and function. Keep unrelated rules separate.
- Regex should be precise and performant; avoid overly greedy or complex expressions. Use them sparingly.
- Prefer CSS filters (`##`) over JS scriptlets (`##+js`) unless JS is required.
- Single rule per commit is *desired* but not **required**.

<br>

## 📄 Submitting Pull Requests
- Fork the repo and create a new branch.
- Name your PR using a clear, prefix-based format, e.g.  
  `feat: add filter for example.com`  
  `fix: regex adjustment for Imgur scriptlet`  
  `chore: replace verbose modifiers with shorthand`
- Add the rule(s) to the files listed under the [**/rules**](https://github.com/the-advoid/ad-void/tree/main/rules) directory.
- If applicable, mention which list your edit applies to (`AdVoid.Full`, `AdVoid.Lite`, etc.).
- If your change affects multiple lists, please explain why in the PR description.

*PRs that are respectful, focused, and well-explained get reviewed fastest.*

<br>

## ✅ Before You Submit
- [ ] Ensure that the modifications only apply to files in the [**/rules**](https://github.com/the-advoid/ad-void/tree/main/rules) directory.
- [ ] Ensure your rules don't break essential site functionality.
- [ ] Check for duplicates; someone may have suggested a similar fix.
- [ ] Run a dry test with [**AdGuard**](https://adguard.com?aid=135952), [**uBlock Origin**](https://ublockorigin.com/) or another supported engine.
- [ ] Follow the commit and PR naming guidelines above.
- [ ] You acknowledge your PR *might* get modified or declined if it doesn't align with `AdVoid's` conventions.

<br>

## 🧷 Maintainer Notes
This project values:
- Simplicity without compromise
- Speed without sloppiness
- Collaboration without ego
