<template>
    <div>
        <v-container>
        <h2>
            クレジットカード情報変更
        </h2>
        <v-form
            v-model="valid">
            <v-text-field
                v-model="mailaddress"
                prepend-icon="mdi-lock-outline"
                :rules="registemailRules"
                counter
                label="古いパスワード"/>
            <v-text-field 
                v-model="password"
                :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" 
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append="showPassword = !showPassword"
                :rules="registpassRules"
                counter
                label="新しいパスワード"
                hint="パスワードは8字以上20字以下にしてください。"
                required/>
            <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Solo field"
          dense
          solo></v-select>
      </v-col>
            <v-btn 
                @click="signUp"
                :disabled="!valid"
                color="blue"
                class="mr-4 white--text"
                width="120">
                登録
            </v-btn>
        </v-form>
      </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            array: {},
            mailaddress: '',
            password: '',
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
    methods: {
        signUp:async function(){
            this.array['email'] = this.mailaddress
            this.array['password'] = this.password
            await this.$store.commit('partRegistUser',this.array)
        }
    },
}
</script>
