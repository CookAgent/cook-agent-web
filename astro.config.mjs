// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://reciplab.com';

// No adapter needed — pure static build. Vercel auto-detects Astro and serves `dist/`
// directly. If SSR is introduced later, install `@astrojs/vercel` and set output to 'hybrid'.
export default defineConfig({
  site: SITE,
  output: 'static',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // Astro requires a root redirect when `prefixDefaultLocale: true`. Vercel's
  // edge redirect in `vercel.json` fires first (308), so the static HTML
  // fallback emitted here is never actually served to visitors.
  redirects: {
    '/': '/en/',
  },

  integrations: [
    tailwind({ applyBaseStyles: true }),
    partytown(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          ca: 'ca-ES',
        },
      },
    }),
  ],

  compressHTML: true,
});
