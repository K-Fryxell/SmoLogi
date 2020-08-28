import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import part from './part'
import router from '../router/index'
import firebase from 'firebase'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
Vue.use(router)
export default new Vuex.Store({
    modules: {
        user: user,
        part: part
    },
    state:{
        // ログインの種別
        judge:0,

        // contactでのみ扱われる値
        user_latitude:0,
        user_longitude:0,
        part_latitude:0,
        part_longitude:0,
        // 配達希望時刻
        first_hour:'',
        first_minute:'',
        last_hour:'',
        last_minute:''
    },
    getters:{
        judge(state){
            return state.judge
        },
    },
    mutations:{
        // ここからセッター //
        set_first_hour(state, payload){
            state.first_hour = payload
        },
        set_first_minute(state, payload){
            state.first_minute = payload
        },
        set_last_hour(state, payload){
            state.last_hour = payload
        },
        set_last_minute(state, payload){
            state.last_minute = payload
        },
        // ここまでセッター //
        judge_onAuthStateChanged(state) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User logged in already or has just logged in.
                    // ユーザーIDの取得
                    // console.log(user.uid);
                    // this.user_id = user.uid
                    // ドキュメントIDをユーザIDとしているのでユーザIDを持ってきてそこからフィールド取り出し
                    firebase.firestore().collection("judge").doc(user.uid).get().then( doc => {
                        // 判定
                        state.judge = doc.data().judge
                        if(doc.data().judge == 0){
                            this.commit('onAuthStateChanged')
                        }
                        else if(doc.data().judge == 1){
                            this.commit('part_onAuthStateChanged')
                        }
                    })
                } else {
                    // User not logged in or has just logged out.
                    // router.push('/')
                }
            })
        },
        judge_room_onAuthState(state){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    firebase.firestore().collection("judge").doc(user.uid).get().then( doc => {
                        // 判定
                        state.judge = doc.data().judge
                        if(doc.data().judge == 0){
                            this.commit('room_onAuthState')
                        }
                        else if(doc.data().judge == 1){
                            this.commit('part_room_onAuthState')
                        }
                    })
                }
            })
        },
    },
    plugins:[createPersistedState()],
})
