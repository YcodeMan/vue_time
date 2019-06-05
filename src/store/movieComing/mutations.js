export default {
    mutationsGetMovieComing(state, param) {
        //    最受关注的电影
        state.attention = param.attention

        // 即将上映的电影
        state.moviecomings = param.moviecomings

      
        // 存储在会话层
        window.sessionStorage.setItem('attention', JSON.stringify(param.attention))
        window.sessionStorage.setItem('moviecomings', JSON.stringify(param.moviecomings))
       

    }   
}