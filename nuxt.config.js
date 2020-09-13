
import dotenv from 'dotenv'
dotenv.config()

export default {
  mode: 'universal',
  components: [
    '~/components/',
    { path: '~/components/admin/', prefix: 'admin' },
    { path: '~/components/card/', prefix: 'card' },
    { path: '~/components/layout/', prefix: 'layout' },
    { path: '~/components/news/', prefix: 'news' },
    { path: '~/components/forms/', prefix: 'form' },
    { path: '~/components/table/', prefix: 'table' },
    { path: '~/components/image/', prefix: 'image' },
    { path: '~/components/list/', prefix: 'list' },
    { path: '~/components/widget/', prefix: 'widget' },
    { path: '~/components/chart/', prefix: 'chart' },
    { path: '~/components/modal/', prefix: 'modal' },
    { path: '~/components/bet/', prefix: 'bet' }
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: 'red', continuous: true, height: '5px' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/loader',
    '@/plugins/moment',
    // { src: '~/plugins/ability.js', ssr: false },
    '@/plugins/utility',
    '@/plugins/notify',
    '@/plugins/error',
    '@/plugins/ability',
    // '@/plugins/chart',
    { src: "~/plugins/chart.js", ssr: false},
    { src: "~/plugins/dropdown.js", ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/color-mode'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL
  },
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.data.token' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'me', method: 'post', propertyName: 'data' }
        }
      }
    },
    plugins: [ { src: '~/plugins/axios', ssr: true } ]
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
