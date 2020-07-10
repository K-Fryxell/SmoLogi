<template>
    <div>
        <v-row justify="center">
        <v-card tile width="600" height="auto" class="mt-12">
        <v-tabs>
            <v-tab v-on:click="tab = 0">ログイン</v-tab>
            <v-tab v-on:click="tab = 1">新規登録</v-tab>
        </v-tabs>
            <v-row>
                <Sign v-if="tab == 0"/>
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
        </v-card-text>
            </v-row>
        </v-card>
        </v-row>
    </div>
</template>

<script>
import Sign from '../../components/User/Sign.vue';
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
        Sign
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
