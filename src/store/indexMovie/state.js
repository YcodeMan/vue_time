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
    titleCn: JSON.parse(window.sessionStorage.getItem('titleCn')) || '',
    movieId: JSON.parse(window.sessionStorage.getItem('movieId')) || 0,
    // 影片短评论
    shortComment: {},
    // 影片热门长评论
    hotLongComment: {
        count: 0,
        comment: {}
    },
    //影片所有长评论
    longComment: JSON.parse(window.sessionStorage.getItem('longComment')) || [],
    //影片工作人员表
    allCastList: [],
    //影片全部照片
    allPic: [],

    //长评论全文数据
    review: {},


    // 热点评论详情单挑数据id
    HotPointId: JSON.parse(window.localStorage.getItem('HotPointId')) || 0,

    // 电影id对应的预告片
    VideoList: JSON.parse(window.sessionStorage.getItem('videoList')) || []
}