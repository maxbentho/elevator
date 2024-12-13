// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // ...
  output: 'server',
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
    webAnalytics: {
      enabled: true,
    },
  }),
});