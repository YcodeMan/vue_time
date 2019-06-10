import {http} from '@utils/http'

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

// 影片人员表
export const castList = ({movieId,t})=>http(
    'get',
    'Service/callback.mi/Movie/MovieCreditsWithTypes.api',
    {
        movieId,
        t
    }
)

// 影片全部图片
export const pic = ({movieId,t})=>http(
    'get',
    'Service/callback.mi/Movie/Image.api',
    {
        movieId,
        t
    }
)

// 影片长评论全文详情页
export const review = ({reviewId,t})=>http(
    'get',
    'Service/callback.mi/Review/Detail.api',
    {
        reviewId,
        t
    }
)