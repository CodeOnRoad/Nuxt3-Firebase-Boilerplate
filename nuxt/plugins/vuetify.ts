import { createVuetify, ThemeDefinition } from 'vuetify'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#fcfcfc',
    surface: '#fcfcfc',
    primary: '#00acff',
    cta: '#ff7800',
    secondary: '#00acff',
    'secondary-darken-1': '#000000',
    error: '#000000',
    info: '#000000',
    success: '#000000',
    warning: '#000000',
  },
}
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults: {
      global: {
        ripple: true,
        elevation: 0,
      },
      VBtn: { color: 'cta', border: true },
    },
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
