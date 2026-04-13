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

  // Root → default locale. Static redirect, no SSR needed.
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
