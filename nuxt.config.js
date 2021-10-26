export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nblog',
    
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', 
        type: 'text/css', 
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css',
        integrity: "sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF",
        crossorigin: "anonymous"
      }
    ], 

    script: [
      {
        type: 'text/javascript', 
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ", 
        crossorigin: "anonymous"
      }
    ]
  },

  globals: {
    // authenticated: $auth.loggedIn,
    // user: $auth.user
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  router: {
    middleware: ['auth','clearValidationErrors']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'http://localhost:8000/api',
    //proxy: false,
    credentials: true,
  },  

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          login: {
            url: '/api/login',
            method: 'POST'
          },
          user: {
            url: '/api/user',
            method: 'POST'
          },
          logout: {
            url: '/api/logout',
            method: 'POST'
          }
        },
        user: {
          property: false
        },
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
