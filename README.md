# HiDef Textíll – Website
A single-language Icelandic site using the hi.css color scheme.

This workspace is configured with:
- Zensical (see `requirements.txt`)
- Pages under `docs/` (Icelandic)

Local quickstart

1. Create and activate a virtual environment:

```bash
python -m venv .venv
.\.venv\Scripts\activate
```

2. Install Python dependencies from `requirements.txt`:

```bash
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

3. Build and serve the site with Zensical:

```bash
python -m zensical build
python -m zensical serve
```

Files of interest:
- `zensical.toml` – site config and global CSS/JS includes
- `docs/` – content pages (Icelandic)
