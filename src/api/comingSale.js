import {http} from '@utils/http'

// 即将上映
export const comingMovie =()=> http(
    'get',
    '/Service/callback.mi/Movie/MovieComingNew.api',
    {locationId: 366, t: 201953117374991930}
)


// 广告

export const advComing = ()=>http(
    'get',
    '/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api',
    {locationId:366, t: 20195311737491680 }
)

// 影片详情
export const detail = ({movieId, locationId, t})=>http(
    'get',
    'Service/callback.mi/movie/Detail.api',
    {
        movieId: movieId,
        locationId: locationId,
        t: t
    }
)

// 影片短评论
export const shortComment = ({movieId,t})=>http(
    'get',
    'Service/callback.mi/Showtime/MovieComments.api',
    {
        movieId,
        pageIndex:1,
        t
    }
)

// 影片热门长评论
export const hotLongComment = ({movieId,t})=>http(
    'get',
    'Service/callback.mi/Movie/HotLongComments.api',
    {
        movieId,
        pageIndex:1,
        t
    }
)