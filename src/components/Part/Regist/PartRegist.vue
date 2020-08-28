<template>
    <v-content>
        <v-container class="mt-5 ma-0 pa-0" fluid>
            <v-layout column>
                <v-row justify="center" class="ma-lg-7 mt-lg-0 ma-0 pa-0">
                    <v-col cols="auto" class="mx-12">
                        <v-form ref="form" v-model="regist">
                            <v-row class="ma-0 pa-0">
                                <!-- 姓textarea -->
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="firstname"
                                        :rules="firstnameRules"
                                        prepend-icon="mdi-account-circle"
                                        required
                                        label="姓"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <!-- 名textarea -->
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="lastname"
                                        :rules="lastnameRules"
                                        required
                                        label="名"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <!-- セイtextarea -->
                                <v-flex lg5 xs6>
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
                                <v-flex lg5 xs6>
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
                            <!-- 性別 -->
                            <v-row class="ma-0 pa-0">
                                <v-col cols="12" lg="12">
                                    <v-radio-group v-model="sex" :mandatory="false" row prepend-icon="mdi-human-male-female">
                                        <v-radio label="男性" value="0"/>
                                        <v-radio label="女性" value="1"/>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <!-- 誕生日 -->
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
                            <!-- メールtextarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    prepend-icon="mdi-email"
                                    :counter="50"
                                    label="メールアドレス"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- パスワード -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="passwd"
                                    :rules="passwdRules"
                                    prepend-icon="mdi-lock"
                                    v-bind:type="showss ? 'text' : 'password'"
                                    v-bind:append-icon="showss ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="showss = !showss"
                                    label="パスワード"
                                    counter
                                    />
                                </v-col>
                            </v-row>
                            <!-- 再入力パスワード -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="againpasswd"
                                    :rules="againpasswdRules"
                                    prepend-icon="mdi-lock"
                                    v-bind:type="showss ? 'text' : 'password'"
                                    v-bind:append-icon="showss ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="showss = !showss"
                                    label="パスワード"
                                    counter
                                    />
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

                            <!-- 銀行情報 -->
                            <v-row class="ma-0 mt-5 pa-0">
                                <v-card-text v-resize='onResize' :class='size_title'>
                                    給与支払先
                                </v-card-text>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col cols="12" lg="12">
                                    <!-- 銀行の種類で分岐 -->
                                    <v-radio-group v-model="whichbank" :mandatory="false" row>
                                        <v-radio value="0" label="ゆうちょ銀行"/>
                                        <!-- <v-radio value="1" label="その他"/> -->
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <!-- ゆうちょ銀行 -->
                            <v-row class="ma-0 pa-0" v-if="whichbank==0">
                                <v-col lg="6" cols="12">
                                    <v-text-field
                                    v-model="y_symbol"
                                    :rules="y_symbolRules"
                                    label="通帳記号"
                                    :counter="6"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==0">
                                <v-col lg="6" cols="12">
                                    <v-text-field
                                    v-model="y_number"
                                    :rules="y_numberRules"
                                    label="通帳番号"
                                    :counter="8"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="y_host"
                                    :rules="y_hostRules"
                                    label="口座名義"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- その他の銀行 -->
                            <!-- <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="bankname"
                                        :rules="banknameRules"
                                        label="金融機関名"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="bankcode"
                                        :rules="bankcodeRules"
                                        :counter="4"
                                        label="金融機関コード"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="branch"
                                        :rules="branchRules"
                                        label="支店名"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="branchcode"
                                        :rules="branchcodeRules"
                                        :counter="3"
                                        label="支店コード"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="number"
                                    :rules="numberRules"
                                    :counter="7"
                                    label="口座番号"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-col lg="8" cols="12">
                                    <v-text-field
                                    v-model="host"
                                    :rules="hostRules"
                                    label="口座名義"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row> -->
                            <!-- ここから顔写真の登録   -->
                            <v-row class="ma-0 mt-5 pa-0" justify="center">
                                <v-card-text align="center"  v-resize='onResize' :class='size_title'>
                                    顔写真の登録
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
                                        <v-btn elevation="2" color="grey liten-5 white--text" @click="btnclick()">画像選択</v-btn>
                                    </v-flex>
                                </v-col>
                            </v-row>
                            <!-- ここまで顔写真の登録 -->

                            <!-- 次へボタン -->
                            <v-row class="mt-6" justify="center">
                                <v-btn
                                    class="grey liten-5 white--text"
                                    to="/part_mypage"
                                    :disabled="!regist"
                                    @click="register()"
                                    width="170"
                                    height="50"
                                >
                                    登録
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
const { mask } = require('vue-the-mask')
export default {
    data() {
        return {
            POST:'###-####',
            TEL:'###-####-####',
            firstname:'',
            lastname:'',
            firstkana:'',
            lastkana:'',
            sex:0,
            birthValueYear: 0,
            birthValueMonth: 0,
            birthValueDay: 0,
            birthCol:0,
            dropdown: [],
            dropdown1: [],
            dropdown2: [],
            email:'',
            passwd:'',
            showpp:false,
            showss:false,
            againpasswd:'',
            post:'',
            address:'',
            tel:'',
            username:'',
            //ここから車種選択
            cars:[],
            carNumber1:'',
            carNumber2:'',
            carNumber3:'',
            //ここからゆうちょ銀行
            whichbank:null,
            y_symbol:'',
            y_number:'',
            y_host:'',
            part_image:'',
            // ここから銀行
            // bankname:'',
            // bankcode:'',
            // branch:'',
            // branchcode:'',
            // number:'',
            // host:'',
            // ここから画像
            uploadImageUrl: require("@/assets/icon.jpg"),
            delivery:0,
            array: {},
            regist: true,
            //文字サイズ
            x:window.innerWidth,
            y:window.innerHeight ,
            size_title:'title',
            // 姓名
            firstnameRules: [
                v => !!v || '入力欄が空白です。',
                v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
            ],
            lastnameRules:[
                v => !!v || '入力欄が空白です。',
                v => /^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ン一-龥]+$/.test(v) || '使用できない文字が含まれています。'
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
            //セイ・メイ
            kanaRules: [
                v => !!v || '入力欄が空白です。',
                v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
            ],
            //誕生日
            yearRules: [
                v => !!v || '生年は必ず入力してください。'
            ],
            monthRules: [
                v => !!v || '生月は必ず入力してください。'
            ],
            dayRules: [
                v => !!v || '生日は必ず入力してください。'
            ],
            //パスワード
            passwdRules:[
                v => !!v || '入力欄が空白です。',
                v => (v&& 8<=v.length) || '8文字以上で入力してください。',
                v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                v => /[a-zA-Z\d]$/.test(v) || '半角英数字のみで入力してください。'
            ],
            //再入力パスワード
            againpasswdRules:[
                v => !!v || '入力欄が空白です。',
                v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                v => (v&& v === this.passwd) || 'パスワードが一致していません。',
            ],
            //郵便番号
            postRules: [
                v => !!v || '入力欄が空白です。',
                v => /^[0-9]{3}-[0-9]{4}$/.test(v) || '郵便番号の形式が違います'
            ],
            //電話番号
            telRules: [
                v => !!v || '入力欄が空欄です。',
                v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                v => /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '携帯電話の番号の形式が違います'
            ],
            //メール
            emailRules: [
                v => !!v || '入力欄が空白です。',
                v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。',
                v => /.+@.+\..+/.test(v) || 'メールアドレスの入力形式が異なっています。',
                v => (v && v.length <= 50) || '有効桁を超えた不正な値が入力されました。'
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
            //ゆうちょ通帳記号
            y_symbolRules:[
                v => !!v || '入力欄が空欄です。',
                v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                v => /^1\d{3}0{1}\d$/.test(v) || /^1\d{3}0$/.test(v) || '通帳記号の形式が違います。'
            ],
            //ゆうちょ通帳番号
            y_numberRules:[
                v => !!v || '入力欄が空欄です。',
                v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
                v => (v &&  7 <= v.length <= 8) || '番号が違います。'
            ],
            //ゆうちょ口座名義
            y_hostRules:[
                v => !!v || '入力欄が空欄です。',
                v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
            ],
            // //金融機関名
            // banknameRules:[
            //      v => !!v || '入力欄が空欄です。',
            // ],
            // //金融機関コード
            // bankcodeRules:[
            //     v => !!v || '入力欄が空白です。',
            //     v => (v && v.length == 4) || '4字で入力してください。'
            // ],
            // //支店名
            // branchRules:[
            //      v => !!v || '入力欄が空欄です。',
            // ],
            // //支店コード
            // branchcodeRules:[
            //     v => !!v || '入力欄が空白です。',
            //     v => (v && v.length == 3) || '3字で入力してください。'
            // ],
            // //口座番号
            // numberRules:[
            //     v => !!v || '入力欄が空欄です。',
            //     v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            //     v => (v &&  6 <= v.length <= 7) || '番号が違います。'
            // ],
            // //口座名義
            // hostRules:[
            //     v => !!v || '入力欄が空欄です。',
            //     v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
            // ],
            inputImage: null,
        }
    },
    mounted () {
        this.onResize
    },
    watch:{
        x:function(){
            if(this.x<600)
            {
                this.size_title = 'subtitle-1'
            }
            else
            {
                this.size_title = 'title'
            }
        }
    },
    methods: {
            onResize () {
                this.x = window.innerWidth
                this.y = window.innerHeight
            },
            register(){
                this.array['firstname'] = this.firstname
                this.array['lastname'] = this.lastname
                this.array['firstkana'] = this.firstkana
                this.array['lastkana'] = this.lastkana
                this.array['sex'] = this.sex
                this.array['birthYear'] = this.birthValueYear
                this.array['birthMonth'] = this.birthValueMonth
                this.array['birthDay'] = this.birthValueDay
                this.array['post'] = this.post
                this.array['address'] = this.address
                this.array['tel'] = this.tel
                this.array['email'] = this.email
                this.array['username'] = this.username
                this.array['password'] = this.passwd
                this.array['y_symbol'] = this.y_symbol
                this.array['y_number'] = this.y_number
                this.array['y_host'] = this.y_host
                this.array['part_image'] = this.uploadImageUrl
                // 車種
                this.array['cars'] = this.cars
                this.array['bikeNumber'] = this.carNumber1
                this.array['light_carNumber'] = this.carNumber2
                this.array['ordinary_carNumber'] = this.carNumber3
                // ログインの種別判定
                this.array['judge'] = 1
                this.array['delivery'] = 0
                // this.array['bankname'] = this.bankname
                // this.array['bankcode'] = this.bankcode
                // this.array['branch'] = this.branch
                // this.array['branchcode'] = this.branchcode
                // this.array['number'] = this.number
                // this.array['host'] = this.host
                this.$store.commit('partRegistUser', this.array)
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
    components:{
    },
    created(){
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
    }
}
</script>
