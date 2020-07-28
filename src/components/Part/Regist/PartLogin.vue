<template>
    <v-container class="ma-0 pa-0" >
        <v-layout class="ma-0 pa-0">
            <v-row justify="center">
                <v-col lg="8" cols="10" class="mx-12">
                    <v-form ref="form" v-model="valid">
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
                            required/>
                            <!-- ログインボタン -->
                        <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                            <v-btn
                                :disabled="!valid"
                                to="/part_mypage"
                                color="blue"
                                class="mr-4 white--text mb-5"
                                width="120"
                            >
                                | Login |
                            </v-btn>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-layout>
    </v-container> 
</template>

<script>
export default {
    data(){
        return{
            array: {},
            mailaddress: '',
            password: '',
            valid: true,
            items:[1,2,3,4,5,6,7,8,9,10,11,12],
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
            await this.$store.commit('part_login',this.array)
        }
    },
}
</script>