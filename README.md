![The Polished Co. Ke preview](.github/preview.png)

# The Polished Co. Ke

Website for **The Polished Co. Ke**, a beauty studio in Juja, Kenya run by Jael offering nails, lashes, makeup, wigs, waxing, massage services, and beauty retail.

Built with [Astro](https://astro.build) + TypeScript as a fully static site: no backend, no database, no accounts, no payment gateway.

## Requirements

Node.js `>=22.12.0`, npm.

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

Visit `http://localhost:4321`.

## Scripts

| Command           | Action                                    |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the local dev server                 |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the production build locally       |
| `npm run check`   | Type-check the project                     |

## Adding or Updating Content

- **Prices, taglines, descriptions, and collection status** (`active` / `coming-soon`) all live in one file: `src/data/collections.ts`. No component changes needed.
- **Photos and videos** are discovered automatically — drop any file into `src/assets/media/<collection-slug>/images/` or `.../videos/`, rebuild, and it appears in that collection's gallery. Supported formats: `.jpg/.jpeg/.png/.webp/.avif/.gif` for photos, `.mp4/.webm` for video.
- **Business details** (phone, email, WhatsApp, hours) live in `src/config/business.ts`; social links in `src/config/social.ts`.
- **Booking, policies, and studio defaults** (cancellation notice, late-arrival window, payment methods) are plain text in `src/components/BookingForm.astro` and `src/pages/policies.astro` — edit directly.

## Reviews

Reviews are collected via a Google Form and read from a published-to-web Google Sheet CSV at build time (`src/utils/reviews.ts`). Set `REVIEWS_SHEET_CSV_URL` and `REVIEW_FORM_URL` in `.env` (see `.env.example`); without them, the site shows the "no reviews yet" empty state instead of failing.

## Theme

Light and dark mode are both supported (`src/components/ThemeToggle.astro`), following the visitor's system setting by default until they toggle manually, which is then remembered.

## Deployment

Pushing to `main` deploys automatically to GitHub Pages via `.github/workflows/deploy.yml`. See that file for the `SITE_URL` / `SITE_BASE` values and the two review-related repository secrets. Switching to a custom domain only requires editing those two lines.

## Project Structure

```
src/
├── components/     Reusable UI (Navbar, GlassCard, Gallery, BookingForm, ...)
├── config/         Business info, social links, nav
├── data/           Collections + pricing (the main content file)
├── layouts/        BaseLayout (SEO, theme, global chrome)
├── pages/          Routes, including the dynamic /services/[slug] pages
├── styles/         Design tokens + global CSS
└── utils/          Media discovery, reviews, WhatsApp links, routing
```

## Status

Live in production

## License

MIT