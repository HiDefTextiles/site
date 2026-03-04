# HiDef Textíll – Website
A bilingual (IS/EN) static site built with MkDocs + Material.
This repository contains the source code for the HiDef Textíll project website.

The site is:
- Bilingual (Icelandic + English)
- Built with MkDocs + Material
- Uses a simple language‑toggle system with both languages in the same file
- Deployed automatically using GitHub Actions → GitHub Pages

The goal is to provide an accessible, flexible, and lightweight documentation‑style site for presenting the HiDef Textíll project, its research outputs, tools, and public engagement activity.

# Folder Structure
The repository is organized to be clear, minimal, and easy to extend.


```
hidef-textill-site/
├─ docs/
│  ├─ index.md
│  ├─ stylesheets/
│  │  └─ extra.css
│  ├─ javascripts/
│  │  └─ lang-toggle.js
│  ├─ assets/
│  │  └─ images/
│  │     └─ placeholder-logo.png
├─ mkdocs.yml
├─ .gitignore
├─ requirements.txt
└─ .github/
   └─ workflows/
      └─ deploy.yml
```

