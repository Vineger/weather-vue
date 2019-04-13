import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Weather from './views/Weather.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Weather,
      children: [{
        path: '/',
        name: 'home',
        component: Home
      }, {
        path: '/weather/week',
        name: 'week',
        component: () => import('./views/Week')
      }, {
        path: '/weather/month',
        name: 'month',
        component: () => import('./views/Month')
      }, {
        path: '/weather/display',
        name: 'display',
        component: () => import('./views/Display')
      }]
    },

    {
      path: '/user',
      component: () => import('./views/User'),
      children:[{
        path: '/user/signin',
        name: 'signin',
        component: () => import('./views/SignIn')
      }, {
        path: '/user/signup',
        name: 'signup',
        component: () => import('./views/SignUp')
      }]
    }
  ]
})
