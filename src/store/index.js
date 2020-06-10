import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // ユーザデータ

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
        // クレジット情報へのアクセスフラグ
        user_credit_flg: 0,
        // クレジットカードナンバー
        user_credit_number: 0,
        // 利用回数履歴
        user_usage_history: 0,

        // パートナーデータ

        // メールアドレス・パスワード
        part_email: "",
        part_pass: "",
        // 氏名・かな
        part_fname: "",
        part_fname_kana: "",
        part_name: "",
        part_name_kana: "",
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

        // 管理者データ
        // メールアドレス・パスワード
        admin_email: "",
        admin_pass: ""




    },
    mutations: {},
    actions: {},
    modules: {}
})