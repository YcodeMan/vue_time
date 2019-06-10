export default {
    path: '/buyTickets',
    name: 'buyTickets',
    component: () => import('@views/buyTickets/buyTickets'),
    meta: {
        headerFlag: true,
        serchFlag: true,
        footerFlag: true
    }
}