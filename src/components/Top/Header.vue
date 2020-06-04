<template>
    <div>
        <v-toolbar-items>
            <div class="mt-3">
                <!-- テキストのタイトル -->
                <!-- ログインボタン -->
                <v-btn text color="blue lighten-2" dark @click="dialog = true" class="mr-3">ログイン</v-btn>

                <!-- モーダル(ログインの中身） -->
                <div class="text-center">
                    <v-dialog v-model="dialog" width="500">
                        <v-card height="420">
                            <v-card-title class="headline blue white--text" primary-title>ログイン</v-card-title>
                            <v-card-text>
                                <v-form
                                ref="form"
                                v-model="valid">
                                    <!-- mail入力 -->
                                    <v-text-field prepend-icon="mdi-email" class="pt-6" v-model="login_email"
                                        :rules="emailRules"
                                        counter
                                        label="E-mail"
                                        hint="メールアドレスは50字以下で記入してください。"
                                        required />
                                    <!-- パスワード入力 -->
                                    <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPassword = !showPassword" v-model="login_password"
                                        :rules="passRules"
                                        counter
                                        label="password"
                                        hint="パスワードは8字以上20字以下にしてください。"
                                        required/>
                                    <!-- ログインボタン -->
                                    <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                                        <v-btn
                                            :loading= loading
                                            :disabled="!valid"
                                            color="blue"
                                            class="mr-4 white--text"
                                            @keypress.enter="login"
                                            @click="login"
                                            width="120"
                                        >
                                            | Login |
                                        </v-btn>
                                    </v-row>
                                </v-form>
                            </v-card-text>

                            <v-card-text>
                                <v-row justify="end" align="center" class="pa-0 ma-0">
                                    <v-btn to="#"  height="20"  class="overline mt-n6" :elevation=0 color="white">
                                        パスワードを忘れた方▶︎
                                    </v-btn>
                                </v-row>
                                <v-row justify="end" align="center" class="pa-0 ma-0">
                                    <v-btn @click="(regist = true) && (dialog = false)"  height="20"  class="overline mb-n3" :elevation=0 color="white">
                                        新規登録まだの方▶︎
                                    </v-btn>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>

                            <v-card-actions>
                                <!-- 外部ボタン -->
                                <v-row justify="center" class="ma-0 pa-0 mt-3 mb-n4">
                                    <v-col cols="auto">
                                        <v-btn class="red white--text" width="120"><v-icon small left >fab fa-google</v-icon>Google</v-btn>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-btn class="blue white--text" width="120"><v-icon left>fab fa-twitter-square</v-icon>Twitter</v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
            <!-- 新規登録ページ -->
            <div class="mt-3">
            <!-- テキストのタイトル -->
            <!-- 新規登録ページボタン -->
            <v-btn @click="regist = true" color="blue lighten-2" dark>新規登録</v-btn>
            <!-- モーダル(新規登録の中身） -->
            <div class="text-center">
                <v-dialog v-model="regist" width="500" @submit.prevent="form_submit">
                    <v-card height="550">
                        <v-card-title class="headline green lighten-1 white--text"  primary-title>新規登録</v-card-title>
                            <v-card-text>
                                <v-form ref="form_regi"
                                v-model="valiregi">
                                <!-- ユーザ名入力 -->
                                <v-text-field prepend-icon="mdi-account" class="pt-6" v-model="regist_username"
                                    :rules="userRules"
                                    counter
                                    label="ユーザ名"
                                    hint="ユーザ名は8字以下で記入してください。"
                                    required></v-text-field>
                                <!-- mail入力 -->
                                <v-text-field prepend-icon="mdi-email" v-model="regist_email"
                                    :rules="registemailRules"
                                    counter
                                    label="E-mail"
                                    required>
                                    </v-text-field>
                                <!-- パスワード入力 -->
                                <v-text-field
                                    prepend-icon="mdi-lock"
                                    label="Password"
                                    v-bind:type="showpp ? 'text' : 'password'"
                                    v-bind:append-icon="showpp ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="showpp = !showpp"
                                    v-model="regist_password"
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
                                <!-- 新規登録ボタン -->
                                    <v-row justify="center" align="center" class="pa-0 ma-0">
                                    <v-btn
                                        :disabled="!valiregi"
                                        color="success"
                                        class="mr-4 white--text"
                                        @click="register"
                                        width="120"
                                    >
                                        | Regist |
                                    </v-btn>
                                    </v-row>
                                </v-form>
                            </v-card-text>

                            <v-card-text>
                                <v-row justify="end" align="center" class="pa-0 ma-0">
                                    <v-btn @click="(dialog = true) && (regist = false)"  height="20"  class="overline mb-n3" :elevation=0 color="white">
                                        アカウント登録済みの方▶︎
                                    </v-btn>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>

                            <v-card-actions>
                                <!-- 外部ボタン -->
                                <v-row justify="center" class="pa-0 ma-0 mt-3">
                                    <v-col cols="auto">
                                        <v-btn class="red white--text" width="120"><v-icon small left >fab fa-google</v-icon>Google</v-btn>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-btn class="blue white--text" width="120"><v-icon left>fab fa-twitter-square</v-icon>Twitter</v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
        </v-toolbar-items>
    </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      login_email:'',
      login_password:'',
      passcon:'',
      regist_email:'',
      regist_username:'',
      regist_password:'',
      loading: false,
      valid: true,
      valiregi: true,
      dialog: false,
      regist:false,
      showPassword : false,
      showpp:false,
      showss:false,
      // ログイン
      emailRules: [
        v => !!v || '入力欄が空白です。',
        v => /.+@.+\..+/.test(v) || '想定していない文字形式で入力されました。',
        v => (v && v.length <= 50) || '50字以内で入力してください。',
        v => /^\S+@\S+\.\S+$/.test(v) || '想定していない文字形式で入力されました。'
      ],
      // ログインパスワード
      passRules: [
        v => !!v || '入力欄が空白です。',
        // 記号不可の仕方わからん
        // v => /.+@.+\..+/.test(v) || '想定していない文字形式で入力されました。',
        v => (v&& 8<=v.length) || '',
        v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
        v => /[a-zA-Z\d]$/.test(v) || '半角英数字のみで入力してください。'
      ],
      registemailRules: [
        v => !!v || '入力欄が空白です。',
        v => /.+@.+\..+/.test(v) || '想定していない文字形式で入力されました。',
        v => (v && v.length <= 50) || '50字以内で入力してください。',
        v => /^\S+@\S+\.\S+$/.test(v) || '想定していない文字形式で入力されました。'
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
        v => v === this.regist_password || 'パスワードが一致していません。',
      ],
      userRules:[
            v => !!v || '入力欄が空白です。',
            v => /[ぁ-んァ-ヴｦ-ﾟa-zA-Z!@#$%^&*()_+:,'"./?\-=[\]\\d]$/.test(v) ||'無効な記号が入力されています。',
            v => (v&& v.length <= 8) || '有効桁を超えた不正な値が入力されました。'
      ]
    }
  },
  watch:{
    dialog:function(){
      if(this.dialog ===true) return
        this.$refs.form.reset()
    },
    regist:function(){
      if(this.regist ===true) return
        this.$refs.form_regi.reset()
    },
  },
  methods: {
      login(){
          console.log('a')
      },
      register(){
          console.log('b')
      }
  },
  // created() {
  //       this.$watch(
  //         // 2つのプロパティを含めた値を評価させる
  //         () => [this.isEmail,this.isPass],
  //         // valueやoldValueの型は上で返した配列になる
  //         (value, oldValue) => {
  //           // console.log('[text1, text2] change:', oldValue, '->', value);
  //           console.log(oldValue);
  //           console.log(value);
  //           if((value.every(v => v!=''))&&(value.every(v => v.length>8)))
  //           {
  //               this.filled = true;
  //           }
  //           else{
  //             this.filled = false;
  //           }
  //         },
  //       );
  //     }
};
</script>
