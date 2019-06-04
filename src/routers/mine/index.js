export default {
    path: '/mine',
    name: 'mine',
    component: () => import('@views/mine/mine'),
    meta: {
        headerFlag: false,
        serchFlag: false,
        footerFlag: false
    }
}