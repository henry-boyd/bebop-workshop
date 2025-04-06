import { defineConfig } from 'astro/config';
// Import /serverless for a Serverless SSR site
import vercelStatic from '@astrojs/vercel/static';
 
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
});