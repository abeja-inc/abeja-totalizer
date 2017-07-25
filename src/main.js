import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import FirebaseDBPlugin from './libs/FirebaseDBPlugin'
import LocalStorage from './libs/LocalStorage'

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(Buefy)
Vue.use(FirebaseDBPlugin)
Vue.use(LocalStorage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
