<template>
    <v-card height="100%" color="grey--text lighten-1" style="width:1440px;">
        <v-row justify="center" class="my-12">
            <v-card-title class="display-1">
                クレカ登録
            </v-card-title>
        </v-row>
        <v-form ref="form" v-model="caf">
            <v-row justify="center">
                <v-col cols="2">
                    <v-row justify="end">
                        <v-col cols="auto">
                            <h3 class="pt-2">カード有効期限</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="auto" style="width:110px;">
                    <v-select
                        v-model="isYear"
                        :items="year"
                        menu-props="auto"
                        label="Select"
                        hide-details
                        single-line
                    ></v-select>
                </v-col>
                <v-col cols="auto" class="mt-5 ml-n4">
                    年
                </v-col>
                <v-col cols="auto" style="width:90px;">
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
            <v-row justify="center" class="mt-5">
                <v-col cols="3">
                    <v-row justify="space-between" style="sidth:660px;">
                        <v-col cols="auto">
                                <v-btn
                                    to="/"
                                    style="color:#616161;"
                                    elevation="0"
                                    tile
                                    outlined>
                                    トップへ
                            </v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                                to="/part_mypage"
                                style="color:#616161;"
                                :disabled="!caf"
                                elevation="0"
                                tile
                                @click="regist_card"
                                outlined>
                                確定
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-form>
    </v-card>
</template>
<script>
export default {
    data(){
        return{
            caf:true,
            card: '',
            secu:'',
            meigi:'',
            array: {},
            isYear:2020,
            year:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
            isMonth:1,
            month:[1,2,3,4,5,6,7,8,9,10,11,12],
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
    methods:{
        validate () {
            this.$refs.form.validate()
        },
        regist_card() {
            this.array['cardexpire'] = this.isYear
            this.array['cardnum'] = this.card
            this.array['securitynum'] = this.secu
            this.array['name'] = this.meigi
            return this.$store.commit('regist_card', this.array)
        }
    },
    // created:function() {
    //     if(this.$store.state.isLoggin) {
    //     this.$store.commit('check')
    //     }
    // }
}
</script>