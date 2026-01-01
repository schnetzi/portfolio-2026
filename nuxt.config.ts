// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
  fonts: {
    defaults: {
      weights: [400, 900],
      styles: ['normal'],
      subsets: ['latin']
    },
    families: [
      { name: 'Lato', provider: 'google' },
      { name: 'Source Code Pro', provider: 'google' },
    ]
  },
  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  }
})