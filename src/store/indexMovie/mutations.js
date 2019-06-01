export default {
    mutationsMovieComing(state, param) {
        // 保存预售的电影数量
        state.totalComingMovieNum = param.totalComingMovieNum
        // 保存正在上映的电影数据
        state.movieListMsg = param.ms
        // 保存页面显示的电影数据
        state.someMovie = param.ms.slice(0 ,8)
        window.sessionStorage.setItem('movieListMsg', JSON.stringify(param.ms))
        window.sessionStorage.setItem('someMovie', JSON.stringify(state.someMovie))
    }
}