export default {
    path: '/hotMovie',
    name: 'hotMovie',
    component: () => import('@views/hotMovie/hotMovie'),

    children: [
        {
            path: 'movieComing',
            name: 'movieComing',
            component: () => import('@components/hotMovie/hotMovieComing')
        }
    ]
}