import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Top',
    component: () =>
        import ('../views/top.vue')
}, {
    path: '/regist',
    name: 'Registration',
    component: () =>
        import ('@/views/registration')
}]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router