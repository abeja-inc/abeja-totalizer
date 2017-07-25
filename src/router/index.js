import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Host from '@/components/Host'
import Guest from '@/components/Guest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/:key/host',
      name: 'Host',
      component: Host
    },
    {
      path: '/:key/guest',
      name: 'Guest',
      component: Guest
    }
  ]
})
