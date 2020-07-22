<template>
    <div>
        <v-row justify="center">
        <v-card tile width="600" height="500" class="mt-12">
        <v-tabs>
            <v-tab v-on:click="tab = 0">パスワード変更</v-tab>
            <v-tab v-on:click="tab = 1">クレジットカード情報変更</v-tab>
        </v-tabs>
            <v-row>
                <Pass v-if="tab == 0"/>
                <Cred v-if="tab == 1"/>
            </v-row>
        </v-card>
        </v-row>
    </div>
</template>

<script>
import Pass from '../../components/User/Pass.vue';
import Cred from '../../components/User/Cred.vue';
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
    methods:{}
}
</script>
