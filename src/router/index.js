import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import Film from '@/pages/Film'
import Cinema from '@/pages/Cinema'
// film-list
import Nowplaying  from '../components/Nowplaying'
import Comingsoon  from '../components/Comingsoon'
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
      component: Film,
      children:[
        {
          path:'/film/nowplaying',
          component:Nowplaying
        },
        {
          path:'/film/comingsoon',
          component:Comingsoon
        }
      ]
    },
    {
      path: '/cinema/:id',
      name: 'cinema',
      component: Cinema
    }
  ]
})
