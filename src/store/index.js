import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import router from '../router/index'
Vue.use(Vuex)
Vue.use(router)
export default new Vuex.Store({
    modules: {
        user: user,
    }
})