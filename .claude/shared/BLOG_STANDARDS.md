# Blog Standards

> **Scope**: Applies ONLY to `reciplab-web` (public_web) if/when a blog is added.

## Content Structure
- Every blog post needs: title, meta description, featured image, author, date.
- Use semantic HTML: `<article>`, `<header>`, `<time>`, `<footer>`.
- Include a table of contents for posts over 1000 words.

## SEO for Blog Posts
- URL slug: lowercase, hyphenated, descriptive (`/blog/how-to-meal-prep`).
- Include target keyword in title, first paragraph, and at least one heading.
- Internal linking: link to relevant app features or other posts.
- External links: open in new tab with `rel="noopener noreferrer"`.

## Images
- Compress images before upload (WebP preferred, fallback to JPEG).
- Include descriptive alt text with natural keyword usage.
- Use responsive images (`srcset`).

## Performance
- Blog pages must meet same Lighthouse targets as landing pages (> 90).
- Lazy load images below the fold.
- No heavy JavaScript on blog pages.
