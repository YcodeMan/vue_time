import http from '@utils/http'

// 正在热映
export const MoviehotShow = http(
    'get',
    '/Service/callback.mi/Showtime/LocationMovies.api',
    { locationId: 366, t: 201953117275269512 }
    
)

// 广告热点
export const hotPoints = http(
    'get',
    '/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api',
    {t: 201953116354327850}
)

// 图片
export const areaFirstImg = http(
    'get',
    '/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api',
    {t: 201953116354372770}
)