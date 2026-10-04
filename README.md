# Guiding Hope Resource Center

Static MVP site (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

- `index.html`: home page (sections for each part of the site)
- `resources/*.html`: one page per free resource, plus its PDF
- `privacy.html`, `refunds.html`: boilerplate policies (have the owner review them)
- `sitemap.xml`, `robots.txt`: for search engines
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

Each resource has its own page in `resources/` so Google can find it.

1. Put the PDF in `resources/` (short lowercase-with-dashes name).
2. Copy `resources/isp-meeting-guide.html` to `resources/<slug>.html` and replace the title, description and content. Or fill in one of the placeholder pages: replace every `class="blank"` element and delete its `noindex` meta tag.
3. Link it from a card in `#free-resources` in `index.html`.
4. Add its URL to `sitemap.xml`.

## Still to connect
- Workbook checkout: Stripe Payment Link in `#shop` is a TEST link. Swap in the live-mode link before launch. PDFs are emailed manually after each sale.
- Contact form: replace `YOUR_FORM_ID` with a [Formspree](https://formspree.io) form ID
- Facebook / Instagram URLs in the footer
