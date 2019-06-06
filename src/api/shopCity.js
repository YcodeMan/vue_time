import {http} from '@utils/http'

export const shopStore = ({id,time}) => http(
    'get',
    '/api/proxy/ticket/cinema/screening.api',
    {locationId:id, _:time}
) 