# IPTV Germany

German-language IPTV subscription platform — [iptv-germany.com](https://iptv-germany.com).
Premium IPTV in Deutschland: über 31.000 TV-Sender, Filme und Serien in 4K.

## Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)        |
| UI         | React 19, TypeScript                      |
| Styling    | Tailwind CSS v4                           |
| Icons      | Lucide React                              |
| Data       | Supabase (phone number), TMDB, TheSportsDB|

## Features

- **SEO-first architecture** — per-page metadata, JSON-LD (Organization, WebSite, FAQPage),
  sitemap, robots, OpenGraph/Twitter cards, 308 canonical redirects.
- **Next.js 16 Cache Components** — static pages with tag-based invalidation
  (`cacheLife` / `cacheTag`), on-demand revalidation via `POST /api/revalidate`.
- **Performance** — AVIF/WebP image optimization, `content-visibility: auto` sections,
  `afterInteractive` analytics, lazy-loaded client islands.
- **Accessibility** — skip-to-content link, focus-trapped mobile menu, ARIA-labelled
  accordions/tabs, `prefers-reduced-motion` support.
- **Security headers** — CSP-adjacent protections (nosniff, X-Frame-Options, HSTS,
  Referrer-Policy, Permissions-Policy).

## Getting Started

Requirements: Node.js >= 20.9 (pinned via `engines` in `package.json`).

```bash
npm install
cp .env.example .env.local   # optional — all variables have safe fallbacks
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start dev server (Turbopack)      |
| `npm run build` | Production build + type check     |
| `npm run start` | Start production server           |
| `npm run lint`  | Run ESLint                        |

## Environment Variables

All variables are optional. The build and runtime degrade gracefully when they are
unset. See `.env.example` for the full list and comments.

| Variable                      | Purpose                                  |
| ----------------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`    | Supabase project URL (phone number API)  |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key                |
| `NEXT_PUBLIC_FALLBACK_PHONE`  | Fallback phone when Supabase is unset    |
| `REVALIDATE_SECRET`           | Bearer token for `POST /api/revalidate`  |
| `NEXT_PUBLIC_GA_ID`           | Google Analytics 4 ID (optional)         |
| `NEXT_PUBLIC_GTM_ID`          | Google Tag Manager ID (optional)         |
| `NEXT_PUBLIC_TMDB_API_KEY`    | TMDB key for /popular metadata           |
| `NEXT_PUBLIC_SPORTSDB_API_KEY`| TheSportsDB key (defaults to test key)   |

## Deployment (Vercel)

Zero-config deployment — connect the GitHub repository to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brahimkarmouna0x-stack/iptv-germany)

1. Import the repo on [vercel.com/new](https://vercel.com/new).
2. Add the environment variables from `.env.example` in Project → Settings → Environment Variables.
3. Deploy. Framework preset (Next.js) is detected automatically; no `vercel.json` needed.

## Project Structure

```
src/
├── app/            # Routes (App Router), layout, metadata, sitemap, robots
│   ├── api/        # Route handlers (phone-number, revalidate)
│   └── [routes]/   # Landing, support, legal pages
├── components/
│   ├── analytics/  # GA4 / GTM / Web Vitals
│   ├── layouts/    # NavBar, Footer
│   ├── sections/   # Landing page sections + page-specific renderers
│   ├── seo/        # Breadcrumbs, JSON-LD
│   ├── shared/     # Logo, SafeImage, WhatsAppButton, ...
│   └── ui/         # Small presentational primitives
├── constants/      # Static data (pricing, devices, testimonials, ...)
├── content/        # Page content models (iptv-german-pages, sixteen-section)
├── hooks/          # Client hooks (phone number, popular/search content)
└── lib/            # SEO, settings, TMDB, structured data, utils
```

## License

Private project.
