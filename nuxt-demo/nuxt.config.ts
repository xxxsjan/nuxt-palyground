// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // This method does not allow you to provide reactive data. We recommend to use useHead() in app.vue.
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  nitro: {},
  modules: ["@element-plus/nuxt"],
  elementPlus: {
    icon: "ElIcon",
    // importStyle: "scss",
    // themes: ["dark"],
  },
  // ssr: false,// Default: true
});
