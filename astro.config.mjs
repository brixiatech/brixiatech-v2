// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
