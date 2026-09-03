// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { SITE } from './src/site.config.mjs';

// `base: '/'` desde el día uno: permite migrar a dominio propio sin romper rutas internas.
export default defineConfig({
  site: SITE.url,
  base: '/',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  build: { format: 'directory' },
});
