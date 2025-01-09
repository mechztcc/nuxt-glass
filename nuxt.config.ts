// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3000",
    },
  },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/directives.js',
    '~/plugins/face-api.client.js'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'VALKYRIE',
      bodyAttrs: {
        class: 'bg-zinc-100 dark:bg-zinc-800 relative min-h-screen',
      },
    },
  },
  modules: [
    '@pinia/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Rajdhani: true,
        },
      },
    ],
  ],
});
