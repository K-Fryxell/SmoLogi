<template>
    <v-container class="ma-0 pa-0" >
        <v-layout class="ma-0 pa-0">
            <v-flex xs12 lg12 >
                <v-row justify="center" class="ma-0 pa-0">
                    <v-col cols="auto" class="mx-12">
                        <v-form v-model="valid">
                            <v-row class="ma-0 pa-0">
                                <v-col cols="6" lg="4">
                                    <v-text-field
                                    prepend-icon="mdi-account-circle"
                                    v-model="firstname"
                                    label="姓"
                                    :rules="firstnameRules"/>
                                </v-col>
                                <v-col cols="6" lg="4">
                                    <v-text-field
                                    v-model="lastname"
                                    label="名"
                                    :rules="lastnameRules"/>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col cols="6" lg="4">
                                    <v-text-field
                                    prepend-icon="mdi-account-circle-outline"
                                    v-model="firstkana"
                                    label="セイ"
                                    :rules="firstkanaRules"/>
                                </v-col>
                                <v-col cols="6" lg="4">
                                    <v-text-field
                                    v-model="lastkana"
                                    label="メイ"
                                    :rules="lastkanaRules"/>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col cols="12" lg="12">
                                    <v-radio-group
                                        prepend-icon="mdi-human-male-female"
                                        v-model="sex" :mandatory="false" row>
                                        <v-radio label="男性"/>
                                        <v-radio label="女性"/>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col :cols="birthCol" sm="4">
                                    <v-select
                                    v-model="birthValueYear"
                                    :items="dropdown"
                                    :rules="yearRules"
                                    label="生年"
                                    ></v-select>
                                </v-col>
                                <v-col :cols="birthCol" sm="4">
                                    <v-select
                                    v-model="birthValueMonth"
                                    :items="dropdown1"
                                    :rules="monthRules"
                                    label="月"
                                    ></v-select>
                                </v-col>
                                <v-col :cols="birthCol" sm="4">
                                    <v-select
                                    v-model="birthValueDay"
                                    :items="dropdown2"
                                    :rules="dayRules"
                                    label="日"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                <v-text-field
                                    prepend-icon="mdi-email"
                                    v-model="email"
                                    counter
                                    label="メールアドレス"
                                    :rules="emailRules"
                                    hint="メールアドレスは50字以下で記入してください。"/>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    <v-text-field
                                    v-model="passwd"
                                    :type="showPassword ? 'text' : 'password'"
                                    prepend-icon="mdi-lock-outline"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="showPassword = !showPassword"
                                    label="パスワード"
                                    counter
                                    hint="パスワードは8字以上20字以下にしてください。"
                                    :rules="registpassRules"/>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    <v-text-field
                                        v-model="againpasswd"
                                        :type="showAgainPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                                        :append-icon="showAgainPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showAgainPassword = !showAgainPassword"
                                        :rules="againpassRules"
                                        counter
                                        label="パスワード確認"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col cols="5" lg="5">
                                    <v-text-field
                                        v-model="post"
                                        v-mask="POST"
                                        prepend-icon="mdi-currency-kzt"
                                        label="郵便番号"
                                        :rules="postRules"
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    <v-text-field
                                        v-model="address"
                                        prepend-icon="mdi-home"
                                        label="住所"
                                        :rules="addressRules"
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    <v-text-field
                                        prepend-icon="mdi-phone-in-talk"
                                        v-model="tel"
                                        v-mask="TEL"
                                        label="電話"
                                        :rules="telRules"
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    カード名義
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    <v-text-field
                                        v-model="meigi"
                                        :rules="meigiRules"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    カード情報
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    <v-text-field
                                        v-model="card"
                                        :rules="cardRules"
                                        counter
                                        hint="使えるカードはVISAカードのみです"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    カード有効期限
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    <v-select
                                        v-model="isYear"
                                        :items="year"
                                        menu-props="auto"
                                        label="Select"
                                        hide-details
                                        single-line
                                    />
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    年
                                </v-col>
                                <v-col>
                                    <v-select
                                        v-model="isMonth"
                                        :items="month"
                                        menu-props="auto"
                                        label="Select"
                                        hide-details
                                        single-line
                                    />
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    月
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col>
                                    セキュリティコード
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col cols="3" lg="3">
                                    <v-text-field
                                        v-model="secu"
                                        :rules="secuRules"
                                        hint="セキュリティコードはクレジットカード裏面の末尾3桁(1部4桁)"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                                <v-btn
                                :disabled="!valid"
                                color="blue"
                                class="mr-4 white--text mb-5"
                                @click="signUp"
                                width="120">
                                    登録
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
const { mask } = require('vue-the-mask')
export default {
    data(){
        return{
            POST: '###-####',
            TEL: '###-####-####',
            array: {},
            // メールアドレス
            email: '',
            // パスワード
            passwd: '',
            // パスワード確認
            againpasswd: '',
            // 姓
            firstname:'',
            // 名
            lastname:'',
            // セイ
            firstkana:'',
            // メイ
            lastkana:'',
            // 性別
            sex: '',
            // 誕生日
            birthValueYear: '',
            birthValueMonth: '',
            birthValueDay: '',
            dropdown: [],
            dropdown1: [],
            dropdown2: [],
            // 郵便番号
            post: '',
            // 住所
            address: '',
            // 電話番号
            tel:'',
            // クレジットカード
            card: '',
            // セキュリティコード
            secu:'',
            // 名義
            meigi:'',
            // 年
            isYear:2020,
            year:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
            // 月
            isMonth:1,
            month:[1,2,3,4,5,6,7,8,9,10,11,12],
            valid: true,
            showPassword:false,
            showAgainPassword:false,
            x:window.innerWidth,
            y:window.innerHeight,
            birthCol:'',
            // メールアドレスの登録
            registemailRules: [
                v => !!v || '入力欄が空白です。',
                v => /.+@.+\..+/.test(v) || '想定していない文字形式で入力されました。',
                v => (v && v.length <= 50) || '50字以内で入力してください。',
                v => /^\S+@\S+\.\S+$/.test(v) || '想定していない文字形式で入力されました。'
            ],
            // パスワードの登録
            registpassRules:[
                v => !!v || '入力欄が空白です。',
                v => (v&& 8<=v.length) || '',
                v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                v => /[a-zA-Z\d]$/.test(v) || '半角英数字のみで入力してください。'
            ],
            // パスワード再入力
            againpassRules:[
                v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                v => (v&& v === this.passwd) || 'パスワードが一致していません。',
            ],
            // 姓名
            firstnameRules: [
                v => !!v || '入力欄が空白です。',
                v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
            ],
            lastnameRules:[
                v => !!v || '入力欄が空白です。',
                v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
            ],
            //セイメイ
            firstkanaRules: [
                v => !!v || '入力欄が空白です。',
                v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
            ],
            // 誕生日
            lastkanaRules: [
                v => !!v || '入力欄が空白です。',
                v => /[ァ-ヴ]$/.test(v) || 'カタカナで入力してください。'
            ],
            yearRules: [
                v => !!v || '生年は必ず入力してください。'
            ],
            monthRules: [
                v => !!v || '生月は必ず入力してください。'
            ],
            dayRules: [
                v => !!v || '生日は必ず入力してください。'
            ],
            //郵便番号
            postRules: [
                v => !!v || '入力欄が空白です。',
                v => /^[0-9]{3}-[0-9]{4}$/.test(v) || '郵便番号の形式が違います',

            ],
            //住所
            addressRules: [
                v => !!v || '住所は必ず入力してください。',
                v => (v && v.length <= 50) || '住所は50字以内にて入力してください。',
                // eslint-disable-next-line no-irregular-whitespace
                v => /^[^ 　]+$/.test(v) || 'スペースが入力されています。削除してください。',
                // eslint-disable-next-line no-control-regex
                v => /^[^\x01-\x7E\xA1-\xDF]+$/.test(v) || '住所は全角にて入力してください。'
            ],
            //メールアドレス
            emailRules: [
                v => !!v || '入力欄が空白です。',
                v => /.+@.+\..+/.test(v) || 'メールアドレスの入力形式が異なっています。',
                v => (v && v.length <= 50) || '50字以内で入力してください。',
                v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。'
            ],
            //電話番号
            telRules: [
                v => !!v || '入力欄が空白です。',
                v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                v => /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '電話番号の形式が違います'
            ],
            cardRules:[
                v => !!v || '入力欄が空白です。',
                v => /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47]{13}|(?:2131|1800|35[0-9]{3})[0-9]{11})$/.test(v) || '存在しないカード番号です'
            ],
            secuRules:[
                v => !!v || '入力欄が空白です。',
                v => /^[0-9]+$/.test(v) || '入力できるのは半角数字のみです',
                v => (v&& (v.length==3)||(v.length==4)) || '3桁または4桁ので入力してください'
            ],
            meigiRules:[
                v => !!v || '入力欄が空白です。',
                v => /^[ぁ-んァ-ン一-龥a-zA-Z0-9・/]+$/.test(v) || '無効な記号が入力されています。',
                v => (v&& v.length<=80) || '80字以内で入力してください'
            ]
        }
    },
    mounted () {
      this.onResize
    },
    watch:{
        x:function(){
            if(this.x<=400)
            {
                this.birthCol = '12'
            }
            else
            {
                this.birthCol = '4'
            }
        }
    },
    methods: {
        onResize () {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        signUp:async function(){
            // メールアドレス
            this.array['email'] = this.email
            // パスワード
            this.array['password'] = this.passwd
            // 姓
            this.array['firstname'] = this.firstname
            // 名
            this.array['lastname'] = this.lastname
            // セイ
            this.array['firstkana'] = this.firstkana
            // メイ
            this.array['lastkana'] = this.lastkana
            // 性別
            this.array['sex'] = this.sex
            // 郵便番号
            this.array['post'] = this.post
            // 住所
            this.array['address'] = this.address
            // 電話番号
            this.array['tel'] = this.tel
            // クレジットカード
            this.array['card'] = this.card
            // セキュリティコード
            this.array['secu'] = this.secu
            // 名義
            this.array['meigi'] = this.meigi
            // 年
            this.array['isYear'] = this.isYear
            // 月
            this.array['isMonth'] = this.isMonth

            await this.$store.commit('registUser',this.array)
        }
    },
    created() {
        for (let index = 0; index < 120; index++) {
            const year = 2019
            this.dropdown.push(String(year - index))
            for (let index1 = 0; index1 < 12; index1++) {
                const month = 1
                this.dropdown1.push(String(month + index1))
                for (let index2 = 0; index2 < 31; index2++) {
                    const day = 1
                    this.dropdown2.push(String(day + index2))
                }
            }
        }
    },
    directives: {
        mask
    },
}
</script>
