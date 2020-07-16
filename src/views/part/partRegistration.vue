<template>
  <v-content>
    <v-card>
      <v-card-title class="text-center justify-center">パートナーユーザ登録</v-card-title>
      <v-card-text>
        <v-container class="ma-0 pa-0" fluid>
            <v-layout column>
                <v-form ref="form" v-model="regist">
                    <v-row justify="center">
                        <v-flex lg3 xs4>
                            <!-- 姓textarea -->
                            <v-col lg="12" cols="12">
                                <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                required
                                label="姓"
                            ></v-text-field>
                            </v-col>
                        </v-flex>
                        <v-flex lg3 xs4>
                            <!-- 名textarea -->
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
                    <v-row justify="center">
                        <v-flex lg3 xs4>
                            <!-- セイtextarea -->
                            <v-col lg="12" cols="12">
                                <v-text-field
                                v-model="firstkana"
                                :rules="kanaRules"
                                required
                                label="セイ"
                            ></v-text-field>
                            </v-col>
                        </v-flex>
                        <v-flex lg3 xs4>
                            <!-- メイtextarea -->
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
                    <!-- 郵便番号textarea -->
                    <v-row justify="center">
                        <v-flex lg3 xs4>
                            <v-col lg="12" cols="12">
                                <v-text-field
                                v-model="frontpost"
                                :rules="frontpostRules"
                                label="〒"
                                required
                                ></v-text-field>
                            </v-col>
                        </v-flex>
                        <v-flex lg3 xs4>
                            <v-col lg="12" cols="12">
                                <v-text-field
                                v-model="backpost"
                                :rules="backpostRules"
                                required
                                ></v-text-field>
                            </v-col>
                        </v-flex>
                    </v-row>
                    <!-- 住所textarea -->
                    <v-row justify="center">
                        <v-col lg="6" cols="8">
                            <v-text-field
                            v-model="address"
                            :rules="nameRules"
                            label="住所"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- 電話番号textarea -->
                    <v-row justify="center">
                        <v-flex lg6 xs8>
                            <v-row class="ma-0 pa-0">
                                <v-col lg="2" cols="4">
                                <v-text-field
                                v-model="fronttel"
                                :rules="fronttelRules"
                                :counter="3"
                                label="電話番号"
                                required
                                ></v-text-field>
                            </v-col>
                        <!-- </v-flex>
                        <v-flex lg2 xs4> -->
                            <v-col lg="2" cols="4">
                                <v-text-field
                                v-model="mediumtel"
                                :rules="telRules"
                                :counter="4"
                                required
                                ></v-text-field>
                            </v-col>
                        <!-- </v-flex>
                        <v-flex lg2 xs4> -->
                            <v-col lg="2" cols="4">
                                <v-text-field
                                v-model="backtel"
                                :rules="telRules"
                                :counter="4"
                                required
                                ></v-text-field>
                            </v-col>
                            </v-row>
                            
                        </v-flex>
                    </v-row>

                    <!-- メールtextarea -->
                    <v-row justify="center">
                        <v-col lg="6" cols="8">
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            :counter="50"
                            label="メールアドレス"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- ユーザ名textarea -->
                    <v-row justify="center">
                        <v-col lg="6" cols="8">
                            <v-text-field
                            v-model="username"
                            :rules="usernameRules"
                            :counter="8"
                            required
                            label="ユーザ名"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- ここから顔写真の登録   -->
                    <v-row class="ma-0 pa-0 blue" justify="center">
                        <v-col lg="2">
                            <v-row class="ma-0 pa-0 red" justify="center">
                                <v-card-text style="justify-center" class="justify-center">
                                    顔写真の登録
                                </v-card-text>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-avatar size="200">
                            <img v-if="this.$store.state.img!='no_image' && !uploadImageUrl" 
                                :src="this.$store.state.img"
                                alt="アイコンa"
                                style="border-radius: 8em;
                                width:200px;
                                height:200px;" 
                            > -->
                            <img v-if="!uploadImageUrl && this.$store.state.img=='no_image'"
                                src="#"
                                alt="アイコンb"
                                style="border-radius: 8em;
                                width:200px;
                                height:200px;"
                            >
                            <img v-if="uploadImageUrl" 
                                :src="uploadImageUrl"
                                alt="アイコンc"
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

                    <!-- 次へボタン -->
                    <v-row class="mt-6" justify="center">
                        <v-btn
                            class="grey liten-5 white--text"
                            to="/part_credit"
                            :disabled="!regist"
                            @click="register()"
                            width="170"
                            height="50"
                        >
                        次へ
                        </v-btn>
                    </v-row>
                </v-form>
            </v-layout>
        </v-container>
      </v-card-text>

    </v-card>
  </v-content>
</template>


<script>
export default {
  data() {
    return {
        firstname:'',
        lastname:'',
        firstkana:'',
        lastkana:'',
        frontpost:'',
        backpost:'',
        address:'',
        fronttel:'',
        mediumtel:'',
        backtel:'',
        email:'',
        username:'',
        uploadImageUrl: '',
        array: {},
        regist: true,
        //姓・名・住所
        nameRules: [
            v => !!v || '入力欄が空白です。'
        ],
        //セイ・メイ
        kanaRules: [
            v => !!v || '入力欄が空白です。',
            v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
        ],
        //郵便番号(前)
        frontpostRules: [
            v => !!v || '入力欄が空白です。',
            v => /^\d{3}$/.test(v) || '郵便番号は半角数字3桁で入力してください。'
        ],
        //郵便番号(後)
        backpostRules: [
            v => !!v || '入力欄が空白です。',
            v => /^\d{4}$/.test(v) || '郵便番号は半角数字4桁で入力してください。'
        ],
        //電話番号（前）
        fronttelRules: [
            v => !!v || '入力欄が空欄です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => /^\d{2}$/.test(v) || /^\d{3}$/.test(v) || '半角数字2桁か3桁で入力してください。'
        ],
        //電話番号（中）（後）
        telRules: [
            v => !!v || '入力欄が空欄です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => /^\d{4}$/.test(v) || '半角数字4桁で入力してください。'
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
        inputImage: null,
    }
  },
  methods: {
        validate () {
            this.$refs.form.validate()
        },
        register(){
            this.array['firstname'] = this.firstname
            this.array['lastname'] = this.lastname
            this.array['address'] = this.address
            this.array['tel'] = this.tel
            this.array['email'] = this.email
            this.array['username'] = this.username
            this.array['password'] = this.password
            this.$store.commit('register', this.array)
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
    this.username  = this.$store.state.username
    this.email  = this.$store.state.email
  }

}
</script>