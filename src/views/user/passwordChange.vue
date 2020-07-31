<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-layout class="ma-0 pa-0" wrap>
            <v-flex xs12 lg12>
                <v-row justify="center" class="mt-12 pa-0">
                    <v-card tile width="600" class="mt-12 mx-2 mb-12" outlined>
                        <v-tabs>
                            <v-tab v-on:click="tab = 0">パスワード変更</v-tab>
                            <v-tab v-on:click="tab = 1" :center-active="true">クレジットカード情報変更</v-tab>
                        </v-tabs>
                        <v-row class="ma-0 pa-0">
                            <Pass v-if="tab === 0"/>
                            <Cred v-else-if="tab === 1"/>
                        </v-row>
                    </v-card>
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
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
