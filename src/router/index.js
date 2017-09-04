import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import Film from '@/pages/Film'
import Cinema from '@/pages/Cinema'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/film',
      name: 'film',
      component: Film
    },
    {
      path: '/cinema/:id',
      name: 'cinema',
      component: Cinema
    }
  ]
})
