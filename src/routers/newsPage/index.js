export default {
    path: '/news',
    naem: 'nwsPage',
    component: () => import('@views/newsPage/newsPage'),
    meta: {
        headerFlag: false,
        serchFlag: false,
        footerFlag: true
    }
}