import axios from 'axios'

const server = axios.create({
    timeout: 3000,
    withCredentials: true
})

server.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
)

server.interceptors.response.use(
    res => { 
        if (res.statusText == 'OK') {
            return res.data
        }
    },
    error => Promise.reject(error)
)

export const http = (method, url, data = {}) => {

    if (method === 'get') {
        return server.get(url, {
            params: data
        })
    } else if (method === 'post') {
        return server.post(url, data)
    } else {
        return;
    }
}