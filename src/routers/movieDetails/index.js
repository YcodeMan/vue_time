export default {
    path: '/movieDetails',
    name: 'movieDetails',
    component:() => import('@components/movieDetails/movieDetails'),
    meta: {
        headerFlag: false,
        serchFlag: false,
        footerFlag: true
    }
}