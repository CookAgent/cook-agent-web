# Frontend Standards

## Shared (All Frontend Repos)

### TypeScript
- Strict mode enabled.
- Prefer `interface` for object shapes, `type` for unions/intersections.
- No `any` without inline justification comment.

### Styling
- Use Tailwind CSS utility classes as primary styling approach.
- Avoid inline styles; use Tailwind or CSS modules.
- Follow 8pt spacing grid (4, 8, 12, 16, 24, 32, 48, 64).

### Components
- One component per file.
- Use descriptive names matching the file name.
- Keep components focused — extract when complexity grows.

### State Management
- Prefer local state for component-scoped data.
- Use global state (Zustand/Context) only for truly shared data.
- Avoid prop drilling beyond 2 levels — use context or state management.

---

## cook-agent-app (React Native / Expo)

### Navigation
- Use Expo Router (file-based routing in `src/app/`).
- Protected routes in `(protected)/` group.
- Auth routes in `(auth)/` group.

### Styling (NativeWind)
- Use NativeWind (Tailwind for React Native) classes.
- Follow SPACING_GUIDELINES.md for consistent spacing.
- Test on both iOS and Android.

### Data Fetching
- Use React Query (`@tanstack/react-query`) for server state.
- Axios for HTTP client.
- Cache invalidation on mutations.

### Forms
- Use `react-hook-form` with Zod resolvers.
- Validate on submit, show inline errors.

### i18n
- All user-facing strings via `i18next`.
- No hardcoded strings in components.

---

## reciplab-web (Astro)

### Pages
- Use `.astro` components for static content.
- Minimize client-side JavaScript (Astro islands only when needed).
- Pages in `src/pages/`, layouts in `src/layouts/`.

### SEO
- See SEO_CORE.md for SEO-specific standards.
- Every page needs `<title>`, `<meta description>`, and OG tags.

### Performance
- Optimize images (use Astro's built-in image optimization).
- Minimize external scripts (use Partytown for third-party scripts).
- Target Lighthouse score > 90 on all metrics.
