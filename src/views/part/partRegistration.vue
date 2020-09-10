<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-layout class="ma-0 pa-0" column>
            <v-row class="ma-0 pa-0" justify="center">
                <v-col class="mt-12 ma-0 pa-0" cols="auto">
                    <router-link to="/part_top">
                        <img height="55" width="150" src="@/assets/nimochi.png"/>
                    </router-link>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center">
                <v-flex xs12 lg5>
                    <v-card class="mb-5 ma-3 pa-0" tile outlined>
                        <v-tabs v-model="tabs" color="green">
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
    </v-container>
</template>
<script>
import partRegist from '@/components/Part/Regist/PartRegist'
import partLogin from '@/components/Part/Regist/PartLogin'
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
