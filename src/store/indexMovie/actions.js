import {
    MoviehotShow,
    hotPoints,
    areaFirstImg
} from '@api/indexMovie'

export default {
    // 请求电影热映数据
    async actionsMovieComing({ commit }) {
        let data = await MoviehotShow()
        commit('mutationsMovieComing', data)
    }
}