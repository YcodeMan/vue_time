import Vue from 'vue'
import Router from 'vue-router'
import indexMovie from './indexMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    indexMovie
  ]
})
