// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/scss/global.scss",
    "~/assets/scss/_variables.scss",
    "~/assets/scss/_fonts.scss",
    "~/assets/scss/_form.scss",
  ],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss/_mixins.scss" as *;',
  //       },
  //     },
  //   },
  // },
  modules: ["@nuxtjs/color-mode"],
});
