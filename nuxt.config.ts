import { quasar } from '@quasar/vite-plugin';
import { fileURLToPath } from 'url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'System Status',
      meta: [
        {
          name: 'description',
          content:
            'Resources for real-time and historical information about the ABCXYZ service.',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        { rel: 'icon', href: '/favicon.ico' },
      ],
    },
  },
  srcDir: 'src/',
  alias: {
    '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
  },
  runtimeConfig: {
    ragtBaseURL: process.env.NUXT_RAGT_BASE_URL,
    ragtAPIKey: process.env.NUXT_RAGT_API_KEY,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('wc-'),
    },
  },
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    '@assets/styles/index.css',
  ],
  build: {
    transpile: ['quasar'],
  },

  ssr: true,
});
