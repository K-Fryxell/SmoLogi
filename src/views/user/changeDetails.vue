<template>
    <v-container class="ma-0 pa-0" fluid>
        <Uheader/>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex xs12 lg12 >
                    <v-card class="ma-0 pa-0" elevation="0">
                        <v-card-title class="justify-center font-weight-thin">
                            詳細変更
                        </v-card-title>
                        <v-row justify="center" class="ma-0 pa-0">
                            <v-col cols="auto" lg="9" class="mx-12">
                                <v-form ref="form" v-model="update">
                                    <!-- ここから顔写真 -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-card-text align="center">
                                            顔写真の登録
                                        </v-card-text>
                                    </v-row>
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-avatar size="200">
                                            <img v-if="uploadImageUrl"
                                                :src="uploadImageUrl"
                                                alt="アイコン"
                                            >
                                            <img
                                                v-if="uploadImageUrl==null"
                                                :src="img"
                                                alt="アイコンa"
                                            >
                                        </v-avatar>
                                    </v-row>
                                    <!-- ここからテスト -->
                                    <input
                                        style="display: none"
                                        ref="input"
                                        type="file"
                                        accept="image/*,image/*,image/*"
                                        @change="selectedFile()"
                                    >
                                    <!-- ここまでテスト -->
                                    <v-row class="pa-0 ma-0 mt-4" justify="center">
                                        <v-col class="ma-0 pa-0" cols="auto">
                                            <v-flex xs12>
                                                    <!-- ファイルの選択 -->
                                                    <v-btn elevation="2" color="grey liten-5 white--text" @click="btnclick()">画像選択</v-btn>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <!-- ここまでの顔写真 -->

                                    <!-- 姓,名 -->
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
                                    <!-- 姓名カナ -->
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
                                    <!-- メールアドレス -->
                                    <v-row class="ma-0 pa-0">
                                        <v-col>
                                            <v-text-field
                                                prepend-icon="mdi-email"
                                                v-model="email"
                                                counter
                                                label="メールアドレス"
                                                :rules="emailRules"
                                                hint="メールアドレスは50字以内で記入してください。"/>
                                        </v-col>
                                    </v-row>
                                    <!-- 郵便番号 -->
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="12" lg="5">
                                            <v-text-field
                                                prepend-icon="mdi-currency-kzt"
                                                v-model="post"
                                                v-mask="POST"
                                                label="郵便番号"
                                                :rules="postRules"/>
                                        </v-col>
                                    </v-row>
                                    <!-- 住所 -->
                                    <v-row class="ma-0 pa-0">
                                        <v-col>
                                            <v-text-field
                                                prepend-icon="mdi-home"
                                                v-model="address"
                                                label="住所"
                                                :rules="addressRules"/>
                                        </v-col>
                                    </v-row>
                                    <!-- 電話番号 -->
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
                                </v-form>

                                <!-- 更新ボタン -->
                                <v-row justify="center" class="ma-0 pa-0">
                                    <v-btn
                                        color="grey darken-2"
                                        outlined
                                        x-large
                                        :disabled="!update"
                                        @click="clickUpdate()"
                                    >
                                        更新
                                    </v-btn>
                                </v-row>

                                <!-- クレジットカード情報変更ボタン -->
                                <v-row :justify="btnLayout" v-resize="onResize" class="ma-0 pa-0">
                                    <v-btn
                                        class="mt-12"
                                        color="grey darken-2"
                                        outlined
                                        x-large
                                        rounded
                                        to="/user_passchange"
                                    >
                                        パスワード・クレジットカード情報変更
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
            </v-layout>
        <Ufooter/>
    </v-container>
