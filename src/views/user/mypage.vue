<template>
<v-container class="ma-0 pa-0" fluid>
    <v-layout class="ma-0 pa-0" wrap>
        <v-flex xs12 lg12>
            <v-row justify="center" class="ma-0 pa-0">
                <v-btn
                        class="mb-5"
                        width="120"
                        @click="logout">
                        ログアウト
                    </v-btn>
                <v-card class="ma-0 pa-0" elevation="0">
                    <v-card-title class="mt-12 justify-center" v-resize="onResize" :class="size">ようこそ！</v-card-title>
                        <v-row justify="center" class="ma-0 pa-0">

                            <v-card-title class="mt-12 display-3" v-resize="onResize" :class="size">{{user_fname}}</v-card-title>
                            <v-card-title class="mt-12 display-1">さん</v-card-title>
                        </v-row>
                        <v-row justify="center" class="ma-0 pa-0">
                            <router-link to="user_transport">
                            <v-btn class="mt-12" rounded color="primary" large>お手伝いを頼む</v-btn>
                            </router-link>
                        </v-row>
                        <v-row justify="center" class="ma-0 pa-0">
                            <v-col cols="12" lg="8">
                                <v-card class="mt-12" width="1000" outlined>
                                    <router-link to="/user_history" elevation="0">
                                    <v-banner
                                        class="justify-center title font-weight-light"
                                        sticky>
                                        利用履歴
                                    </v-banner>
                                    </router-link>
                                    <v-card
                                        elevation="0"
                                        class="overflow-y-auto"
                                        max-height="400">
                                        <v-card-text v-for="item in items"
                                            :key="item.id"
                                            class="mb-4">
                                            <span class="pr-4">{{item.name}}{{message1}}</span>{{item.weight}}{{message2}}
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-col>
                        </v-row>
                </v-card>
            </v-row>
            <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                <router-link to="user_change">
                    <v-btn
                        class="mb-5"
                        width="120">
                        登録情報の変更
                    </v-btn>
                </router-link>
            </v-row>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            message1:"さん",
            message2:"kg",
            // username:"まるい",
            x:0,
            y:0,
            size:"display-3",
            user: {
                email: "",
                pass: "",
                //name: ""
                // sex:""
            },
            user_id:"",
            items: [
                {
                    name:'たろう',
                    weight:'2',
                },
                {
                    name:'ねむい',
                    weight:'2'
                },
                {
                    name:'ねむい',
                    weight:'2'
                },
                {
                    name:'ねむい',
                    weight:'2'
                },
                {
                    name:'ねむい',
                    weight:'2'
                },
                {
                    name:'ねむい',
                    weight:'2'
                },
                {
                    name:'ねむい',
                    weight:'2'
                }
            ]
        }
    },
    computed:{
        user_fname(){
            return this.$store.getters.user_fname
        }
    },
    mounted(){
        window.addEventListener('resize', this.onResize)
    },
    beforeDestory(){
        window.removeEventListener('resize',this.onResize)
    },
    methods:{
        logout:function(){
            firebase.auth().signOut()
            alert('ログアウト')
        },
        onResize(){
            this.x = window.innerWidth;
            this.y = window.innerHeight;
        },
        onAuth : function(){
            this.$store.commit('onAuthStateChanged')
        }
    },
    watch:{
        x:function(){
            if(this.x<=600)
            {
                this.size= 'display-1'
            }else
            {
                this.size='display-3'
            }
        },
    },
    created:function(){
        this.onAuth()
    }
}
</script>
