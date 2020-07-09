<template>
    <div>
      <v-container>
        <h2>
            パスワード変更  
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
            <v-text-field 
                v-model="password"
                :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" 
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append="showPassword = !showPassword"
                :rules="registpassRules"
                counter
                label="パスワード確認"
                hint="パスワードは8字以上20字以下にしてください。"
                required/>
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
            this.$store.errorCode = ''
            this.array['email'] = this.mailaddress
            this.array['password'] = this.password
            await this.$store.commit('registUser',this.array)
        }
    },
}
</script>
