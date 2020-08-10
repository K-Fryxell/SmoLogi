import firebase from 'firebase'
import router from '../../router/index'
export default ({
    state: {
        errorCode: '',
        errorMessage: '',
        // パートナーデータ
        array:{},
        part_user: {},
        part_user_id:'',
        // ログイン情報のフラグ
        status: false,
        // メールアドレス・パスワード
        part_email: "",
        part_pass: "",
        // パートナー顔画像
        part_image: "",
        // 氏名・かな
        part_fname: "",
        part_fname_kana: "",
        part_name: "",
        part_name_kana: "",
        // ニックネーム
        nickname: "",
        // 住所
        part_post:"",
        part_address: "",
        // 電話番号
        part_tel:"",
        // 性別
        part_gender:0,
        // 誕生日
        part_year:0,
        part_month:0,
        part_day:0,
        // 口座へのアクセスフラグ
        part_account_flg: 0,
        // ゆうちょ情報
        y_synbol: 0,
        y_number: 0,
        y_host:'',
        // 車種
        cars:[],
        // ナンバー
        bikeNumber:0,
        light_carNumber:0,
        ordinary_carNumber:0,

        // 通知内容(フィールドにより対応必須(増える可能性大5.6個))
        part_notification_content: "",
        // 通知数
        part_notification_number: 0,
        // 利用回数履歴
        part_usage_history: 0,
        // 給項目は後回し

        // レビュー機能星など1-5段階（仮）・余裕あればコメントも
        part_review_evaluation: 0,
        // 依頼一覧
        trans:[],
        // 総重量
        part_weight: 0,
        // 受諾したユーザ情報
        user_info:[]
    },
    getters: {
        part_image(state){
            return state.part_image
        },
        part_fname(state){
            return state.part_fname
        },
        part_name(state) {
            return state.part_name
        },
        part_fname_kana(state) {
            return state.part_fname_kana
        },
        part_name_kana(state) {
            return state.part_name_kana
        },
        nickname(state) {
            return state.nickname
        },
        part_year(state) {
            return state.part_year
        },
        part_month(state) {
            return state.part_month
        },
        part_day(state) {
            return state.part_day
        },
        part_email(state) {
            return state.part_email
        },
        part_post(state) {
            return state.part_post
        },
        part_address(state) {
            return state.part_address
        },
        part_tel(state) {
            return state.part_tel
        },
        history(state) {
            return state.part_usage_history
        },
        trans(state) {
            return state.trans
        },
        part_weight(state) {
            return state.part_weight
        },
        cars(state) {
            return state.cars
        }
    },
    mutations: {
        partRegistUser(state, array) {
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
                            firebase.firestore().collection("part_users").doc(state.user_id)
                                .set(array)
                                .then(function () {
                                    // 正常にデータ保存できた時の処理
                                    console.log('success')
                                    router.push('/part_mypage')
                                })
                        } else {
                            // User not logged in or has just logged out.
                        }
                    })
                })
        },
        part_login(state,array)
        {
            firebase.auth().signInWithEmailAndPassword(
                array['email'],
                array['password'])
            .then(()=>{
                router.push('/part_mypage')
            })
        },
        part_onAuthStateChanged(state) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {

                    // User logged in already or has just logged in.
                    // ユーザーIDの取得
                    // console.log(user.uid);
                    // this.user_id = user.uid
                    //パートidを取得
                    state.part_user_id = user.uid
                    // ドキュメントIDをユーザIDとしているのでユーザIDを持ってきてそこからフィールド取り出し
                    firebase.firestore().collection('part_users').doc(user.uid).get().then(doc => {
                        console.log(doc.data())

                        // メールアドレス
                        state.part_email = doc.data().email
                        // // 氏名・かな
                        state.part_fname = doc.data().firstname
                        // console.log(state.part_fname)
                        state.part_fname_kana = doc.data().firstkana
                        state.part_name = doc.data().lastname
                        state.part_name_kana = doc.data().lastkana
                        // 郵便番号
                        state.part_post = doc.data().post
                        // // 住所
                        state.part_address = doc.data().address
                        /// 性別
                        state.part_gender = doc.data().sex
                        // 誕生日
                        state.part_year = doc.data().birthYear
                        state.part_month = doc.data().birthMonth
                        state.part_day = doc.data().birthDay
                        // // 電話番号
                        state.part_tel = doc.data().tel
                        // ニックネーム
                        state.nickname = doc.data().username
                        // ゆうちょ銀行
                        state.y_synbol = doc.data().y_synbol
                        state.y_number = doc.data().y_number
                        state.y_host = doc.data().y_host
                        // 顔写真
                        state.part_image = doc.data().part_image
                        // 車種
                        state.cars = doc.data().cars
                        state.bikeNumber = doc.data().bikeNumber
                        state.light_carNumber = doc.data().light_carNumber
                        state.ordinary_carNumber = doc.data().ordinary_carNumber

                        // 判定
                        state.judge = doc.data().judge
                    })
                } else {
                    // User not logged in or has just logged out.
                }
            })
        },
        getTtransport(state){
            state.trans = []
            firebase.firestore().collection('transport').get().then(async snapshot => {
                await snapshot.forEach(doc => {
                    //contentは要素
                    //pushは配列データそのもの
                    // console.log(doc.data())
                    state.trans.push({
                        user_id: doc.data().userid,
                        gender: doc.data().gender,
                        isTime:doc.data().isTime,
                        isMinute: doc.data().isMinute,
                        weight: doc.data().weight,
                        name: doc.data().name,
                        user_lat: doc.data().user_lat,
                        user_lng: doc.data().user_lng
                    })

                })
            })
        },
        send(state,array){
            firebase.firestore().collection('users').doc(array['user_id']).collection('room')
            .add({
                part_lat: array['part_latitude'],
                part_lng: array['part_longitude'],
                part_id:array['part_id']
            })
        },
        part_logout() {
            firebase.auth().signOut()
            router.push('/part_top')
        },
    },
    actions: {

    }
})
