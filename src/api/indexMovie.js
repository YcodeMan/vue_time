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

// 广告热点详情
export const hotPointsDetails = ({id, t}) => http(
    'get',
    '/Service/callback.mi/News/Detail.api',
    {newsId:id, t}
)


// 图片
export const areaFirstImg = () => http(
    'get',
    '/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api',
    {t: 201953116354372770}
)

// 查找电影id对应的预告片
export const searchVideo = ({id, pageIndex, time}) => http(
    'get',
   '/Service/callback.mi/Movie/Video.api',
   {movieId:id, pageIndex, t:time }

)