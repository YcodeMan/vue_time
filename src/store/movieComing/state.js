export default {
    // 最受关注的电影
    attention: JSON.parse(window.sessionStorage.getItem('attention')) || [],

    // 即将上映的电影
    moviecomings: JSON.parse(window.sessionStorage.getItem('moviecomings')) || []
}