# reciplab-web — Marketing Website

## Overview
Astro-based static marketing site for RecipLab. Multi-language (EN/ES), SEO-optimized, with analytics integration.

## Stack
- Astro 4.x (static site generator)
- Tailwind CSS 3.x
- TypeScript
- Partytown for third-party scripts
- Cookie consent (vanilla-cookieconsent)

## Key Paths
- `src/pages/` — Astro pages (index, privacy, terms)
- `src/components/` — Astro components
- `src/layouts/Layout.astro` — Main layout
- `src/i18n/` — Translation files (en, es)
- `src/styles/` — CSS files
- `public/` — Static assets
- `astro.config.mjs` — Astro configuration

## Standards
All engineering standards, rules, and skills are in `.claude/`:
- `.claude/shared/` — Standards docs (synced from project-standards)
- `.claude/rules/` — Guardrails (global + seo_web)
- `.claude/skills/` — Workflow definitions

## SEO Rules (CRITICAL)
- This site MUST be publicly indexed. **Never add noindex directives.**
- Every page needs: unique `<title>`, `<meta description>`, OG tags.
- Maintain `sitemap.xml` and `robots.txt`.
- See `.claude/shared/SEO_CORE.md` for full SEO standards.
- Target Lighthouse score > 90 on all metrics.

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build   # Static output
npm run preview # Preview build locally
```
