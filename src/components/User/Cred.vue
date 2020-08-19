<template>
    <v-container class="ma-0 pa-0" >
        <v-layout class="ma-0 pa-0">
            <v-flex xs12 lg12 >
                <v-form v-model="valid">
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            カード名義
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            <v-text-field
                                v-model="meigi"
                                :rules="meigiRules"
                                hint="カード名義"
                                required/>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            カード情報
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            <v-text-field
                                v-model="card"
                                :rules="cardRules"
                                counter
                                hint="使えるカードはVISAカードのみです"
                                required/>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            カード有効期限
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            <v-select
                                v-model="isYear"
                                :items="year"
                                menu-props="auto"
                                label="Select"
                                hide-details
                                single-line/>
                        </v-col>
                        <v-col cols="auto" class="mt-5 ml-n4">
                            年
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="isMonth"
                                :items="month"
                                menu-props="auto"
                                label="Select"
                                hide-details
                                single-line/>
                        </v-col>
                        <v-col cols="auto" class="mt-5 ml-n4">
                            月
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col>
                            セキュリティコード
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                        <v-col cols="3" lg="3">
                            <v-text-field
                                v-model="secu"
                                :rules="secuRules"
                                hint="セキュリティコードはクレジットカード裏面の末尾3桁(1部4桁)"
                                required/>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                        <v-btn
                            dark
                            style="background-color: #83B590"
                            outlined
                            rounded
                            :disabled="!valid"
                            color="blue"
                            class="mr-4 white--text mb-5"
                            width="120"
                        >
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
            mailaddress: '',
            password: '',
            card: '',
            secu:'',
            meigi:'',
            isYear:2020,
            year:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
            isMonth:1,
            month:[1,2,3,4,5,6,7,8,9,10,11,12],
            valid: true,
            cardRules:[
                v => !!v || '入力欄が空白です。',
                v => /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47]{13}|(?:2131|1800|35[0-9]{3})[0-9]{11})$/.test(v) || '存在しないカード番号です'
            ],
            secuRules:[
                v => !!v || '入力欄が空白です。',
                v => /^[0-9]+$/.test(v) || '入力できるのは半角数字のみです',
                v => (v&& (v.length==3)||(v.length==4)) || '3桁または4桁ので入力してください',
            ],
            meigiRules:[
                v => !!v || '入力欄が空白です。',
                v => /^[ぁ-んァ-ン一-龥a-zA-Z0-9・/]+$/.test(v) || '無効な記号が入力されています。',
                v => (v&& v.length<=80) || '80字以内で入力してください',
            ]
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
