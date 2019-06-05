import {
    cinemaList,
    buyTicketCity,
    hotCity
} from '@api/city'

export default {
  // 请求所有城市
    async  actionsHotCity({commit}, param) {
        let data = await hotCity(param)
        commit('mutationssHotCity', data.p)
    },

    // 请求电影院地址
    async  actionsGetCinemaAddress({commit}, param) {
       // city : {id , time}
        let data = await cinemaList(param)
       commit('mutationsGetCinemaAddress', data.data)
       console.log(data.data)
    }
   
}