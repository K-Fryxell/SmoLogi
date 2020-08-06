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
        // ユーザでのログインであることの判定
        judge: 0,
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
        // 誕生日
        user_year:0,
        user_month:0,
        user_day:0,
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
        // 緯度経度
        user_lat:0,
        user_lng:0,
    },
    getters: {
        user_fname(state){
            return state.user_fname
        },
        user_name(state) {
            return state.user_name
        },
        user_fname_kana(state) {
            return state.user_fname_kana
        },
        user_name_kana(state) {
            return state.user_name_kana
        },
        user_year(state) {
            return state.user_year
        },
        user_month(state) {
            return state.user_month
        },
        user_day(state) {
            return state.user_day
        },
        user_email(state) {
            return state.user_email
        },
        user_post(state) {
            return state.user_post
        },
        user_address(state) {
            return state.user_address
        },
        user_tel(state) {
            return state.user_tel
        },
        user_lat(state) {
            return state.user_lat
        },
        user_lng(state) {
            return state.user_lng
        },
        judge(state){
            return state.judge
        }
        // history(state) {
        //     return state.user_usage_history
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
        user_login(state,array)
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
                    firebase.firestore().collection('users').doc(user.uid).get().then( doc => {
                        console.log(doc.data())
                        // メールアドレス
                        state.user_email = doc.data().email
                        // // 氏名・かな
                        state.user_fname = doc.data().firstname
                        state.user_fname_kana = doc.data().firstkana
                        state.user_name = doc.data().lastname
                        state.user_name_kana = doc.data().lastkana
                        // 郵便番号
                        state.user_post = doc.data().post
                        // // 住所
                        state.user_address = doc.data().address
                        /// 性別
                        state.user_gender = doc.data().sex
                        // 誕生日
                        state.user_year = doc.data().birthYear
                        state.user_month = doc.data().birthMonth
                        state.user_day = doc.data().birthDay
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
                        // 判定
                        state.judge = doc.data().judge
                        console.log(state.judge)
                    })
                } else {
                    // User not logged in or has just logged out.
                    // router.push('/')
                }
            })
        },
        // 依頼する
        transport(state, array) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User logged in already or has just logged in.
                    // ユーザーIDの取得
                    console.log(user.uid);
                    // ユーザIDをドキュメントIDとしてコレクションにarrayの中身をフィールドとして追加
                    state.user_id = user.uid
                    array['userid'] = state.user_id
                    array['gender'] = state.user_gender
                    firebase.firestore().collection("users").doc(state.user_id).collection('room')
                        .add({
                            // 重さ
                            weight: array['weight'],
                            // 何時何分〜
                            first_hour: array['first_time'],
                            first_minute: array['first_minute'],
                            // 〜何時何分
                            last_hour: array['last_time'],
                            last_minute: array['last_minute'],
                            // 大きさ
                            size: array['size']
                        })
                        .then(function () {
                            // 正常にデータ保存できた時の処理
                            console.log('success')
                        })
                    firebase.firestore().collection("transport").doc(state.user_id)
                        .set({
                            // 重さ
                            weight: array['weight'],
                            // 大きさ
                            size: array['size'],
                            // 何時何分〜
                            first_hour: array['first_time'],
                            first_minute: array['first_minute'],
                            // 〜何時何分
                            last_hour: array['last_time'],
                            last_minute: array['last_minute'],
                            userid: array['userid'],
                            gender: array['gender'],
                            name:array['name'],
                            user_lat:array['user_lat'],
                            user_lng:array['user_lng']
                        })
                        .then(function () {
                            // 正常にデータ保存できた時の処理
                            console.log('success')
                        })
                } else {
                    // User not logged in or has just logged out.
                }
            })
            router.push('/contact')
        },
        // ログイン状態の確認
        // onUserStatusChanged(state, status) {
        //     state.status = status; //ログインしてるかどうか true or false
        // },
        user_logout() {
            firebase.auth().signOut()
            router.push('/')
        }
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
