import {
    cinemaList,
    buyTicketCity,
    hotCity
} from '@api/city'

export default {
  // 请求热门城市
  async  actionsHotCity({commit}, param) {
        let data = await hotCity(param)
        commit('mutationssHotCity', data.p)
    }
}