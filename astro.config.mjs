import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Astro configuration with Tailwind integration
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
