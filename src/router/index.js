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
        path: '/regist',
        name: 'Registration',
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
        path: '/change_passwd',
        name: 'partChangepasswd',
        component: () =>
            import ('../views/part/partChangepasswd')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
