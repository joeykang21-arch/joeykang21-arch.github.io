// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This repo deploys as a GitHub *user* site (joeykang21-arch.github.io), so it
// is served from the domain root and needs no `base`. If you ever rename the
// repo to something else, add `base: '/<repo-name>'` here.
export default defineConfig({
  site: 'https://joeykang21-arch.github.io',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
});
