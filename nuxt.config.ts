// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxt/image', 'nuxt-icon'],
  i18n: {
    strategy: 'prefix_and_default',
    locales: [
      {
        code: 'en',
        file: 'en.ts',
      },
      {
        code: 'es',
        file: 'es.ts',
      },
    ],
    lazy: true,
    langDir: './locales',
    defaultLocale: 'en',
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    format: ['webp'],
  },
})
