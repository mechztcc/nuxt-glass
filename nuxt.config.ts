// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  app: {
    head: {
      charset: "utf-8",
      title: "VALKYRIE",
      bodyAttrs: {
        class: "bg-zinc-100 relative min-h-screen",
      },
    },
  },
  modules: [
    "@vee-validate/nuxt",
    '@pinia/nuxt',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lora: true
        },
      },
    ],
  ],
});
