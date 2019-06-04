import Vue from 'vue'
import Router from 'vue-router'
import indexMovie from './indexMovie'
import movieDetails from './movieDetails'
import newsPage from './newsPage'
import buyTickets from './buyTickets'
import shopMall from './shopMall'
import find from './find'
import mine from './mine'

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
    buyTickets,
    shopMall,
    find,
    mine
  ]
})
