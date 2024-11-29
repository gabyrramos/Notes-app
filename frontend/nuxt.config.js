export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TodoApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    './styles/main.css',
    './components/MainPage/pagecontainer.css'
  ],

  plugins: [
    '~plugins/axios.js'
  ],

  components: true,

  buildModules: [
  ],

  modules: ['@nuxtjs/axios'],
    axios: {
    baseURL: 'http://localhost:3000/',
    },

  server: {
    port: 8081
  },

  build: {
    transpile: ['axios'],
  }
}
