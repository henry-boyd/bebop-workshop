// @ts-check
import { defineConfig } from 'astro/config';

import vercelStatic from '@astrojs/vercel/static';

export default defineConfig({
  // Must be 'static' or 'hybrid'
  output: 'static',
  adapter: vercelStatic({
    imageService: true,
  }),
});