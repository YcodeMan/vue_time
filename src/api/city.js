import {http} from '@utils/http'

// 电影院地址
export const cinemaList = http(
    'get',
    '/api/proxy/ticket/onlineCinemasByCity.api',
    {locationId: 366, _: 1559292704394}
)

// 地址
export const city = http(
    'get',
    '/api/proxy/ticket/Showtime/HotCitiesByCinema.api',
    {_: 155929270439}
)