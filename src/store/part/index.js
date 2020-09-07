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
        // 拒否フラグ
        cancel_modal: 0,
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
        user_info:[],
        // 配達希望時刻
        first_hour:'',
        first_minute:'',
        last_hour:'',
        last_minute:'',

        // 配達中は1
        delivery:0,
    },
    getters: {
        delivery(state){
            return state.delivery
        },
        cancel_modal(state){
            return state.cancel_modal
        },
        p_first_hour(state){
            return state.first_hour
        },
        p_first_minute(state){
            return state.first_minute
        },
        p_last_hour(state){
            return state.last_hour
        },
        p_last_minute(state){
            return state.last_minute
        },
        user_latitude(state){
            return state.user_latitude
        },
        user_longitude(state){
            return state.user_longitude
        },
        user_info(state){
            return state.user_info
        },
        part_id(state){
            return state.part_user_id
        },
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
        },
        bikeNumber(state) {
            return state.bikeNumber
        },
        light_carNumber(state) {
            return state.light_carNumber
        },
        ordinary_carNumber(state) {
            return state.ordinary_carNumber
        },
    },
    mutations: {
        // ここからセッター //
        set_user_latitude(state, payload){
            state.user_latitude = payload
        },
        set_user_longitude(state, payload){
            state.user_longitude = payload
        },
        set_part_image(state,payload){
            state.part_image = payload
        },
        set_part_fname(state,payload){
            state.part_fname = payload
        },
        set_part_name(state,payload) {
            state.part_name = payload
        },
        set_part_fname_kana(state,payload) {
            state.part_fname_kana = payload
        },
        set_part_name_kana(state,payload) {
            state.part_name_kana = payload
        },
        set_nickname(state,payload) {
            state.nickname = payload
        },
        set_part_year(state,payload) {
            state.part_year = payload
        },
        set_part_month(state,payload) {
            state.part_month = payload
        },
        set_part_day(state,payload) {
            state.part_day = payload
        },
        set_part_email(state,payload) {
            state.part_email = payload
        },
        set_part_post(state,payload) {
            state.part_post = payload
        },
        set_part_address(state,payload) {
            state.part_address = payload
        },
        set_part_tel(state,payload) {
            state.part_tel = payload
        },
        set_history(state,payload) {
            state.history = payload
        },
        set_trans(state,payload) {
            state.trans = payload
        },
        set_part_weight(state,payload) {
            state.part_weight = payload
        },
        set_cars(state,payload) {
            state.cars = payload
        },
        set_bikeNumber(state,payload) {
            state.bikeNumber = payload
        },
        set_light_carNumber(state,payload) {
            state.light_carNumber = payload
        },
        set_ordinary_carNumber(state,payload) {
            state.ordinary_carNumber = payload
        },
        set_cancel_modal(state, payload) {
            state.cancel_modal = payload
        },
        set_part_id(state, payload) {
            state.part_user_id = payload
        },
        // ここまでセッター //
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
                        state.part_user_id = user.uid
                        firebase.firestore().collection("part_users").doc(state.part_user_id)
                        .set(array)
                        .then(function () {
                            // 正常にデータ保存できた時の処理
                            console.log('success')
                            firebase.firestore().collection("judge").doc(state.part_user_id)
                            .set({judge:1})
                            .then(function () {
                                // 正常にデータ保存できた時の処理
                                console.log('success')
                                router.push('/part_mypage')
                            })
                        })
                    } else {
                        // User not logged in or has just logged out.
                    }
                })
            })
        },
        partUpdater(state,array){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User logged in already or has just logged in.
                    // ユーザーIDの取得
                    console.log(user.uid)
                    // ユーザIDをドキュメントIDとしてコレクションにarrayの中身をフィールドとして追加
                    state.part_user_id = user.uid
                    firebase.firestore().collection("part_users").doc(state.part_user_id)
                        .update(array)
                        .then(function () {
                            // 正常にデータ保存できた時の処理
                            console.log(array)
                            console.log('success')
                    })
                } else {
                    // User not logged in or has just logged out.
                }
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
                        state.user_id = doc.data().user_id
                        state.delivery = doc.data().delivery
                        // 拒否フラグ
                        state.cancel_modal = doc.data().cancel_modal
                    })
                } else {
                    // User not logged in or has just logged out.
                    router.push('/part_top')
                }
            })
        },
        request_info(state,a){
            state.user_info = a
            router.push('/part_requestdetails')
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
                        first_hour:doc.data().first_hour,
                        first_minute: doc.data().first_minute,
                        last_hour:doc.data().last_hour,
                        last_minute: doc.data().last_minute,
                        weight: doc.data().weight,
                        name: doc.data().name,
                        user_image: doc.data().user_image,
                        user_post: doc.data().user_post,
                        user_address: doc.data().user_address,
                        user_lat: doc.data().user_lat,
                        user_lng: doc.data().user_lng
                    })
                })
            })
        },
        part_send(state,array){
            firebase.firestore().collection('transport').doc(array['user_id']).delete()
            firebase.firestore().collection('users').doc(array['user_id']).collection('room').doc(array['user_id'])
            .set({
                part_id: array['part_id'],
                username: array['username'],
                part_fname: array['part_fname'],
                part_name: array['part_name'],
                part_image: array['part_image'],
                part_lat: array['part_latitude'],
                part_lng: array['part_longitude'],
                user_lat: array['user_lat'],
                user_lng: array['user_lng'],
                user_fname: array['user_fname'],
                user_image: array['user_image'],
                user_post: array['user_post'],
                user_address: array['user_address'],
                first_hour: array['first_hour'],
                first_minute: array['first_minute'],
                last_hour: array['last_hour'],
                last_minute: array['last_minute'],
            },
            {
                merge:true
            })
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.part_user_id = user.uid
                    firebase.firestore().collection('part_users').doc(user.uid)
                    .set({
                        user_id: array['user_id'],
                        delivery: 1
                    },
                    {
                        merge:true
                    })
                }
            })
            firebase.firestore().collection('users').doc(array['user_id']).update({
                flg:false,
                request:2
            })
        },
        part_room_onAuthState(state){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.part_user_id = user.uid
                    firebase.firestore().collection('part_users').doc(user.uid).get().then(doc => {
                        state.user_id = doc.data().user_id
                        firebase.firestore().collection('users').doc(state.user_id).collection('room').doc(state.user_id).get().then(doc => {
                            console.log(doc.data())
                            state.first_hour = doc.data().first_hour
                            state.first_minute = doc.data().first_minute
                            state.last_hour = doc.data().last_hour
                            state.last_minute = doc.data().last_minute
                            state.user_fname = doc.data().user_fname
                            state.user_image = doc.data().user_image
                            state.user_latitude = doc.data().user_lat
                            state.user_longitude = doc.data().user_lng
                        })
                    })
                }
            })
        },
        cancel_delete(state){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.cancel_modal = 0
                    state.part_user_id = user.uid
                    firebase.firestore().collection('part_users').doc(state.part_user_id).set({
                        cancel_modal:firebase.firestore.FieldValue.delete()
                    },
                    {
                        merge:true
                    })
                    router.push('/part_mypage')
                }
            })
        },
        add_to_user_transport(state){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.part_user_id = user.uid
                    firebase.firestore().collection('part_users').doc(state.part_user_id).get()
                    .then(doc => {
                        console.log(doc.data())
                        state.user_id = doc.data().user_id
                        firebase.firestore().collection('part_users').doc(state.part_user_id).set({
                            delivery:2
                        },
                        {
                            merge:true
                        })
                        firebase.firestore().collection('users').doc(state.user_id).set({
                            to_transport:1
                        },
                        {
                            merge:true
                        })
                        router.push('/transport')
                    })
                }
            })
        },
        part_createHistory(state){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.part_user_id = user.uid
                    firebase.firestore().collection('users').doc(state.user_id).collection('room').doc(state.user_id).get().then(doc => {
                        firebase.firestore().collection("part_users").doc(state.part_user_id).collection('history').add({
                            roomCompTime:state.roomCompTime,
                            compDay:state.compDay,
                            username:doc.data().user_fname,
                            weight:doc.data().weight,
                            createdAt: new Date()
                        })
                    })
                }
            })
        },
        part_deleteHistory(state){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.part_user_id = user.uid
                    firebase.firestore().collection("part_users").doc(state.part_user_id)
                    .collection('history').get().then(async snapshot => {
                        await snapshot.forEach(doc => {
                            doc.ref.delete()
                        })
                    })
                }
                router.push('/part_mypage')
            })
        },
        complete(state,array){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.part_user_id = user.uid
                    firebase.firestore().collection('part_users').doc(state.part_user_id).get()
                    .then(doc => {
                        console.log(doc.data())
                        state.user_id = doc.data().user_id
                        state.roomCompTime = array['roomCompTime']
                        state.compDay = array['compDay']
                        firebase.firestore().collection('users').doc(state.user_id).set({
                            completed:1
                        },
                        {
                            merge:true
                        })
                        firebase.firestore().collection('users').doc(state.user_id).collection('room').doc(state.user_id).set({
                            roomCompTime:state.roomCompTime,
                            compDay:state.compDay
                        },
                        {
                            merge:true
                        })
                        firebase.firestore().collection('users').doc(state.user_id).update({
                            flg:true
                        })
                        this.commit('part_createHistory')
                        this.commit('user_id_delete')
                    })
                }
            })
        },
        user_id_delete(state){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.part_user_id = user.uid
                }
                firebase.firestore().collection('part_users').doc(state.part_user_id).set({
                    user_id:firebase.firestore.FieldValue.delete(),
                    delivery:0
                },
                {
                    merge:true
                })
            })
        },
        part_logout() {
            firebase.auth().signOut()
            // Authのelse内で随時ログイン管理している場合はプッシュ重複になる
            // router.push('/part_top')
        },
    },
    actions: {}
})
