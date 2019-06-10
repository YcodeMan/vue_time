export default {
    path: '/shopMall',
    name: 'shopMall',
    component: () => import('@views/shopMall/shopMall'),
    meta: {
        headerFlag: true,
        serchFlag: true,
        footerFlag: true
    }
}