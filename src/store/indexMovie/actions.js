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
        let movieId=param.movieId;
        commit("mutationsDetails", {data,movieId});
    },

    //请求电影短评论
    async actionsShortComment({ commit }, param) {
        let data = await shortComment(param);
        commit("mutationsShortComment", data);
    },

    //请求电影热门长评论
    async actionsHotLongComment({ commit }, param) {
        let data = await hotLongComment(param);
        commit("mutationsHotLongComment", data);
    },
}