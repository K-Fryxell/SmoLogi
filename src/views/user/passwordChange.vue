<template>
    <content class="ma-0 pa-0">
        <v-container class="ma-0 pa-0" fluid>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex xs12 lg12>
                    <v-row class="ma-0 pa-0" justify="center" style="background-color: #F6F6F6">
                        <v-col cols="auto">
                            <v-row class="ma-0 pa-0" justify="center">
                                <v-col cols="auto" class="mt-12 mr-4">
                                    <img height="55" width="150" src="../../assets/nimochi.png"/>
                                </v-col>
                            </v-row>
                            <v-card tile width="600" class="ma-0 pa-0" outlined>
                                <v-tabs color="green">
                                    <v-tab v-on:click="tab = 0">パスワード変更</v-tab>
                                    <v-tab v-on:click="tab = 1" :center-active="true">クレジットカード変更</v-tab>
                                </v-tabs>
                                <v-row class="ma-0 pa-0">
                                    <Pass v-if="tab === 0"/>
                                    <Cred v-else-if="tab === 1"/>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
    </content>
</template>
<script>
import Pass from '@/components/User/Password'
import Cred from '@/components/User/Cred'
export default {
    data (){
        return{
            tab:0,
        }
    },
    components:{
        Pass,
        Cred
    },
}
</script>
<style lang="scss">
img{
    text-align: center;
}
.v-application--wrap{
    background-color:#F6F6F6
}
</style>