</template>
<script>
const { mask } = require('vue-the-mask')
import Uheader  from '@/components/User/Header'
import Ufooter from '@/components/User/Footer'
export default {
    data(){
        return{
            POST: '###-####',
            TEL: '###-####-####',
            array:{},
            //プロフィール写真
            uploadImageUrl: null,
            //v-formのv-model
            update :true,
            btnLayout:'end',
            x:0,
            y:0,
            img:require("@/assets/icon.jpg"),
            //Rules
            // 姓名
            firstnameRules: [
                v => !!v || '入力欄が空白です。',
                v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
            ],
            lastnameRules:[
                v => !!v || '入力欄が空白です。',
                v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
            ],
            //姓カナ
            firstkanaRules: [
                v => !!v || '入力欄が空白です。',
                v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
            ],
            //名カナ
            lastkanaRules: [
                v => !!v || '入力欄が空白です。',
                v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
            ],
            //メールアドレス
            emailRules: [
                v => !!v || '入力欄が空白です。',
                v => /.+@.+\..+/.test(v) || 'メールアドレスの入力形式が異なっています。',
                v => (v && v.length <= 50) || '50字以内で入力してください。',
                v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。'
            ],
            //郵便番号
            postRules: [
                v => !!v || '入力欄が空白です。',
                v => /^[0-9]{3}-[0-9]{4}$/.test(v) || '郵便番号の形式が違います'
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
            //電話番号
            telRules: [
                v => !!v || '入力欄が空白です。',
                v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                v => /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '電話番号の形式が違います'
            ],
        }
    },
    mounted(){
      window.addEventListener('resize', this.onResize)
    },
    beforeDestory(){
        window.removeEventListener('resize',this.onResize)
    },
    computed:{
        //姓
        user_fname(){
            return this.$store.getters.user_fname
        },
        firstname(){
            return this.user_fname
        },
        //名
        user_name(){
            return this.$store.getters.user_name
        },
        lastname(){
            return this.user_name
        },
        //姓カナ
        user_fname_kana(){
            return this.$store.getters.user_fname_kana
        },
        firstkana(){
            return this.user_fname_kana
        },
        //名カナ
        user_name_kana(){
            return this.$store.getters.user_name_kana
        },
        lastkana(){
            return this.user_name_kana
        },
        //メールアドレス
        user_email(){
            return this.$store.getters.user_email
        },
        email(){
            return this.user_email
        },
        //郵便番号
        user_post(){
            return this.$store.getters.user_post
        },
        post(){
            return this.user_post
        },
        //住所
        user_address(){
            return this.$store.getters.user_address
        },
        address(){
            return this.user_address
        },
        //電話番号
        user_tel(){
            return this.$store.getters.user_tel
        },
        tel(){
            return this.user_tel
        },
    },
    methods:{
        validate(){
            this.$refs.form.validate()
        },
        onResize(){
            this.x = window.innerWidth;
            this.y = window.innerHeight;
        },
        //更新ボタン
        clickUpdate(){
            //プロフィール写真
            //姓
            this.array['firstname'] = this.firstname
            //名
            this.array['lastname'] = this.lastname
            //姓カナ
            this.array['firstkana'] = this.firstkana
            //名カナ
            this.array['lastkana'] = this.lastkana
            //メールアドレス
            this.array['email'] = this.email
            //郵便番号
            this.array['post'] = this.post
            //住所
            this.array['address'] = this.address
            //電話番号
            this.array['tel'] = this.tel
        },
        //ファイルの選択
        btnclick() {
            this.$refs.input.click()
        },
        async selectedFile() {
            this.isUploading = true;
            const file = this.$refs.input.files[0]
                if (!file) {
                        return;
                }
            const fr = new FileReader()
                fr.readAsDataURL(file)
                fr.addEventListener('load', () => {
                    this.uploadImageUrl = fr.result
                    // alert(this.uploadImageUrl);
                })
        },
    },
    watch:{
        x:function(){
            if(this.x<=600)
            {
              this.btnLayout= 'center'
            }else
            {
              this.btnLayout='end'
            }
        }
    },
    components: {
        Ufooter,
        Uheader,
    },
    directives: {
        mask
    },
    created() {
        this.$store.commit('onAuthStateChanged')
    },
}
</script>
