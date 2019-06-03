import {http} from '@utils/http'

// 模糊查找电影
export const serverMovie = () => http(
    'post',
    '/Service/callback.mi/Search/SearchSuggestionNew.api',
    {t: 201962949065462, locationId: 366, keyword: 'aaa'}
)