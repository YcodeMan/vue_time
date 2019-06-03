export default {
    detail: '',
    // 保存正在上映的电影数据
    movieListMsg: JSON.parse(window.sessionStorage.getItem('movieListMsg')) || [],
    // 保存预售的电影数量
    totalComingMovieNum: JSON.parse(window.sessionStorage.getItem('totalComingMovieNum')) || 0,
    // 保存页面显示的电影数据
    someMovie: JSON.parse(window.sessionStorage.getItem('someMovie')) || [],

    // 热点评论数据
    HotPoints: JSON.parse(window.sessionStorage.getItem('HotPoints')) || [],

    // 热点评论详情数据
    HotPointsDetails: {},

    // 热点评论详情单挑数据id
    HotPointId: JSON.parse(window.localStorage.getItem('HotPointId')) || 0
}