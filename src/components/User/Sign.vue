<template>

    <content>
        <!-- ログインボタン -->
        <v-btn class="mr-1" text style="color: #FFF" @click="dialog = true">
            ログイン
        </v-btn>
        <v-dialog v-model="dialog" class="ma-0 pa-0" width="500">
            <v-card>
                <v-row justify="center" class="ma-0 pa-0">
                    <v-col cols="10" class="ma-0 pa-0">
                        <v-row justify="center" class="ma-0 pa-0 pa-6">
                            <img width="200" src="@/assets/nimochi.png">
                        </v-row>
                        <v-form ref="form" v-model="valid">
                            <!-- mail入力 -->
                            <v-text-field
                                v-model="mailaddress"
                                class="ma-0 pa-0 pb-6"
                                prepend-icon="mdi-email"
                                :rules="registemailRules"
                                label="E-mail"
                                hint="メールアドレスは50字以下で記入してください。"
                                counter
                                required />
                            <!-- パスワード入力 -->
                            <v-text-field
                                v-model="password"
                                class="ma-0 pa-0 pb-6"
                                prepend-icon="mdi-lock"
                                :rules="registpassRules"
                                :type="showPassword ? 'text' : 'password'"
                                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                                label="password"
                                hint="パスワードは8字以上20字以下にしてください。"
                                counter
                                required/>
                                <!-- ログインボタン -->
                            <v-row justify="center" align="center" class="ma-0 pa-0 pb-2">
                                <v-btn
                                    class="ma-0 pa-0 white--text"
                                    style="background-color: #83B590"
                                    @click="login"
                                    width="120"
                                    dark
                                    outlined
                                    rounded
                                    :disabled="!valid"
                                    :loading="loading"
                                >
                                    ログイン
                                </v-btn>
                                <v-progress-linear
                                    :active="loading"
                                    :indeterminate="loading"
                                    top
                                    color="blue accent-4"></v-progress-linear>
                            </v-row>
                            <!-- 会員登録へのリンク -->
                            <v-row class="ma-0 pa-0 pb-8" justify="end" align="end">
                                <v-btn class="ma-0 pa-0" style="color:#757575" text to="user_regist">
                                    会員登録はこちら
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
        <!-- 新規登録ページボタン -->
        <v-btn dark elevation="0" style="background-color: #A5D6A7; color: #FFF" to="/user_regist">
            新規登録
        </v-btn>
    </content>
</template>
<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            array:{},
            mailaddress: '',
            password: '',
            // モーダル表示・非表示
            dialog:false,
            // ログイン状態の確認
            authenticatedUser:false,
            // 入力判定ボタンの無効
            valid: true,
            // パスワード表示・非表示
            showPassword:false,
            // ローディング切り替え
            loading:false,
            // ログイン用メールアドレス
            registemailRules: [
                v => !!v || '入力欄が空白です。',
                v => /.+@.+\..+/.test(v) || '想定していない文字形式で入力されました。',
                v => (v && v.length <= 50) || '50字以内で入力してください。',
                v => /^\S+@\S+\.\S+$/.test(v) || '想定していない文字形式で入力されました。'
            ],
            // ログイン用パスワード
            registpassRules:[
                v => !!v || '入力欄が空白です。',
                v => (v&& 8<=v.length) || '',
                v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                v => /[a-zA-Z\d]$/.test(v) || '半角英数字のみで入力してください。'
            ],
        }
    },
    methods: {
        // ログアウト
        logoutUser(){
            firebase.auth().signOut();
        },
        // ログイン
        login(){
            if (this.mailaddress === '' || this.password === '') return
            this.loading = true
            this.array['email'] = this.mailaddress
            this.array['password'] = this.password
            this.$store.commit('user_login', this.array)

            // if (this.mailaddress === '' || this.password === '') return
            // firebase.auth().signInWithEmailAndPassword(this.mailaddress, this.password)
            // .then(()=>{
            //     this.mailaddress = '';
            //     this.password = '';
            // })
            // .catch(function(error) {
            //     // Handle Errors here.
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     console.log(errorCode);
            //     console.log(errorMessage);
            // });
        },
        // モーダルを閉じる
        close(){
            this.dialog = false
            this.loading = false
        }
    },
    mounted(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.authenticatedUser = true;
            } else {
                this.authenticatedUser = false;
            }
        });
    },
    watch: {
        // ログインアニメーションなど試作段階でできてないボタンなど変化させたい
        // 3秒間ローディング
        loading (val) {
            val && setTimeout(async() => {
                // async await 遅らせる
                await this.close()
                if(this.authenticatedUser == true)
                {
                    alert('ログイン成功')
                    this.mailaddress = ''
                    this.password = ''
                }
                else{
                    alert('ログイン失敗');
                }
            }, 3000)
        },
        //   モーダル初期化
        dialog:function(){
            if(this.authenticatedUser == false)
            {
                if(this.dialog ===true) return
                    this.$refs.form.reset()
            }
        },
    }
}
</script>
