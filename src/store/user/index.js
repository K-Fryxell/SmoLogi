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
        user_post:"",
        user_address: "",
        // 電話番号
        user_tel:"",
        // 性別
        user_gender:0,
        // クレジットカードナンバー
        user_credit_number: '',
        // セキュリティコード
        user_secu:'',
        // 名義
        user_meigi:'',
        // 年
        isYear:0,
        // 月
        isMounth:0,
        // 利用回数履歴
        user_usage_history: 0,
    },
    getters: {
        history(state) {
            return state.user_usage_history
        },
        isSignedIn(state) {
            return state.status
        },
        user_fname(state){
            return state.user_fname
        }
        // user(state) {
        //     return state.user;
        // },
    },
    mutations: {
        registUser(state,array) {
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
                
        },
        login(state,array)
        {
            firebase.auth().signInWithEmailAndPassword(
                array['email'],
                array['password'])
            .then(()=>{
                router.push('/user_mypage')
            })
        },
        onAuthStateChanged(state) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User logged in already or has just logged in.
                    // ユーザーIDの取得
                    // console.log(user.uid);
                    // this.user_id = user.uid
                    // ドキュメントIDをユーザIDとしているのでユーザIDを持ってきてそこからフィールド取り出し
                    firebase.firestore().collection('users').doc(user.uid).get().then(doc => {
                        console.log(doc.data())
                        // メールアドレス
                        state.user_email = doc.data().email
                        // // 氏名・かな
                        state.user_fname = doc.data().firstname
                        state.user_fname_kana = doc.data().lastname
                        state.user_name = doc.data().firstname
                        state.user_name_kana = doc.data().firstname
                        // 郵便番号
                        state.user_post = doc.data().post
                        // // 住所
                        state.user_address = doc.data().address
                        /// 性別
                        state.user_gender = doc.data().sex
                        // user_gender: 0,
                        // クレジットカードナンバー
                        state.user_credit_number = doc.data().card
                        // // 電話番号
                        state.user_tel = doc.data().tel
                        // セキュリティコード
                        state.user_secu = doc.data().secu
                        // 名義
                        state.user_meigi = doc.data().meigi
                        // 年
                        state.isYear = doc.data().isYear
                        // 月
                        state.isMounth = doc.data().isMounth
                        
                    })
                } else {
                    // User not logged in or has just logged out.
                }
            })
        },
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