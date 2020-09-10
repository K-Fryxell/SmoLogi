<template>
    <content class="ma-0 pa-0">
        <!-- pcヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-sm-and-down" fixed height style="width:100%;" permanent>
			<Uheader/>
		</v-navigation-drawer>
		<!-- 携帯ヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-md-and-up" fixed height style="width:100%; height:70px;" permanent>
			<Uheader/>
		</v-navigation-drawer>
        <v-container class="ma-0 mt-12 py-8 pa-0" fluid>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex>
                    <v-row justify="center" class="ma-0 pa-0" style="background-color: #F6F6F6">
                        <v-col cols="12" md="6" sm="6" lg="6" class="ma-0 pa-0 mx-12">
                            <v-card class="ma-0 pa-0" elevation="0" style="background-color: #F6F6F6">
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-card-title class="ma-0 pa-0 mb-12 title text--black font-weight-bold">
                                        <span style="text-decoration:underline; text-underline-position: under; text-decoration-thickness: 10px">プロフィール変更</span>
                                    </v-card-title>
                                </v-row>
                                <v-form ref="form" v-model="update">
                                    <!-- ここから顔写真 -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-avatar size="200">
                                            <img
                                                v-if="uploadImageUrl != ''"
                                                :src="uploadImageUrl"
                                                alt="アイコン"
                                            >
                                            <img
                                                v-else
                                                :src="user_image"
                                                alt="アイコン"
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
                                                <v-btn elevation="2" dark style="background-color: #83B590" @click="btnclick()">画像選択</v-btn>
                                            </v-flex>
                                        </v-col>
                                    </v-row>
                                    <!-- ここまでの顔写真 -->

                                    <!-- 姓,名 -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-col cols="6">
                                            <v-text-field
                                                prepend-icon="mdi-account-circle"
                                                v-model="user_fname"
                                                label="姓"
                                                :rules="firstnameRules"/>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field
                                                v-model="user_name"
                                                label="名"
                                                :rules="lastnameRules"/>
                                        </v-col>
                                    </v-row>
                                    <!-- 姓名カナ -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-col cols="6">
                                            <v-text-field
                                                prepend-icon="mdi-account-circle-outline"
                                                v-model="user_fname_kana"
                                                label="セイ"
                                                :rules="firstkanaRules"/>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field
                                                v-model="user_name_kana"
                                                label="メイ"
                                                :rules="lastkanaRules"/>
                                        </v-col>
                                    </v-row>
                                    <!-- メールアドレス -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-col>
                                            <v-text-field
                                                prepend-icon="mdi-email"
                                                v-model="user_email"
                                                counter
                                                label="メールアドレス"
                                                :rules="emailRules"
                                                hint="メールアドレスは50字以内で記入してください。"/>
                                        </v-col>
                                    </v-row>
                                    <!-- 郵便番号 -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-col>
                                            <v-text-field
                                                prepend-icon="mdi-currency-kzt"
                                                v-model="user_post"
                                                v-mask="POST"
                                                label="郵便番号"
                                                :rules="postRules"/>
                                        </v-col>
                                    </v-row>
                                    <!-- 住所 -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-col>
                                            <v-text-field
                                                prepend-icon="mdi-home"
                                                v-model="user_address"
                                                label="住所"
                                                :rules="addressRules"/>
                                        </v-col>
                                    </v-row>
                                    <!-- 電話番号 -->
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <v-col>
                                            <v-text-field
                                                prepend-icon="mdi-phone-in-talk"
                                                v-model="user_tel"
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
                                        width="120"
                                        dark
                                        style="background-color: #83B590"
                                        outlined
                                        x-large
                                        rounded
                                        :disabled="!update"
                                        @click="clickUpdate()"
                                    >
                                        変更
                                    </v-btn>
                                </v-row>

                                <!-- クレジットカード情報変更ボタン -->
                                <v-row :justify="btnLayout" v-resize="onResize" class="mb-12 pb-5">
                                    <v-btn
                                        dark
                                        class="mt-12"
                                        style="background-color: #83B590"
                                        outlined
                                        x-large
                                        rounded
                                        to="/user_passchange"
                                    >
                                        パスワード・クレジットカード情報変更
                                    </v-btn>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
        <Ufooter/>
    </content>
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
            uploadImageUrl: '',
            //v-formのv-model
            update :true,
            btnLayout:'end',
            x:0,
            y:0,
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
        //画像
        user_image:{
            get(){
                return this.$store.getters.user_image
            },
            set(value){
                this.$store.commit('set_user_image',value)
            }
        },
        //姓
        user_fname:{
            get() {
                return this.$store.getters.user_fname
            },
            set(value){
                this.$store.commit('set_user_fname',value)
            }
        },
        //名
        user_name:{
            get() {
                return this.$store.getters.user_name
            },
            set(value){
                this.$store.commit('set_user_name',value)
            }
        },
        //姓カナ
        user_fname_kana:{
            get() {
                return this.$store.getters.user_fname_kana
            },
            set(value){
                this.$store.commit('set_user_fname_kana',value)
            }
        },
        //名カナ
        user_name_kana:{
            get() {
                return this.$store.getters.user_name_kana
            },
            set(value){
                this.$store.commit('set_user_name_kana',value)
            }
        },
        //メールアドレス
        user_email:{
            get() {
                return this.$store.getters.user_email
            },
            set(value){
                this.$store.commit('set_user_email',value)
            }
        },
        //郵便番号
        user_post:{
            get() {
                return this.$store.getters.user_post
            },
            set(value){
                this.$store.commit('set_user_post',value)
            }
        },
        //住所
        user_address:{
            get() {
                return this.$store.getters.user_address
            },
            set(value){
                this.$store.commit('set_user_address',value)
            }
        },
        //電話番号
        user_tel:{
            get() {
                return this.$store.getters.user_tel
            },
            set(value){
                this.$store.commit('set_user_tel',value)
            }
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
            this.array['user_image'] = this.uploadImageUrl
            //姓
            this.array['firstname'] = this.user_fname
            //名
            this.array['lastname'] = this.user_name
            //姓カナ
            this.array['firstkana'] = this.user_fname_kana
            //名カナ
            this.array['lastkana'] = this.user_name_kana
            //メールアドレス
            this.array['email'] = this.user_email
            //郵便番号
            this.array['post'] = this.user_post
            //住所
            this.array['address'] = this.user_address
            //電話番号
            this.array['tel'] = this.user_tel
            this.$store.commit('userUpdater', this.array)
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
<style lang="scss">
h2{
    text-align: center;
}
</style>
