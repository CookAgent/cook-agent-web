# The ultimate Astro + Google Analytics guide

This document is a compact copy of the guide you provided and includes quick, repo-specific steps to implement GA4 in this project.

## Before you proceed

⚠️ You probably do not need Google Analytics. Consider modern privacy-first alternatives (self-hosted, lighter, no cookie banners).

If you still want GA4, follow the instructions below.

## 0. Get your GA4 tracking ID

- Create or sign in to your Google Analytics account.
- In Admin, create an Account and then a GA4 Property.
- Create a Data Stream — the measurement ID looks like `G-XXXXXXXXXX`.

## 1. What this repo already includes

- `src/layouts/Layout.astro` now supports:
  - Google Tag Manager (GTM) via `PUBLIC_GTM_ID` (already added earlier).
  - Google Analytics (GA4) via `PUBLIC_GA_ID` and only loads in production (`import.meta.env.PROD`).
  - Optional Partytown integration (toggle with `USE_PARTYTOWN=true`).
  - Optional CookieConsent scaffold (toggle with `USE_COOKIECONSENT=true`).

## 2. Basic implementation (already wired)

1. Set your GA ID in a `.env` file at project root (do not commit):

```
PUBLIC_GA_ID=G-XXXXXXXXXX
```

2. The layout injects the GA scripts only in production (`npm run build` / `npm run preview`). To test locally without production, you can temporarily set `PUBLIC_GA_ID` and `USE_PARTYTOWN`/`USE_COOKIECONSENT` in `.env` and run `npm run dev`, but by default GA is gated to `import.meta.env.PROD`.

3. The layout will load `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX` and inline `gtag` initialization. When `USE_PARTYTOWN=true`, the scripts will be added with `type="text/partytown"` so Partytown can handle them.

## 3. Disabling Google Analytics in Development

GA is now loaded only when `import.meta.env.PROD` is true and `PUBLIC_GA_ID` is set. If you want to change this behavior, edit `src/layouts/Layout.astro`.

## 4. Partytown

Partytown lets you run third-party scripts in a Web Worker.

- To add Partytown to this project automatically:

```bash
npx astro add partytown
```

- Or install manually:

```bash
npm install @astrojs/partytown
```

Then add in `astro.config.mjs`:

```js
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [partytown({ config: { forward: ["dataLayer.push"] } })],
});
```

- To enable Partytown behavior in the layout, set `USE_PARTYTOWN=true` in your `.env`.

## 5. Consent (CookieConsent) — scaffold provided

- This repo contains a scaffold at `src/components/cookie-consent` with `CookieConsentConfig.ts` and `CookieConsent.astro`.
- Install runtime:

```bash
npm install vanilla-cookieconsent
```

- Then import the component in `src/layouts/Layout.astro` where you want the banner to appear (e.g., just before `</body>`). The CookieConsent config includes a `ga4` service that updates `gtag('consent','update', ...)` when accepted.

- If you use CookieConsent, consider setting the default GA consent to `denied` (the scaffold already handles this when `USE_COOKIECONSENT=true`). That prevents collecting analytics before user consent.

## 6. View Transitions

- If your app uses Astro view transitions, GA scripts need to be re-applied on `astro:page-load` events — see the guide for a code sample. You can add an event listener that runs the `gtag` initialization logic on every page change.

## 7. Quick checklist for this repo

- [ ] Add `.env` with `PUBLIC_GA_ID=G-XXXXXXXXXX` and optionally `USE_PARTYTOWN=true`.
- [ ] (Optional) Install Partytown: `npx astro add partytown`.
- [ ] (Optional) Install CookieConsent: `npm install vanilla-cookieconsent` and enable `USE_COOKIECONSENT=true`.
- [ ] Build for production and verify network requests to `googletagmanager.com`.

## 8. Where I changed files

- `src/layouts/Layout.astro` — GA loading is gated to production and supports Partytown and CookieConsent defaults.
- `.env.example` — added `PUBLIC_GA_ID`, `PUBLIC_GTM_ID`, `USE_PARTYTOWN`, and `USE_COOKIECONSENT` examples.
- `src/components/cookie-consent/*` — scaffold for CookieConsent setup (requires `vanilla-cookieconsent` installation).
- `docs/GTM_INSTALLATION_CA.md` — Catalan GTM install instructions (added earlier).
- `docs/GA_GUIDE.md` — this guide (you are viewing it now).

---

If you want, I can now:

- Install Partytown integration in `astro.config.mjs` for you (requires editing `astro.config.mjs`).
- Wire the `CookieConsent` component into `Layout.astro` now that the scaffold exists (I can import and render it conditionally when `USE_COOKIECONSENT=true`).
- Add `astro:page-load` listener to re-run `gtag` on view transitions.

Which of these would you like me to do next?
