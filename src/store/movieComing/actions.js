import {comingMovie} from '@api/comingSale'
export default {
   async actionsGetMovieComing({commit}, param) {
        let data = await  comingMovie()
        console.log(data)
       commit('mutationsGetMovieComing', data)
    }   
}