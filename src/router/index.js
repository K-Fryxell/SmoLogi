import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Top',
    component: () =>
        import('../views/top.vue')
},
{
    path: '/user_regist',
    name: 'userRegistUser',
    component: () =>
        import('@/views/user/registration')
},
{
    path: '/user_mypage',
    name: 'UserMypage',
    component: () =>
        import('@/views/user/mypage.vue')
},
{
    path: '/user_history',
    name: 'History',
    component: () =>
        import('@/views/user/usageHistory.vue')
},
{
    path: '/user_transport',
    name: 'Transport',
    component: () =>
        import('@/views/user/transportInfo.vue')
},
{
    path: '/user_change',
    name: 'Change',
    component: () =>
        import('@/views/user/changeDetails')
},
{
    path: '/user_passchange',
    name: 'UserPasschange',
    component: () =>
        import('../views/user/passwordChange.vue')
},
{
    path: '/part_top',
    name: 'partTop',
    component: () =>
        import('../views/part/partTop')
},
{
    path: '/part_regist',
    name: 'partRegistUser',
    component: () =>
        import('../views/part/partRegistration')
},
{
    path: '/part_mypage',
    name: 'partMypage',
    component: () =>
        import('../views/part/partMypage')
},
{
    path: '/part_request',
    name: 'partRequest',
    component: () =>
        import('../views/part/partRequest')
},
{
    path: '/part_requestdetails',
    name: 'partRequestdetails',
    component: () =>
        import('../views/part/partRequestDetails.vue')
},
{
    path: '/contact',
    name: 'Contact',
    component: () =>
        import('../views/contact/contact.vue')
},
{
    path: '/terms',
    name: 'Terms',
    component: () =>
        import('../views/footer/terms.vue')
},
{
    path: '/inquery',
    name: 'Inquery',
    component: () =>
        import('../views/footer/inquery.vue')
},
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})
export default router
