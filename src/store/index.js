import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import indexMovie from './indexMovie'
import movieComing from './movieComing'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        city,
        indexMovie,
        movieComing
    }
})
