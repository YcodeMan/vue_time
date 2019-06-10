export default {
    path: '/find',
    name: 'find',
    component: () => import('@views/find/find'),
    meta: {
        headerFlag: true,
        serchFlag: false,
        footerFlag: true
    }
}