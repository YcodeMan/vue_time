import Vue from 'vue'
import Router from 'vue-router'
import indexMovie from './indexMovie'
import movieDetails from './movieDetails'
import newsPage from './newsPage'
import hotMovie from './hotMovie'
import movieComing from './movieComing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    indexMovie,
    movieDetails,
    newsPage,
    hotMovie,
    movieComing
  ]
})
