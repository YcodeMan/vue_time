export default {
    // 热门城市储存在本地中
    city: JSON.parse(window.localStorage.getItem('city')) || {},
    cityList: JSON.parse(window.localStorage.getItem('cityList')) 
            ? JSON.parse(window.localStorage.getItem('cityList')).cityListObject : [],
    warmCity: JSON.parse(window.localStorage.getItem('warmCity')) || [],
    

    // 电影院地址(先存储在seessionStorage中)
    cinemaList: JSON.parse(window.sessionStorage.getItem('cinemaList')) || [],

    // 电影院说明信息
    noticeNotOwn: JSON.parse(window.sessionStorage.getItem('noticeNotOwn')) || '',

    // 地址对应的电影院
    cinemaListAboutCity: JSON.parse(window.sessionStorage.getItem('cinemaList')) || []
}