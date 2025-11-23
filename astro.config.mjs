import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import partytown from '@astrojs/partytown';

// Astro configuration with Tailwind integration
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true,
  }), partytown()],
});