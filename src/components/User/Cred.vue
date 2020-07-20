<template>
    <v-container>
        <v-form ref="form" v-model="caf">
            <v-row justify="center">
                <v-col cols="2">
                    <v-row>
                        <v-col cols="auto">
                            <h3 class="pt-2">カード有効期限</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <v-select
                        v-model="isYear"
                        :items="year"
                        menu-props="auto"
                        label="Select"
                        hide-details
                        single-line
                    ></v-select>
                </v-col>
                <v-col>
                    年
                </v-col>
                <v-col>
                    <v-select
                        v-model="isMonth"
                        :items="month"
                        menu-props="auto"
                        label="Select"
                        hide-details
                        single-line
                    ></v-select>
                </v-col>
                <v-col cols="auto" class="mt-5 ml-n4">
                    月
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="2">
                    <v-row justify="end">
                        <v-col cols="auto">
                            <h3 class="pt-2">カード情報</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="2">
                    <v-text-field class="pt-6" v-model="card"
                        :rules="cardRules"
                        counter
                        hint="使えるカードはVISAカードのみです"
                        required/>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="2">
                    <v-row justify="end">
                        <v-col cols="auto">
                            <h3 class="pt-2">セキュリティコード</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="2">
                    <v-text-field class="pt-6" v-model="secu"
                        :rules="secuRules"
                        counter
                        hint="セキュリティコードはクレジットカードの裏面の末尾3桁(1部4桁)"
                        required/>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="2">
                    <v-row justify="end">
                        <v-col cols="auto">
                            <h3 class="pt-2">カード名義</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="2">
                    <v-text-field class="pt-6" v-model="meigi"
                        :rules="meigiRules"
                        counter
                        hint="カード名義"
                        required/>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
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
            await this.$store.commit('partRegistUser',this.array)
        }
    },
}
</script>
