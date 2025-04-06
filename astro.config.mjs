import { defineConfig } from 'astro/config';
// Import /serverless for a Serverless SSR site
import vercelStatic from '@astrojs/vercel/static';

import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
});