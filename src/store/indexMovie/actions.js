import { 
    detail,
    shortComment,
    hotLongComment
} from '@api/comingSale';
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
    async actionsHotPointsDetails({ commit }, param) {
        let data = await hotPointsDetails(param)
        commit('mutationsHotPointsDetails', data)
    },

    //请求电影详情
    async actionsDetails({ commit }, param) {
        let data = await detail(param);
        let params = {
            data,
            movieId : param.movieId
        }
        console.log(data)
        commit("mutationsDetails", params);
    },

    //请求电影短评论
    async actionsShortComment({ commit }) {
        let data = await shortComment();
        commit("mutationsShortComment", data);
    },

    //请求电影热门长评论
    async actionsHotLongComment({ commit }) {
        let data = await hotLongComment();
        commit("mutationsHotLongComment", data);
    },
}