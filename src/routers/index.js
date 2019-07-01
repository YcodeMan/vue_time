import Vue from 'vue'
import Router from 'vue-router'
import indexMovie from './indexMovie'
import movieDetails from './movieDetails'
import newsPage from './newsPage'
import buyTickets from './buyTickets'
import shopMall from './shopMall'
import find from './find'
import mine from './mine'
import cityList from './cityList'
import hotMovie from './hotMovie'
import movieComing from './movieComing'
import allCastList from './allCastList'
import allLongComment from './allLongComment'
import allPic from './allPic'
import review from './review'
import movieVideo from './movieVideo'

Vue.use(Router)

const router = new Router({
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
    mine,
    cityList,
    hotMovie,
    movieComing,
    allCastList,
    allPic,
    allLongComment,
    review,
    movieVideo
  ]
})

router.beforeEach((to, from, next) => {   
  // chrome
  document.body.scrollTop = 0
  // // firefox
  document.documentElement.scrollTop = 0
  // // safari
  window.pageYOffset = 0
  next()
})

export default router;