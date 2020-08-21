<template>
    <v-content>
        <v-container class="mt-5 ma-0 pa-0" fluid>
            <v-layout column>
                <v-row justify="center" class="ma-0 pa-0">
                    <v-col cols="auto" class="mx-12">
                        <v-form ref="form" v-model="update" v-if="btn == 0">
                            <v-row class="ma-0 mt-5 pa-0" justify="center">
                                <v-card-text align="center"  v-resize='onResize' :class='size_headline'>
                                    プロフィール変更
                                </v-card-text>
                            </v-row>
                            <!-- ここから顔写真の変更   -->
                            <v-row class="ma-0 mt-5 pa-0" justify="center">
                                <v-card-text align="center"  v-resize='onResize' :class='size_title'>
                                    アイコンの変更
                                </v-card-text>
                            </v-row>
                            <v-row class="ma-0 pa-0" justify="center">
                                <v-avatar size="200">
                                    <!-- <img v-if="this.$store.state.img!='no_image' && !uploadImageUrl"
                                        :src="this.$store.state.img"
                                        alt="アイコンa"
                                        style="border-radius: 8em;
                                        width:200px;
                                        height:200px;"
                                    >
                                    <img v-if="!uploadImageUrl && this.$store.state.img=='no_image'"
                                        src="#"
                                        alt="アイコンb"
                                        style="border-radius: 8em;
                                        width:200px;
                                        height:200px;"
                                    > -->
                                    <img
                                        :src="uploadImageUrl"
                                        alt="アイコン"
                                        style="border-radius: 8em;
                                        width:200px;
                                        height:200px;"
                                    >
                                </v-avatar>
                            </v-row>
                            <!-- ここからテスト -->
                            <input
                                style="display: none"
                                ref="input"
                                type="file"
                                accept="image/*, image/*, image/*"
                                @change="selectedFile()"
                            >
                            <!-- ここまでテスト -->
                            <v-row class="pa-0 ma-0 mt-4" justify="center">
                                <v-col class="ma-0 pa-0" cols="auto">
                                    <v-flex xs12>
                                        <!-- ファイルの選択 -->
                                        <v-btn elevation="2" color="grey liten-5 white--text" @click="btnclick()">画像変更</v-btn>
                                    </v-flex>
                                </v-col>
                            </v-row>
                            <!-- ここまで顔写真の登録 -->
                            <v-row class="ma-0 pa-0">
                            <!-- 姓textarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="fname"
                                        :rules="nameRules"
                                        prepend-icon="mdi-account-circle"
                                        required
                                        label="姓"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <!-- 名textarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="lastname"
                                        :rules="nameRules"
                                        required
                                        label="名"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <!-- セイtextarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="firstkana"
                                        :rules="kanaRules"
                                        prepend-icon="mdi-account-circle-outline"
                                        required
                                        label="セイ"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <!-- メイtextarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="lastkana"
                                        :rules="kanaRules"
                                        required
                                        label="メイ"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <!-- ユーザ名textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="6" cols="8">
                                    <v-text-field
                                    v-model="username"
                                    :rules="usernameRules"
                                    prepend-icon="mdi-account-circle"
                                    :counter="8"
                                    required
                                    label="ユーザ名"
                                ></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- 郵便番号textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="6" cols="8">
                                    <v-text-field
                                        v-model="post"
                                        v-mask="POST"
                                        :rules="postRules"
                                        prepend-icon="mdi-currency-kzt"
                                        label="郵便番号"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- 住所textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="address"
                                    :rules="addressRules"
                                    prepend-icon="mdi-home"
                                    label="住所"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- 電話番号textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="10" cols="8">
                                    <v-text-field
                                    v-model="tel"
                                    v-mask="TEL"
                                    :rules="telRules"
                                    prepend-icon="mdi-phone-in-talk"
                                    label="電話番号"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- 利用車種選択 -->
                            <!-- 利用車種 -->
                            <v-row class="ma-0 mt-5 pa-0">
                                <v-card-text v-resize='onResize' :class='size_title'>
                                    利用車種
                                </v-card-text>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col cols="12" lg="12">
                                    <!-- 自転車 -->
                                    <v-checkbox v-model="cars" label="自転車" value='自転車'></v-checkbox>
                                    <!-- 自動二輪車 -->
                                    <v-checkbox v-model="cars" label="自動二輪車" value='自動二輪車'></v-checkbox>
                                    <v-row class="ma-0 pa-0" v-if="cars.includes('自動二輪車')">
                                        <v-col lg="10" cols="8">
                                            <v-text-field
                                            v-model="carNumber1"
                                            :rules="carNumberRules"
                                            label="車種ナンバー"
                                            hint="例）品川100あ1234（文字、３桁までの数字またはアルファベット、ひらがな1文字、4桁までの数字の順）"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <!-- 軽自動車 -->
                                    <v-checkbox v-model="cars" label="軽自動車" value='軽自動車'></v-checkbox>
                                    <v-row class="ma-0 pa-0" v-if="cars.includes('軽自動車')">
                                        <v-col lg="10" cols="8">
                                            <v-text-field
                                            v-model="carNumber2"
                                            :rules="carNumberRules"
                                            label="車種ナンバー"
                                            hint="例）品川100あ1234（文字、３桁までの数字またはアルファベット、ひらがな1文字、4桁までの数字の順）"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <!-- 普通自動車 -->
                                    <v-checkbox v-model="cars" label="普通自動車" value='普通自動車'></v-checkbox>
                                    <v-row class="ma-0 pa-0" v-if="cars.includes('普通自動車')">
                                        <v-col lg="10" cols="8">
                                            <v-text-field
                                            v-model="carNumber3"
                                            :rules="carNumberRules"
                                            label="車種ナンバー"
                                            hint="例）品川100あ1234（文字、３桁までの数字またはアルファベット、ひらがな1文字、4桁までの数字の順）"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <!-- 更新ボタン -->
                            <v-row class="mt-6" justify="center">
                                <v-btn
                                    class="grey liten-5 white--text"
                                    :disabled="!update"
                                    @click="updater()"
                                    width="170"
                                    height="50"
                                >
                                更新
                                </v-btn>
                            </v-row>
                        </v-form>
                        <!-- パスワード変更ページ -->
                        <partChangePasswd v-if="btn == 1"/>
                        <!-- 口座変更ページ -->
                        <partChangeBank v-if="btn == 2"/>
                        <!-- 切り替えボタン（縦表示不可） -->
                        <v-row class="ma-0 mt-8 pa-0" justify="center">
                            <v-btn-toggle class="ma-0 pa-0" borderless v-model="btn">
                                <v-btn :value="0" class="overline lighten-1" :elevation="0" v-if="btn != 0" text>
                                    <span v-resize='onResize' :class='size_btn'>プロフィールの変更</span>
                                </v-btn>
                                <v-btn :value="1" class="overline lighten-1" :elevation="0" v-if="btn != 1" text>
                                    <span v-resize='onResize' :class='size_btn'>パスワードの変更</span>
                                </v-btn>
                                <v-btn :value="2" class="overline lighten-1" :elevation="0" v-if="btn != 2" text>
                                    <span v-resize='onResize' :class='size_btn'>振込先の変更</span>
                                </v-btn>
                            </v-btn-toggle>
                        </v-row>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
