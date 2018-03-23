import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Circle from '@/components/Circle'
import Steps from '@/components/Steps'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/steps',
      name: 'Steps',
      component: Steps
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }
  ]
})
