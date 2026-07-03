// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://brixiatech.com',
  integrations: [sitemap()],
  image: {
    service: passthroughImageService(),
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
      // redirectToDefaultLocale volutamente NON impostato:
      // in Astro 6 ha effetto solo con prefixDefaultLocale: true.
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
