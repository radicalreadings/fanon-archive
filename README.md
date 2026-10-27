# Radical Readings

Book club reading resources — meeting date/time, supplemental links, and book info for each session. Built with Vue 3 + Vuetify, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run type-check` | Type-check only |
| `npm run lint` | Lint the project |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format `src/` with Prettier |

## Structure

One Vue page per book, each its own HTML entry (Vite multi-page build) — no router, no theme toggle, no landing page, no shared data schema. Just write the page:

| Book | HTML entry | Entry script | Page | URL |
| --- | --- | --- | --- | --- |
| The Wretched of the Earth | `fanon/index.html` | `src/entries/wretched.ts` | `src/pages/WretchedOfTheEarth.vue` | `/fanon/` |
| Settlers | `settlers/index.html` | `src/entries/settlers.ts` | `src/pages/Settlers.vue` | `/settlers/` |

- `src/pages/*.vue` — the book's content, written directly in the page, using the shared `CoverImage` and `QrCode` components
- `src/App.vue` — the app shell (header/footer); renders whichever page it's given
- `src/mountPage.ts` — creates the app for a given page; each entry script just calls it
- `index.html` — the site root; just redirects to the current book's page

Cover images go in `public/covers/<book>/`, listed in the page's covers array (e.g. `'covers/wote/....jpg'`). Favicons go in `public/favi/`, referenced from that book's HTML entry.

## Adding another book

1. Copy an existing page in `src/pages/` and fill in its own values, including `PAGE_URL` (used for the QR code).
2. Add an entry script in `src/entries/` that calls `mountPage` with the new page.
3. Add `<book>/index.html` (copy `settlers/index.html`), pointing its `<script>` at the new entry script and setting its own title/favicon.
4. Register the HTML file under `build.rollupOptions.input` in `vite.config.ts`.
5. Point the redirect in the root `index.html` at the new book's URL.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which lints, builds, and publishes the site to GitHub Pages automatically. Pull requests and other branches run [`.github/workflows/ci.yml`](.github/workflows/ci.yml) (lint + build) without deploying.

For this to work, the repo's **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.

The site is served at the root of `https://radicalreadings.github.io/`, which requires this repo to be named `radicalreadings.github.io` (a GitHub Pages user/org site). Each book lives at its own path (`/fanon/`, `/settlers/`); `/fanon/` is kept as-is so QR codes already printed for Wretched keep working.
