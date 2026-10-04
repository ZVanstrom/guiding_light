# Guiding Hope Resource Center

Static MVP site (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

- `index.html`: the whole site (one page, with sections)
- `styles.css`, `script.js`
- `resources/`: free downloadable PDFs (public)
- `private/`: paid products, client notes and ideas. **Gitignored, never published.**

## Run locally

```bash
python3 -m http.server 8080
```

## Deploy (GitHub Pages)

Repo → Settings → Pages → Source: **Deploy from a branch** → `main` / `(root)`.

## Add a free resource

1. Put the PDF in `resources/` (use a short lowercase-with-dashes name).
2. In `index.html`, copy an existing `<article class="card">` in `#free-resources` and point its button at the PDF.

## Still to connect
- Workbook checkout: Stripe Payment Link in `#shop` is a TEST link. Swap in the live-mode link before launch. PDFs are emailed manually after each sale.
- Contact form: replace `YOUR_FORM_ID` with a [Formspree](https://formspree.io) form ID
- Facebook / Instagram URLs in the footer
