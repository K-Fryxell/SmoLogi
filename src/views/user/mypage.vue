<template>
    <content class="ma-0 pa-0">
        <!-- pcヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-sm-and-down" fixed height style="width:100%;" permanent>
			<Uheader/>
		</v-navigation-drawer>
		<!-- 携帯ヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-md-and-up" fixed height style="width:100%; height:70px;" permanent>
			<Uheader/>
		</v-navigation-drawer>
        <v-container class="ma-0 mt-12 py-8 pa-0" fluid>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex xs12 lg12>
                    <v-row class="ma-0 pa-0" style="background-color: #F6F6F6">
                        <v-col cols="12" lg="12">
                            <v-row justify="center" class="ma-0 pa-0">
                                <v-col cols="12" lg="12">
                                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #F6F6F6">
                                        <p class=" justify-center font-weight-light" v-resize="onResize" :class="size">ようこそ</p>
                                        <v-row justify="center" class="ma-0 pa-0">
                                            <p class="mt-12 display-3" v-resize="onResize" :class="size">
                                                {{user_fname}}
                                                <span class="display-1">さん</span>
                                            </p>
                                        </v-row>
                                        <v-row justify="center" class="ma-0 pa-0" v-if='request == 0'>
                                            <v-btn class="mt-12" dark rounded style="background-color: #83B590" large to="/user_transport" height="60" width="250"><span style="font-size:25px">お手伝いを頼む</span></v-btn>
                                        </v-row>
                                        <v-row justify="center" class="ma-0 pa-0" v-if='request == 1'>
                                            <v-btn class="mt-12" dark rounded style="background-color: #83B590" large to="/waiting" height="60" width="250"><span style="font-size:25px">依頼中のお手伝い</span></v-btn>
                                        </v-row>
                                        <v-row justify="center" class="ma-0 pa-0" v-if='request == 2'>
                                            <v-btn class="mt-12" dark rounded style="background-color: #83B590" large to="/contact" height="60" width="250"><span style="font-size:25px">依頼中のお手伝い</span></v-btn>
                                        </v-row>
                                        <v-row justify="center" class="ma-0 pa-0" v-if='request == 3'>
                                            <v-btn class="mt-12" dark rounded style="background-color: #83B590" large to="/transport" height="60" width="250"><span style="font-size:25px">依頼中のお手伝い</span></v-btn>
                                        </v-row>
                                        <v-row justify="center" class="ma-0 pa-0">
                                            <v-col cols="12" lg="8">
                                                <v-card class="mt-12" width="1000" outlined>
                                                    <v-banner
                                                        class="justify-center title font-weight-light"
                                                        sticky>
                                                            利用履歴
                                                    </v-banner>
                                                    <v-card
                                                        elevation="0"
                                                        class="overflow-y-auto"
                                                        max-height="400">
                                                        <v-card-text
                                                            v-for="(history,index) in history"
                                                            :key="index"
                                                            :index="index">
                                                            <span class="display-6">利用日:{{history.compDay}} 名前:{{history.username}}</span>
                                                            <v-divider class="mt-5"></v-divider>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row justify="center" class="ma-0 pa-0">
                                <v-card class="ma-0 pa-0" elevation="0" style="background-color: #F6F6F6">
                                    <v-row justify="end" align="end" class="ma-0 pa-0 mt-2">
                                        <v-col>
                                            <v-btn
                                                outlined
                                                large
                                                style="color: #83B590"
                                                to="user_history"
                                                class="mb-5"
                                                width="150"
                                            >
                                            <span style="font-size:18px">
                                                履歴詳細
                                            </span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
            <ufooter/>
        </v-container>
    </content>
</template>
<script>
import Uheader  from '@/components/User/Header'
import Ufooter from '@/components/User/Footer'
import firebase from 'firebase'
export default {
    data() {
        return {
            //ユーザーの名前
            x:0,
            y:0,
            size:"display-2",
            history: [],
            items_ire: []
        }
    },
    computed:{
        user_id:{
            get(){
                return this.$store.getters.user_id
            },
            set(value){
                return this.$store.commit('set_user_id',value)
            }
        },
        user_fname(){
            return this.$store.getters.user_fname
        },
        request(){
            return this.$store.getters.request
        }
    },
    mounted(){
        this.getHistory()
        firebase.firestore().collection("users").doc(this.user_id).collection('history').onSnapshot(() => {
            this.getHistory()
        })
        window.addEventListener('resize', this.onResize)
    },
    beforeDestory(){
        window.removeEventListener('resize',this.onResize)
    },
    methods:{
        getHistory(){
            firebase.firestore().collection("users").doc(this.user_id).collection('history').orderBy('createdAt', 'desc').get().then(async snapshot => {
                    await snapshot.forEach(doc => {
                    //contentは要素
                    //pushは配列データそのもの
                    // this.allData.push(doc.data().content)
                    this.items_ire.push({
                        compDay:doc.data().compDay,
                        username:doc.data().username
                    })
                })
                this.history = this.items_ire
                this.items_ire = []
            })
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
            if(this.x<=600) {
                this.size= 'display-1'
            }
            else {
                this.size='display-2'
            }
        }
    },
    created:function(){
        this.onAuth()
    },
    components: {
        Ufooter,
        Uheader,
    },
}
</script>
<style lang="scss">
p{
    text-align: center;
}
</style>
