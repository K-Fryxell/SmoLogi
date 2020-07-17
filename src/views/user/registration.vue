<template>
    <v-row justify="center">
      <v-card tile width="600" height="600" class="mt-12">
        <v-tabs>
          <v-tab v-on:click="tab = 0">ログイン</v-tab>
          <v-tab v-on:click="tab = 1">新規登録</v-tab>
        </v-tabs>
        <v-row>
            <v-card-text v-if="tab == 0">
                    <v-form
                        ref="form"
                        v-model="valid">
                        <!-- mail入力 -->
                        <v-text-field prepend-icon="mdi-email" class="pt-6" v-model="mailaddress"
                            :rules="registemailRules"
                            counter
                            label="E-mail"
                            hint="メールアドレスは50字以下で記入してください。"
                            required />
                        <!-- パスワード入力 -->
                        <v-text-field :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword" v-model="password"
                            :rules="registpassRules"
                            counter
                            label="password"
                            hint="パスワードは8字以上20字以下にしてください。"
                            required/>
                            <!-- ログインボタン -->
                            <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                                <v-btn
                                    :disabled="!valid"
                                    color="blue"
                                    class="mr-4 white--text"
                                    width="120"
                                >
                                    | Login |
                                </v-btn>
                            </v-row>
                      </v-form>
            </v-card-text>
          <v-card-text v-if="tab == 1">
                <v-row>
                  <v-col cols="6" sm="3">
                    <v-text-field
                    v-model="sei"
                     label="姓">
                    </v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                  <v-text-field
                    v-model="mei"
                     label="名"
                   ></v-text-field>
                 </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      v-model="seiKana"
                      label="セイ"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      v-model="meiKana"
                      label="メイ"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                <v-col sm="2">
                  <v-text-field
                  v-model="frontpost"
                    label="xxx"
                  ></v-text-field>
                </v-col>
                <div class="mt-10">
                  ー
                </div>
                <v-col sm="2">
                  <v-text-field
                    v-model="backpost"
                    label="xxxx"
                  ></v-text-field>
                </v-col>
              </v-row>
                  <v-text-field
                  v-model="address"
                    label="住所"
                  ></v-text-field>
                  <v-text-field
                    v-model="mailaddress"
                    counter
                    label="メールアドレス"
                    hint="メールアドレスは50字以下で記入してください。"
                  ></v-text-field>
                  <v-text-field
                    v-model="tel"
                    label="電話番号"
                  ></v-text-field>
                  <v-btn v-on:click="tab = 2">次へ</v-btn>
                </v-card-text>
            <v-card-text v-if="tab == 2">
              <v-form v-model="valid">
                <div class="mt-10">
                  <v-card-text>
                    カード番号
                  </v-card-text>
                  <v-text-field 
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" 
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                    @click:append="showPassword = !showPassword"
                    :rules="registpassRules"
                    counter
                    required>
                  </v-text-field>
                </div>
              <v-row>
                <v-col>
                  <v-select
                  :items="items"
                  ></v-select>
                </v-col>
                <div class="mt-10">
                年
                </div>
                <v-col>
                  <v-select :items="items"></v-select>
                </v-col>
              <div class="mt-10">
                月
              </div>
              </v-row>
              <v-row>
                  <v-btn v-on:click="tab = 1">
                      戻る
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                      :disabled="!valid"
                      color="blue"
                      class="mr-4 white--text">
                      登録
                  </v-btn>
              </v-row>
            </v-form>
            </v-card-text>
        </v-row>
      </v-card>
    </v-row>
</template>

<script>
export default {
    data(){
        return{
            array: {},
            tab:0,
            mailaddress: '',
            password: '',
            sei: '',
            mei: '',
            tel: '',
            seiKana: '',
            meiKana: '',
            backpost: '',
            frontpost: '',
            address: '',
            items:[1,2,3,4,5,6,7,8,9,10,11,12],
            valid: true,
            showPassword:false,
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
        }
    },
    components:{
    },
    methods: {
        signUp:async function(){
            this.$store.errorCode = ''
            this.array['email'] = this.mailaddress
            this.array['password'] = this.password
            await this.$store.commit('registUser',this.array)
        }
    },
}
</script>
