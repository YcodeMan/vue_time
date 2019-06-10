export default {
    path: '/index',
    name: 'index',
    component: () => import('@views/indexMovie/indexMovie'),
    meta: {
        headerFlag: true,
        serchFlag: true,
        footerFlag: true
    }
}