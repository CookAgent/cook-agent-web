# SEO Core Standards

> **Scope**: Applies ONLY to `reciplab-web` (public_web).

## Page Fundamentals
- Every page must have a unique `<title>` tag (50–60 characters).
- Every page must have a unique `<meta name="description">` (120–160 characters).
- Use a single `<h1>` per page; logical heading hierarchy (h1 → h2 → h3).
- All images must have descriptive `alt` attributes.

## Open Graph & Social
- Include `og:title`, `og:description`, `og:image`, `og:url` on every page.
- Include `twitter:card`, `twitter:title`, `twitter:description`.
- OG images: 1200x630px recommended.

## Technical SEO
- Generate and maintain `sitemap.xml`.
- Maintain `robots.txt` allowing crawlers.
- Use canonical URLs (`<link rel="canonical">`) on every page.
- Ensure all pages return 200 status codes.
- 404 page exists and is informative.

## Performance (SEO Impact)
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1.
- Minimize render-blocking resources.
- Use lazy loading for below-fold images.

## Structured Data
- Use JSON-LD for structured data where applicable.
- Recipe-related pages can use Recipe schema (schema.org/Recipe).

## i18n
- Use `hreflang` tags for language variants (es, en).
- Each language version should have its own URL path or subdomain.

## Indexing Policy
- **reciplab-web MUST be indexed.** Never add noindex to this repo.
- Verify Google Search Console is configured.
