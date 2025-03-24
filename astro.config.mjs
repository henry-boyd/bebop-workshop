// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/static';

export default defineConfig({
  // Must be 'static' or 'hybrid'
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
});