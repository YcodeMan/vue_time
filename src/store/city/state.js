export default {
    // 热门城市储存在本地中
    city: JSON.parse(window.localStorage.getItem('city')) || {},

    // warmCity: JSON.parse(window.localStorage.getItem('hotCities')) 
    // ? JSON.parse(window.localStorage.getItem('hotCities')).cityListObject : [],

    cityList: JSON.parse(window.localStorage.getItem('cityList')) 
            ? JSON.parse(window.localStorage.getItem('cityList')).cityListObject : []
}