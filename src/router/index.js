import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Necessidade from '@/components/Necessidade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Necessidade',
      name: 'Necessidade',
      component: Necessidade
    }
  ]
})
