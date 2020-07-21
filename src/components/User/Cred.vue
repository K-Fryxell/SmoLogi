<template>
  <v-container class="ma-0 pa-0" >
    <v-layout class="ma-0 pa-0">
      <v-flex xs12 lg12 >
        <v-row class="ma-0 pa-0">
            <v-col>
                カード名義
            </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
            <v-col>
                <v-text-field  v-model="meigi"
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
                <v-text-field v-model="card"
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
            <v-col cols="12" xs="3" sm="3" md="3" lg="3">
                <v-text-field v-model="secu"
                    :rules="secuRules"
                    hint="セキュリティコードはクレジットカード裏面の末尾3桁(1部4桁)"
                    required/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
            <v-btn
            :disabled="!valid"
            color="blue"
            class="mr-4 white--text mb-5"
            width="120">
                登録
            </v-btn>
        </v-row>
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
            valid: true,
            items:[1,2,3,4,5,6,7,8,9,10,11,12],
            showPassword:false,
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
