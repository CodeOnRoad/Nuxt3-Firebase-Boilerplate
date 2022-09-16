import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['assets/css/main.css', 'vuetify/styles'],
  vite: {
    ssr: {
      noExternal: ['vuetify'], // add the vuetify vite plugin
    },
  },
  modules: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,require-await
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      )
    },
  ],
})
