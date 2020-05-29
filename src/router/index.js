import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/Home',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    }, {
        path: '/1',
        name: 'Msg',
        component: () =>
            import ('../views/Msg.vue')
    },
    {
        path: '/2',
        name: 'For',
        component: () =>
            import ('../views/For.vue')
    },
    {
        path: '/3',
        name: 'On',
        component: () =>
            import ('../views/On.vue')
    },
    {
        path: '/4',
        name: 'Model',
        component: () =>
            import ('../views/Model.vue')
    },
    {
        path: '/5',
        name: 'If',
        component: () =>
            import ('../views/If.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
