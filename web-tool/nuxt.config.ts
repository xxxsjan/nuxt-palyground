// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt 3",
      // meta: [
      //   { name: "viewport", content: "width=device-width, initial-scale=1" },
      //   {
      //     hid: "description",
      //     name: "description",
      //     content: "ElementPlus + Nuxt3",
      //   },
      // ],
      // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/styles/style.css", "~/assets/styles/cuIcon.css"],
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "@nuxt/devtools",
  ],
  // pinia: {
  //   autoImports: ["defineStore"],
  // },
  piniaPersistedstate: {
    storage: "sessionStorage",
  },
});
