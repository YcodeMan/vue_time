import Vue from 'vue'
import Router from 'vue-router'
import indexMovie from './indexMovie'
import movieDetails from './movieDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    indexMovie,
    movieDetails
  ]
})
