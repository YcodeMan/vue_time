import {comingMovie} from '@api/comingSale'
export default {
   async actionsGetMovieComing({commit}, param) {
        let data = await  comingMovie()
       commit('mutationsGetMovieComing', data)
    }   
}