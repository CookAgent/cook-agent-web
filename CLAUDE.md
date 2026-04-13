# reciplab-web — Marketing Website

## Overview
Astro-based static marketing site for RecipLab. Path-based i18n (EN/ES/CA), SEO-optimized, with analytics integration.

## Stack
- Astro 4.x (static site generator, Vercel adapter)
- Tailwind CSS 3.x
- TypeScript
- Partytown for third-party scripts
- Cookie consent (vanilla-cookieconsent)

## Key Paths
- `src/pages/index.astro` — Root redirect → `/en/`
- `src/pages/[lang]/` — Localized routes (`index`, `privacy`, `terms`) via `getStaticPaths`
- `src/components/` — Astro components (each accepts `lang` prop)
- `src/layouts/Layout.astro` — SEO layout with hreflang, canonical, OG, JSON-LD
- `src/i18n/` — `en.ts`, `es.ts`, `ca.ts`, `translations.ts`, `ui.ts` (Locale type, helpers)
- `src/content/blog/{lang}/` — Blog content collection scaffold (see `src/content/config.ts`)
- `src/styles/` — CSS files
- `public/` — Static assets + `robots.txt`
- `astro.config.mjs` — Astro + native i18n config + sitemap i18n + Vercel adapter

## SEO Architecture
- **Path-based i18n**: every locale has its own canonical URL (`/en/`, `/es/`, `/ca/`)
- **hreflang**: emitted for all 3 locales + `x-default` pointing to `/en/`
- **Sitemap**: auto-generated with locale alternates via `@astrojs/sitemap`
- **Schema.org JSON-LD**: `SoftwareApplication` on home by default; pages can override via `structuredData` prop
- **Language switcher**: navigates to the localized URL (no client-side text swap) to preserve canonical semantics
- Lighthouse target: > 90 on all metrics

## Standards
All engineering standards, rules, and skills are in `.claude/`:
- `.claude/rules/` — Guardrails (global + seo_web)

## SEO Rules (CRITICAL)
- This site MUST be publicly indexed. **Never add noindex directives.**
- Every page needs: unique `<title>`, `<meta description>`, OG tags, hreflang, canonical.
- Maintain `sitemap.xml` and `robots.txt`.
- Target Lighthouse score > 90 on all metrics.

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build   # Static output via Vercel adapter
npm run preview # Preview build locally
```

## Adding content
- To add a UI string: add the key to `src/i18n/en.ts`, `es.ts`, `ca.ts`, then reference as `{t["your.key"]}` in components.
- To add a blog post: create `src/content/blog/{lang}/{slug}.md` with frontmatter matching `src/content/config.ts`.
