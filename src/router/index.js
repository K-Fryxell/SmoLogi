import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Top',
        component: () =>
            import ('../views/top.vue')
    },
    {
        path: '/user_regist',
        name: 'userRegistUser',
        component: () =>
            import ('@/views/user/registration')
    },
    {
        path: '/user_mypage',
        name: 'UserMypage',
        component: () =>
            import ('@/views/user/mypage.vue')
    },
    {
        path: '/user_history',
        name: 'History',
        component: () =>
            import('@/views/user/usage_history.vue')
    },
    {
        path: '/user_transport',
        name: 'Transport',
        component: () =>
            import('@/views/user/transport_info.vue')
    },
    {
        path: '/user_change',
        name: 'Change',
        component: () =>
            import('@/views/user/change_detail.vue')
    },
    {
        path: '/user_passchange',
        name: 'UserPasschange',
        component: () =>
            import ('@/views/user/passchange.vue')
    },
    {
        path: '/kiyaku',
        name: 'Kiyaku',
        component: () =>
            import ('../views/footer/Kiyaku.vue')
    },
    {
        path: '/question',
        name: 'Question',
        component: () =>
            import ('../views/footer/Question.vue')
    },
    {
        path: '/part_registuser',
        name: 'partRegistUser',
        component: () =>
            import ('../views/part/partRegistration')
    },
    {
        path: '/part_mypage',
        name: 'partMypage',
        component: () =>
            import ('../views/part/partMypage')
    },
    {
        path: '/part_top',
        name: 'partTop',
        component: () =>
            import ('../views/part/partTop')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import('../views/contact/contact.vue')
    },
    {
        path: '/part_request',
        name: 'partRequest',
        component: () =>
            import ('../views/part/partRequest')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
