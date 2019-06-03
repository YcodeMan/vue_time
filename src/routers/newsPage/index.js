export default {
    path: '/news',
    name: 'news',
    props:true,
    component: () => import('@views/newsPage/newsPage')
}