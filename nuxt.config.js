export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DEAR 性格マッチングアプリ',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'DEAR 性格マッチングアプリ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://dear-personality.netlify.app' },
      { hid: 'og:title', property: 'og:title', content: 'DEAR' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '性格診断を使って、気の合う友達を作ろう',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dear-personality.netlify.app/title.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://dear-personality.netlify.app/title.png',
      },
      { property: 'fb:app_id', content: '241419717792198' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: './assets/css/styles.scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Kaushan+Script': true,
          'Kosugi+Maru': true,
        },
        display: 'swap',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDfBsAPQuQuIokSlidprEs6WNxdhhrHr6Y',
          authDomain: 'personality-matching-app.firebaseapp.com',
          projectId: 'personality-matching-app',
          storageBucket: 'personality-matching-app.appspot.com',
          messagingSenderId: '311531648367',
          appId: '1:311531648367:web:23d7609bb77e97232ee49a',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          database: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: 'authenticated',
  },
};
