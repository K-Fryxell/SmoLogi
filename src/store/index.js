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
        judge:0
    },
    mutations:{
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
    getters:{
        judge(state){
            return state.judge
        }
    },
    plugins:[createPersistedState()],
})
