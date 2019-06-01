export default {
   // 保存正在上映的电影数据
    movieLists: JSON.parse(window.sessionStorage.getItem('movieListMsg')) || [],
    // 保存预售的电影数量
    totalComingMovieNum: 0,
    // 保存页面显示的电影数据
    someMovie: JSON.parse(window.sessionStorage.getItem('someMovie')) || []
}