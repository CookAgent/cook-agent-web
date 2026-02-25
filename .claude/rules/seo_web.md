# SEO Web Rules

> **Scope**: reciplab-web ONLY

## Indexing
- This site MUST be publicly indexed. Never add `noindex` directives.
- Maintain `sitemap.xml` and `robots.txt`.
- Use canonical URLs on all pages.

## Page Requirements
- Every page: unique `<title>`, `<meta description>`, OG tags.
- Single `<h1>` per page with logical heading hierarchy.
- All images have descriptive `alt` text.

## Performance
- Lighthouse score must remain > 90 on all metrics.
- Use Astro's static rendering — avoid unnecessary client JS.
- Use Partytown for third-party scripts (analytics, GTM).
- Optimize all images (WebP preferred).

## Content Changes
- Verify SEO impact before removing or restructuring pages.
- Redirects (301) for any removed URLs that had traffic.
- Test with Google's Rich Results Test after structured data changes.

## Analytics
- Google Analytics / GTM must remain functional.
- Cookie consent must be shown before tracking activates.
