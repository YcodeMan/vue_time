export default {
    mutationsGetMovieComing(state, param) {
        //    最受关注的电影
        state.attention = param.attention

        // 即将上映的电影
        state.moviecomings = param.moviecomings

      
        // 存储在会话层
        window.sessionStorage.setItem('attention', JSON.stringify(param.attention))
        window.sessionStorage.setItem('moviecomings', JSON.stringify(param.moviecomings))
       
        let moviecomings = param.moviecomings,
        // 存储对应月份上映的电影
            movieComingMonth = []
        //  [ {Month: 6, Movies:[{}, {}]}]

        for (var i = 0, len = moviecomings.length; i < len; i++ ) {
         
            // 获取当前电影的上映的月份
          var Month = moviecomings[i].rMonth
          if (isEmpty(Month)) { 
            movieComingMonth.push({Month, Movies:[moviecomings[i]]})
          } else {
            for(var j = 0, MoviesLen = movieComingMonth.length; j < MoviesLen; j++) {
                if (movieComingMonth[j].Month === Month) {
                    movieComingMonth[j].Movies.push(moviecomings[i])
                }
            }
          }
        }
       
        state.movieComingMonth = movieComingMonth
        window.sessionStorage.setItem('movieComingMonth', JSON.stringify(movieComingMonth))
        // 判读当前月份是否存在
        function isEmpty(Month) {
            for (var i = 0, len = movieComingMonth.length; i < len; i++) {
                if (movieComingMonth[i].Month === Month) {
                    return false
                }
            }
            return true
        }

    }   
}