export default {
    // 热门城市储存在本地中
    city: JSON.parse(window.localStorage.getItem('city')) || {},
    warmCity: JSON.parse(window.sessionStorage.getItem('warmCity')) || [],
    cityList: JSON.parse(window.localStorage.getItem('cityList')) 
            ? JSON.parse(window.localStorage.getItem('cityList')).cityListObject : [],
    getLocation:JSON.parse(window.sessionStorage.getItem("getLocation")) || {},
}