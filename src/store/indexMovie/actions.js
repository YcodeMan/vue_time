import {
    MoviehotShow,
    hotPoints,
    areaFirstImg
} from '@api/indexMovie'


export default {
    // 请求电影热映数据
    async actionsMovieComing({ commit }, param) {
        let data = await MoviehotShow(param)
        commit('mutationsMovieComing', data)
    },
    // 请求热点评论
    async actionsHotPoints({commit}, param) {
        let data = await hotPoints(param)
        commit('mutationsHotPoints', data.hotPoints)
    }
}