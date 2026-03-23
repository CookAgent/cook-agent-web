import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// Astro configuration with Tailwind and sitemap integrations
export default defineConfig({
  site: 'https://reciplab.com',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    partytown(),
    sitemap(),
  ],
});