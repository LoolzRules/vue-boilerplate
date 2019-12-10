import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import App from './App.vue'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

const isProduction = process.env.NODE_ENV === 'production'
Vue.config.productionTip = isProduction
Vue.config.devtools = !isProduction

new Vue( {
  router,
  store,
  vuetify,
  i18n,
  render: h => h( App ),
} ).$mount( '#app' )
