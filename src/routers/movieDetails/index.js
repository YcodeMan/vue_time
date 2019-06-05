export default {
    path: '/movieDetails',
    name: 'movieDetails',
    component:() => import('@views/movieDetail/movieDetail'),
    meta: {
        headerFlag: false,
        serchFlag: false,
        footerFlag: true
    }
}