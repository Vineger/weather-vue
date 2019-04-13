import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/weather/week',
      name: 'week',
      component: () => import('./views/Week')
    },
    {
      path: '/weather/month',
      name: 'month',
      component: () => import('./views/Month')
    },
    {
      path: '/weather/display',
      name: 'display',
      component: () => import('./views/Display')
    }
  ]
})
