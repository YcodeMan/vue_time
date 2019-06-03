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
export const detail = ()=>http(
    'get',
    'Service/callback.mi/movie/Detail.api',
    {
        movieId: 213190,
        locationId:292,
        t:2019611910179287
    }
)