// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'bootstrap'

import './css/bootstrap.css' // without this, the result displayed wrong
// import './css/bootstrap-formhelpers.min.css' //I don't see any use of it, so I'll let it commented yet until I'll find a use for it
import './css/dark-style.css'
import './css/hover.css'
import './css/media.css'
import './css/style.css'
import axios from 'axios'

// const axiosConfig = {
//   baseURL: 'www.mpegvideofront.com',
//   timeout: 30000
// }

window.Vue = Vue
window.axios = require('axios')
Vue.config.productionTip = false
Vue.prototype.$axios = axios.create(/* axiosConfig */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App }
  // template: '<App/>'
  render: h => h(App) // делает то же самое, что и выше две строки вместе взятые
})
