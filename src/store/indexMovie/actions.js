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
    },
    // 请求热点评论
    async actionsHotPoints({commit}) {
        let data = await hotPoints()
        console.log(data)
        commit('mutationsHotPoints', data.hotPoints)
    }
}