import { 
    detail,
    shortComment,
    hotLongComment,
    castList,
    pic,
    review
} from '@api/movieDetails';
import {
    MoviehotShow,
    hotPoints,
    hotPointsDetails,
    searchVideo
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

    //请求电影人员表
    async actionsCastList({ commit }, param) {
        let data = await castList(param);
        commit("mutationsCastList", data);
    },

    //请求电影图片
    async actionsPic({ commit }, param) {
        let data = await pic(param);
        commit("mutationsPic", data);
    },

    //请求电影长评论单个评论的详细数据
    async actionsReview({ commit }, param) {
        let data = await review(param);
        commit("mutationsReview", data);
    },
    //请求电影id对应的预告片
    async actionsGetMovieVideo({commit}, param) {
       let data = await searchVideo(param)
       commit('mutationsGetMovieVideo', data.videoList)
       
    }
}