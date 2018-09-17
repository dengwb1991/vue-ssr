import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from './home'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      ...home,
      {
        path: '/',
        redirect: 'hello'
      },
      {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ]
  })
}
