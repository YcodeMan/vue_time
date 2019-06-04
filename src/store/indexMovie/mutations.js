export default {
    // 请求正在上映电影数据
    mutationsMovieComing(state, param) {
        // 保存预售的电影数量
        state.totalComingMovieNum = param.totalComingMovie
        // 保存正在上映的电影数据
        state.movieListMsg = param.ms
        // 保存页面显示的电影数据
        state.someMovie = param.ms.slice(0, 8)
        
        window.sessionStorage.setItem('totalComingMovieNum', JSON.stringify(param.totalComingMovie))
        window.sessionStorage.setItem('movieListMsg', JSON.stringify(param.ms))
        window.sessionStorage.setItem('someMovie', JSON.stringify(state.someMovie))
    },
    // 热评论
    mutationsHotPoints(state, param) {
        
        // 保存热点评论数据
        state.HotPoints = param
        window.sessionStorage.setItem('HotPoints', JSON.stringify(param))
    },
    
    // 热评论详情
    mutationsHotPointsDetails(state, param) {
        state.HotPointsDetails = param
    },

    // 影片详情页
    mutationsDetails(state, params) {
        state.detail = params.data;
        state.movieId = params.movieId;
    },

    // 影片短评论
    mutationsShortComment(state, param) {
        state.shortComment = param;
    },

    // 影片短评论
    mutationsHotLongComment(state, param) {
        state.hotLongComment = param;
    }

}