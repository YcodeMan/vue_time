import Vue from 'vue'
import Router from 'vue-router'
import indexMovie from './indexMovie'
import movieDetails from './movieDetails'
import newsPage from './newsPage'
<<<<<<< HEAD
import cityList from './cityList'
=======
import hotMovie from './hotMovie'
>>>>>>> 4f06d6fed249e64a661f6f90a9f2b899f06aa76b

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
<<<<<<< HEAD
    cityList
=======
    hotMovie
>>>>>>> 4f06d6fed249e64a661f6f90a9f2b899f06aa76b
  ]
})
