<template>
  <v-content>
    <v-card>
      <v-card-title class="text-center justify-center">パートナーユーザ登録</v-card-title>
      <v-card-text>
        <v-container>
            <v-layout>
                <v-form ref="form" v-model="regist">
                    <v-row justify="center">
                        <v-flex>
                            <!-- 氏textarea -->
                            <v-col lg="12" cols="5">
                                <p>氏</p>
                                <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                required
                                label="苗字"
                                single-line
                                outlined
                            ></v-text-field>
                            </v-col>
                        </v-flex>
                        <v-flex>
                            <!-- 名textarea -->
                            <v-col lg="12" cols="5">
                                <p>名</p>
                                <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                required
                                label="名前"
                                single-line
                                outlined
                            ></v-text-field>
                            </v-col>
                        </v-flex>
                    </v-row>
                    <!-- 住所textarea -->
                    <v-row justify="center">
                        <v-col cols="5">
                            <p>住所</p>
                            <v-text-field
                            v-model="address"
                            :rules="nameRules"
                            label="住所"
                            required
                            single-line
                            outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- 電話番号textarea -->
                    <v-row justify="center">
                        <v-col cols="5">
                            <p>電話番号</p>
                            <v-text-field
                            v-model="tel"
                            :rules="telRules"
                            :counter="11"
                            label="電話番号"
                            required
                            single-line
                            outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- メールtextarea -->
                    <v-row justify="center">
                        <v-col cols="5">
                            <p>メールアドレス</p>
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            :counter="50"
                            label="メールアドレス"
                            required
                            single-line
                            outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- ユーザ名textarea -->
                    <v-row justify="center">
                        <v-col cols="5">
                            <p>ユーザ名</p>
                            <v-text-field
                            v-model="username"
                            :rules="usernameRules"
                            :counter="8"
                            required
                            label="ユーザ名"
                            single-line
                            outlined
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <!-- パスワード入力 -->
                    <v-text-field
                    prepend-icon="mdi-lock"
                    label="Password"
                    v-bind:type="showpp ? 'text' : 'password'"
                    v-bind:append-icon="showpp ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showpp = !showpp"
                    v-model="password"
                    :rules="registpassRules"
                    counter
                    required
                    ></v-text-field>
                    <!-- パスワード再入力 -->
                    <v-text-field
                    prepend-icon="mdi-lock" 
                    label="Password Confirmation"
                    v-bind:type="showss ? 'text' : 'password'"
                    v-bind:append-icon="showss ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showss = !showss"
                    :rules="passwordConfirmRules"
                    v-model="passcon"
                    counter
                    required
                    ></v-text-field>

                    <!-- ここから顔写真の登録   -->
                    <v-row justify="center">
                        <v-card-text>
                            顔写真の登録
                        </v-card-text>
                    </v-row>
                    <v-row justify="center">
                        <v-avatar size="200">
                            <img v-if="this.$store.state.img!='no_image' && !uploadImageUrl" 
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
        address:'',
        tel:'',
        email:'',
        username:'',
        password:'',
        passcon:'',
        showpp:false,
        showss:false,
        uploadImageUrl: '',
        array: {},
        regist: true,
        nameRules: [
            v => !!v || '入力欄が空白です。'
        ],
        telRules: [
            v => !!v || '入力欄が空欄です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。'
        ],
        usernameRules: [
            v => !!v || '入力欄が空白です。',
            v => (v && v.length <= 8) || '8字以内で入力してください。'
        ],
        emailRules: [
            v => !!v || '入力欄が空白です。',
            v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。',
            v => /.+@.+\..+/.test(v) || 'メールアドレスの入力形式が異なっています。',
            v => (v && v.length <= 50) || '有効桁を超えた不正な値が入力されました。'
        ],
        // アカウント登録1パスワード
        registpassRules:[
            v => !!v || '入力欄が空白です。',
            v => (v&& 8<=v.length) || '',
            v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
            v => /[a-zA-Z\d]$/.test(v) || '半角英数字のみで入力してください。'
        ],
        // アカウント登録2パスワード
        passwordConfirmRules: [
            v => !!v || '入力欄が空白です。',
            v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
            v => v === this.password || 'パスワードが一致していません。',
        ],
        inputImage: null,
    }
  },
  methods: {
        // validate () {
        //     this.$refs.form.validate()
        // },
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