import { detail } from '@api/comingSale';
import {
    MoviehotShow,
    hotPoints,
    hotPointsDetails
} from '@api/indexMovie'


export default {
    // 请求电影热映数据
    async actionsMovieComing({ commit }, param) {
        let data = await MoviehotShow(param)
        commit('mutationsMovieComing', data)
    },
    // 请求热点评论
    async actionsHotPoints({ commit }, param) {
        let data = await hotPoints(param)
        commit('mutationsHotPoints', data.hotPoints)
    },
    // 请求热点评论详情
    async actionsHotPointsDetails({ commit }) {
        let data = await hotPointsDetails()
        commit('mutationsHotPointsDetails', data)
    },
    //请求电影详情
    async actionsDetails({ commit }) {
        let data = await detail();
        console.log(data)
        commit("mutationsDetails", data);
    }
}