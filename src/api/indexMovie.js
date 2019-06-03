import {http} from '@utils/http'

// 正在热映
export const MoviehotShow = ({cityId, date}) => http(
    'get',
    '/Service/callback.mi/Showtime/LocationMovies.api',
    { locationId: cityId, t: date }
    
)

// 广告热点
export const hotPoints = (date) => http(
    'get',
    '/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api',
    {t: date}
)

// 广告热点
export const hotPointsDetails = () => http(
    'get',
    '/Service/callback.mi/News/Detail.api',
    {newsId:1591621, t:201962171332872}
)


// 图片
export const areaFirstImg = () => http(
    'get',
    '/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api',
    {t: 201953116354372770}
)