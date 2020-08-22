<template>
    <v-container class="ma-0 pa-0" fluid>
        <Header/>
        <v-layout class="ma-0 pa-0" column>

              <v-row class="ma-0 pa-0" justify="center">
                    <v-flex  xs12 lg8>
                        <v-card class="mt-12 mb-5 ma-3 pa-0" tile outlined>
                            <v-tabs v-model="tabs">
                                <v-tab v-on:click="tab = 0" :href="`#tab-0`">ログイン</v-tab>
                                <v-tab v-on:click="tab = 1" :href="`#tab-1`">新規登録</v-tab>
                            </v-tabs>
                            <v-row class="ma-0 pa-0">
                                <partLogin v-if="tab == 0"/>
                                <partRegist v-if="tab == 1"/>
                            </v-row>
                        </v-card>
                    </v-flex>
              </v-row>
        </v-layout>
        <Footer/>
    </v-container>
</template>
<script>
import partRegist from '@/components/Part/Regist/PartRegist'
import partLogin from '@/components/Part/Regist/PartLogin'
import Header from '@/components/Part/PartHeader'
import Footer from '@/components/Part/PartFooter'
export default {
    data(){
        return{
            array: {},
            tabs: 'tab-1',
            tab:1
        }
    },
    components:{
        partRegist,
        partLogin,
        Header,
        Footer
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
