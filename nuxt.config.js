const bodyParser = require('body-parser')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BEE CONCRETE DESING ®',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'author', name: 'author', content: 'Ali Rıza BAKIR' },
      { hid: 'description', name: 'description', content: 'BEECONCRETE DESING' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: `bee, concrete, desing, arch, architecture,
       concretelife, concretedesing, pottery, potterylove, pot, potterydesing, furniture, 
       furnituredesign, covering, interiordesign, exteriordesign ,garden ,gardendesign ,
       green, grey, inspiration, inspirational, weekendvibes ,
       goodmorning, goodvibesonly ,saturdayvibes, saturday, morning,beton ,
       betonsaksi, saksı, succulents, monday, designideas, designinspiration`
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://unpkg.com/swiper@8/swiper-bundle.min.css"
      }
    ],
    script: [
      {
        src: "https://www.paytr.com/js/iframeResizer.min.js",
        body: true,
      },
      {
        src: "https://smtpjs.com/v3/smtp.js",
        body: true,
      },
      {
        src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js',
        body: true,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js",
        body: true,
      }
    ],

  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],
  loading: '~/components/LoadingBar.vue',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyDcHI3EOjjHFWnKaaw6C5mgYUltbmo8kRs',
      authDomain: "bee-users-e3f86.firebaseapp.com",
      databaseURL: "https://bee-users-e3f86-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bee-users-e3f86",
      storageBucket: "bee-users-e3f86.appspot.com",
      messagingSenderId: "341411067152",
      appId: "1:341411067152:web:56f58cd65d8639bac22195",
      measurementId: "G-X3BLPWHPDR"
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true // Just as example. Can be any other service.
    }
  },
  router: {
  },
  target: 'server',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000/api',
    // baseURL: 'https://www.beeconcrete.com.tr/api'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      source: './client/static/icon.png'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { }) {
      config.node = {
        fs: false
      }
    }
  },
  serverMiddleware: [
    bodyParser.json({ limit: "50mb" }),
    "~/api"
  ],
  env: {
    fireBaseAPIKEY: 'AIzaSyDcHI3EOjjHFWnKaaw6C5mgYUltbmo8kRs',
    VUE_APP_FIREBASE_KEY: 'AIzaSyDcHI3EOjjHFWnKaaw6C5mgYUltbmo8kRs',
  }
}
