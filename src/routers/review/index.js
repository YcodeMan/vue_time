export default {
    path: '/review/:reviewId',
    name: 'review',
    component: () => import('@views/review/review')
}