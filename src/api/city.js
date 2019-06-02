import {http} from '@utils/http'

// 电影院地址
export const cinemaList = () => http(
    'get',
    '/api/proxy/ticket/onlineCinemasByCity.api',
    {locationId: 366, _: 1559292704394}
)

// 购票地址
export const buyTicketCity = () => http(
    'get',
    '/api/proxy/ticket/Showtime/HotCitiesByCinema.api',
    {_: 155929270439}
)

// 热门城市地址(首页第一次会请求后存入LocalStorage)
export const hotCity = (time) => http(
    'get',
    '/Service/callback.mi/Showtime/HotCitiesByCinema.api',
    {t:time}
)
