import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://naoki20151214-ops.github.io',
  base: '/cash-maker',
  integrations: [sitemap()],
});
