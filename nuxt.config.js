import getRoutes from './utils/getRoutes'

export default {
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'umutdev.xyz | Umut.py',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'keywords',
        content:
          'Umut.py, umutpy, umutdev, Umut Gülmez, Gülmez, umut.py, Umutdev, umutdev.xyz, Umutdev.xyz, Umut, umut',
      },
      {
        name: 'author',
        content: 'Umut.py',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'copyright',
        content: '(c) 2021 Umut.py Tüm Hakları Saklıdır.',
      },
      {
        name: 'content-language',
        content: 'en',
      },
      // Open Graph - Facebook metada's
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://umutdev.xyz',
      },
      {
        property: 'og:title',
        content: 'Umut.py | umutdev.xyz',
      },
      {
        property: 'og:description',
        content:
          'Umut Gülmez is a Turkish frontend developer whose main language is javascript. Umut.py also develops Discord bots using node.js. His website is umutdev.xyz  .',
      },
      {
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/UmutGulmez/umutgulmez.github.io/master/static/readmeBannerImage.png',
      },

      // Twitter metada's
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://umutdev.xyz',
      },
      {
        property: 'twitter:title',
        content: 'Umut.py | umutdev.xyz',
      },
      {
        property: 'twitter:description',
        content:
          'Umut Gülmez is a Turkish frontend developer whose main language is javascript. Umut.py also develops Discord bots using node.js. His website is umutdev.xyz  .',
      },
      {
        property: 'twitter:image',
        content:
          'https://raw.githubusercontent.com/UmutGulmez/umutgulmez.github.io/master/static/readmeBannerImage.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/googleAnalytics'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://http.nuxtjs.org/setup
    '@nuxt/http',
    //https://content.nuxtjs.org/
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
  ],

  //Loading component
  loading: '~/components/loading.vue',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    hostname: 'https://www.umutdev.xyz',
    routes() {
      return getRoutes()
    },
  },

  moment: {
    defaultLocale: 'tr',
    locales: ['tr'],
    defaultTimezone: 'Turkey/Istanbul',
  },
}
