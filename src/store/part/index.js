import firebase from 'firebase'
import router from '../../router/index'
export default ({
    state: {
        // パートナーデータ
        array:{},
        // メールアドレス・パスワード
        part_email: "",
        part_pass: "",
        // 氏名・かな
        part_fname: "",
        part_fname_kana: "",
        part_name: "",
        part_name_kana: "",
        // ニックネーム
        nickname: "",
        // 住所
        part_address: "",
        // 口座へのアクセスフラグ
        part_account_flg: 0,
        // 銀行口座
        part_account_number: 0,
        // 車種
        part_cartype_number: 0,
        // パートナー顔画像
        part_image: "",
        // 通知内容(フィールドにより対応必須(増える可能性大5.6個))
        part_notification_content: "",
        // 通知数
        part_notification_number: 0,
        // 利用回数履歴
        part_usage_history: 0,
        // 給項目は後回し

        // レビュー機能星など1-5段階（仮）・余裕あればコメントも
        part_review_evaluation: 0,

    },
    getters: {},
    mutations: {
        partRegistUser(state, array) {
            firebase.auth().createUserWithEmailAndPassword(
                    array['email'],
                    array['password']
                )
                .then(function () {
                    console.log('success')
                    router.push('/part_mypage')
                })
        }
        

    },
    actions: {

    }
})
