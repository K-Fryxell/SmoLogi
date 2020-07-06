import firebase from 'firebase'
import router from '../../router/index'
export default ({
    state: {
        errorCode: '',
        errorMessage: '',
        // ユーザデータ
        array: {},
        user: {},
        user_id:'',
        // ログイン情報のフラグ
        status: false,
        // メールアドレス・パスワード
        user_email: "",
        user_pass: "",
        // 氏名・かな
        user_fname: "",
        user_fname_kana: "",
        user_name: "",
        user_name_kana: "",
        // 住所
        user_address: "",
        // クレジットカードナンバー
        user_credit_number: 0,
        // 利用回数履歴
        user_usage_history: 0,
    },
    getters: {
        email(state) {
            return state.email
        },
        isSignedIn(state) {
            return state.status
        },
        // user(state) {
        //     return state.user;
        // },
    },
    mutations: {
        registUser(state, array) {
            firebase.auth().createUserWithEmailAndPassword(
                    array['email'],
                    array['password']
                )
                .then(function() {
                    // ユーザ情報の変更などに検知
                    firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            // User logged in already or has just logged in.
                            // ユーザーIDの取得
                            console.log(user.uid);
                            // ユーザIDをドキュメントIDとしてコレクションにarrayの中身をフィールドとして追加
                            state.user_id = user.uid
                            firebase.firestore().collection("users").doc(state.user_id)
                            .set(array)
                            .then(function () {
                                // 正常にデータ保存できた時の処理
                                console.log('success')
                                router.push('/user_mypage')
                            })
                        } else {
                            // User not logged in or has just logged out.
                        }
                    })
                })
                // .catch(function(error) {
                //     console.log('err');
                //     // Handle Errors here.
                //     state.errorCode = error.code;
                //     state.errorMessage = error.message;
                //     router.push('/')
                //         // ...
                // })
        },
        // onAuthStateChanged(state, user) {
        //     state.user = user; //firebaseが返したユーザー情報
        // },
        // ログイン状態の確認
        // onUserStatusChanged(state, status) {
        //     state.status = status; //ログインしてるかどうか true or false
        // },
        logout() {
            firebase.auth().signOut()
        },

    },
    actions: {
        // onAuth(store) {
        //     firebase.auth().onAuthStateChanged(user => {
        //         user = user ? user : {};
        //         store.commit('onAuthStateChanged', user);
        //         store.commit('onUserStatusChanged', user.uid ? true : false);
        //     })
        // }
    }
})