import partChangePasswd from '@/components/Part/PartChangePassword'
import partChangeBank from '@/components/Part/PartChangeBank'
const { mask } = require('vue-the-mask')

export default {
    data (){
        return{
            POST:'###-####',
            TEL:'###-####-####',
            uploadImageUrl: '',
            cars:[],
            btn:0,
            array: {},
            update: true,
            //姓・名・住所
            nameRules: [
                v => !!v || '入力欄が空白です。',
                v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
            ],
            //セイ・メイ
            kanaRules: [
                v => !!v || '入力欄が空白です。',
                v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
            ],
            //郵便番号(前)
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
                v => !!v || '入力欄が空欄です。',
                v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                v => /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '携帯電話の番号の形式が違います'
            ],
            //ユーザ名
            usernameRules: [
                v => !!v || '入力欄が空白です。',
                v => (v && v.length <= 8) || '8字以内で入力してください。'
            ],
            //利用車種選択
            carNumberRules:[
                // 文字、３桁までの数字またはアルファベット、ひらがな1文字、4桁までの数字の順
                v => /^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+[a-zA-Z0-9]{1,3}[\u3040-\u309f]{1}[0-9]{1,4}$/.test(v)  ||'例）品川100あ1234（文字、３桁までの数字またはアルファベット、ひらがな1文字、4桁までの数字の順）',
            ],
            inputImage: null,
            x:window.innerWidth,
            y:window.innerHeight ,
            size_display:'display-1',
            size_headline:'headline',
            size_title:'title',
            size_subtitle:'subtitle-1',
            size_body:'body-1',
            size_btn:'body-1',
        }
    },
    computed:{
        //画像
        part_image:{
            get(){
                return this.$store.getters.part_image
            },
            set(value){
                this.$store.commit('set_part_image',value)
            }
        },
        //姓
        fname:{
            get() {
                return this.$store.getters.part_fname
            },
            set(value){
                this.$store.commit('set_part_fname',value)
            }
        },
        //名
        lastname:{
            get(){
                return this.$store.getters.part_name
            },
            set(value){
                this.$store.commit('set_part_name',value)
            }
        },
        //姓カナ
        firstkana:{
            get(){
                return this.$store.getters.part_fname_kana
            },
            set(value){
                this.$store.commit('set_part_fname_kana',value)
            }
        },
        //名カナ
        lastkana:{
            get(){
                return this.$store.getters.part_name_kana
            },
            set(value){
                this.$store.commit('set_part_name_kana',value)
            }
        },
        //ユーザ名
        username:{
            get(){
                return this.$store.getters.nickname
            },
            set(value){
                this.$store.commit('set_nickname',value)
            }
        },
        //メールアドレス
        email:{
            get(){
                return this.$store.getters.part_email
            },
            set(value){
                this.$store.commit('set_part_email',value)
            }
        },
        //郵便番号
        post:{
            get(){
                return this.$store.getters.part_post
            },
            set(value){
                this.$store.commit('set_part_post',value)
            }
        },
        //住所
        address:{
            get(){
                return this.$store.getters.part_address
            },
            set(value){
                this.$store.commit('set_part_address',value)
            }
        },
        //電話番号
        tel:{
            get(){
                return this.$store.getters.part_tel
            },
            set(value){
                this.$store.commit('set_part_tel',value)
            }
        },
        carsData:{
            //セッター不要
            get(){
                return this.$store.getters.cars
            }
        },
        carNumber1:{
            get(){
                return this.$store.getters.bikeNumber
            },
            set(value){
                this.$store.commit('set_bikeNumber',value)
            }
        },
        carNumber2:{
            get(){
                return this.$store.getters.light_carNumber
            },
            set(value){
                this.$store.commit('set_light_carNumber',value)
            }
        },
        carNumber3:{
            get(){
                return this.$store.getters.ordinary_carNumber
            },
            set(value){
                this.$store.commit('set_ordinary_carNumber',value)
            }
        }
    },
    components:{
        partChangePasswd,
        partChangeBank
    },
    mounted () {
        this.onResize
    },
    methods: {
        onResize () {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        validate () {
            this.$refs.form.validate()
        },
        updater(){
            this.btn = 0
            this.array['part_image'] = this.uploadImageUrl
            this.array['firstname'] = this.fname
            this.array['lastname'] = this.lastname
            this.array['firstkana'] = this.firstkana
            this.array['lastkana'] = this.lastkana
            this.array['post'] = this.post
            this.array['address'] = this.address
            this.array['tel'] = this.tel
            this.array['email'] = this.email
            this.array['username'] = this.username
            this.array['cars'] = this.cars
            this.array['bikeNumber'] = this.carNumber1
            this.array['light_carNumber'] = this.carNumber2
            this.array['ordinary_carNumber'] = this.carNumber3
            console.log(this.array)
            this.$store.commit('partUpdater', this.array)
        },
        // selectfileボタン押下時
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
        uploadImageUrl:function(){
            return this.part_image
        },
        cars:function() {
            return this.carsData
        },
        x:function(){
            if(this.x<600)
            {
                this.size_display = 'headline',
                this.size_headline = 'title',
                this.size_title = 'subtitle-1',
                this.size_subtitle = 'body-2',
                this.size_body = 'caption',
                this.size_btn = 'caption'
            }
            else
            {
                this.size_display = 'display-1',
                this.size_headline = 'headline',
                this.size_titele = 'title',
                this.size_subtitele = 'subtitle-1',
                this.size_body = 'body-1',
                this.size_btn = 'body-1'
            }
        }
    },
    created() {
        this.uploadImageUrl = this.part_image
        this.cars = this.carsData
    },
    directives: {
        mask
    }
}
</script>
