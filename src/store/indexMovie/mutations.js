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
    mutationsDetails(state, {data,movieId}) {
        state.detail = data;
        state.movieId = movieId;
        window.sessionStorage.setItem('movieId', JSON.stringify(movieId))
    },

    // 影片短评论
    mutationsShortComment(state, param) {
        state.shortComment = param;
    },

    // 影片长评论
    mutationsHotLongComment(state, param) {
        state.hotLongComment.count = param.totalCount;
        state.hotLongComment.comment = param.comments[0];
        state.longComment = param.comments;

    },
    
    // 设置点击的热点评论id
    mutationsSetHotId(state, param) { 
        state.HotPointId = param
        window.localStorage.setItem('HotPointId', JSON.stringify(param))
    },

    // 设置电影id的预告片
    mutationsGetMovieVideo(state, param) {
        state.VideoList = param
        window.sessionStorage.setItem('videoList', JSON.stringify(state.VideoList))

    }
}