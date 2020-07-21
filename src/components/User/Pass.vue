<template>
    <v-container class="ma-0 pa-0" >
        <v-layout class="ma-0 pa-0">
            <v-flex xs12 lg12>
                <v-form v-model="valid">
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            <v-text-field
                                v-model="oldpassword"
                                prepend-icon="mdi-lock-outline"
                                :rules="registpassRules"
                                counter
                                label="古いパスワード"/>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            <v-text-field 
                                v-model="newpassword"
                                :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" 
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                @click:append="showPassword = !showPassword"
                                :rules="registpassRules"
                                counter
                                label="新しいパスワード"
                                hint="パスワードは8字以上20字以下にしてください。"
                                required/>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            <v-text-field 
                                v-model="newpasswordagain"
                                :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" 
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                @click:append="showPassword = !showPassword"
                                :rules="registpassRules"
                                counter
                                label="パスワード確認"
                                hint="パスワードは8字以上20字以下にしてください。"
                                required/>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center" class="ma-0 pa-0 mt-2    ">
                        <v-btn
                        :disabled="!valid"
                        color="blue"
                        class="mr-4 white--text mb-5"
                        width="120">
                            登録
                        </v-btn>
                    </v-row>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            array: {},
            oldpassword: '',
            newpassword: '',
            newpasswordagain: '',
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