export default {
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

    // 影片详情页
    detail: {},
    // 影片短评论
    shortComment: {},
    // 影片热门长评论
    hotLongComment: {},
}