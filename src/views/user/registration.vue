<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-layout class="ma-0 pa-0" wrap>
            <v-flex xs12 lg12>
                <v-row justify="center" class="ma-0 pa-0" style="background-color: #F6F6F6">
                    <v-col cols="auto">
                        <v-row justify="center" class="ma-0 pa-0">
                            <v-col cols="auto" class="mt-12 mr-4">
                                <router-link to="/">
                                    <img height="55" width="150" src="@/assets/nimochi.png"/>
                                </router-link>
                            </v-col>
                        </v-row>
                        <v-card tile width="600" class="ma-0 pa-0" outlined>
                            <v-tabs v-model="tabs" color="green">
                            <v-tab v-on:click="tab = 0" :href="`#tab-0`">ログイン</v-tab>
                            <v-tab v-on:click="tab = 1" :href="`#tab-1`">新規登録</v-tab>
                            </v-tabs>
                            <v-row class="ma-0 pa-0">
                                <Login v-if="tab == 0"/>
                                <Regist v-if="tab == 1"/>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Regist from '@/components/User/Regist'
import Login from '@/components/User/Login'
export default {
    data(){
        return{
            array: {},
            tab:1,
            tabs: 'tab-1'
        }
    },
    components:{
        Regist,
        Login,
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
<style lang="scss">
.v-application--wrap{
    background-color:#F6F6F6
}
</style>
