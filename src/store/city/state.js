export default {
    // 热门城市储存在本地中
    city: JSON.parse(window.localStorage.getItem('city')) || {},
    cityList: JSON.parse(window.localStorage.getItem('cityList')) 
            ? JSON.parse(window.localStorage.getItem('cityList')).cityListObject : []
}