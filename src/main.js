// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// IMPORTS EXTRAS
// Bootstrap normal
import 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.css'

// bootstrap-vue
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import Vuetify from 'vuetify'
import VueSwal from 'vue-swal'
import 'vuetify/dist/vuetify.min.css'

Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(VueSwal)

Vue.config.productionTip = false
Vue.prototype.$identity = ''
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify: new Vuetify()
})
