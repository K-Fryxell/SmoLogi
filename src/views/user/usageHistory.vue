<template>
    <content class="ma-0 pa-0">
        <v-navigation-drawer fixed height style="width:100%" permanent>
			<Uheader/>
		</v-navigation-drawer>
        <v-container class="ma-0 pa-0" style="min-height:300px;" fluid>
            <v-layout class="ma-0 pa-0" style="min-height:300px;" wrap>
                <v-flex xs12 lg12 style="min-height:300px;">
                    <v-row class="ma-0 mt-12 py-8 pa-0" justify="center" style="background-color: #F6F6F6 min-height:300px;">
                        <v-card class="ma-0 pa-0 mb-12" elevation="0" style="background-color: #F6F6F6 min-height:300px;">
                            <h2 class="mb-12 justify-center font-weight-light">
                                <span style="text-decoration:underline; text-underline-position: under; text-decoration-thickness: 10px">
                                    利用履歴
                                </span>
                            </h2>
                            <v-row class="ma-0 pa-0" justify="end" align="end">
                                <v-col class="ma-0 pa-0" cols="2">
                                    <v-btn v-if="history != ''" class="ma-0 pa-0" text @click="delete_history=true">
                                        利用履歴の削除
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-col
                                cols="auto"
                                lg="auto"
                                v-for="(history,index) in history"
                                :key="index"
                                :index="index">
                                <v-card class="mx-6 pa-0" outlined max-width="1000">
                                    <v-row class="ma-0 pa-0">
                                        <!-- 配達者画像 -->
                                        <v-col cols="12" lg="5">
                                            <v-img
                                                class="my-3 pa-0"
                                                :src="history.part_image"
                                                contain
                                                height="150"/>
                                        </v-col>
                                        <!-- 名前、利用日、評価 -->
                                        <v-col
                                            cols="12" lg="5"
                                            v-resize="onResize"
                                            :class="size"
                                            class="pt-5"
                                        >
                                            <span class="font-weight-light">利用日:{{history.compDay}}：{{history.roomCompTime}}<br/>
                                            名前:{{history.username}}<br/>
                                            評価:</span>
                                            <v-btn class="ma-2" @click="clickEvaluation(0)" icon color="blue lighten-2">
                                                <v-icon>mdi-thumb-up</v-icon>
                                            </v-btn>
                                            <v-btn class="ma-2" @click="clickEvaluation(1)" icon color="red lighten-2">
                                                <v-icon>mdi-thumb-down</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-card>
                    </v-row>
                    <v-dialog persistent v-model="delete_history" width="500">
                        <v-card>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-card-title>
                                        本当に履歴を削除しますか
                                    </v-card-title>
                                    <v-row justify="center" class="pa-0 ma-0">
                                        <v-col cols="auto">
                                            <v-btn width="50" @click="delete_history=false">
                                                いいえ
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="auto">
                                            <!-- ここはfirebase処理 -->
                                            <!-- 「はい」ボタン押下時、user側でuser_Deliveryモーダルをひらかせたい -->
                                            <v-btn width="50" @click="deleteHistory()">
                                                はい
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-dialog>
                </v-flex>
            </v-layout>
            <Ufooter/>
        </v-container>
    </content>
</template>
<script>
import Uheader  from '@/components/User/Header'
import Ufooter from '@/components/User/Footer'
import firebase from 'firebase'
export default {
    data(){
        return {
            //評価
            evaluation: 2,
            //画像
            x:0,
            y:0,
            size:"headline",
            //モーダル
            delete_history:false,
            history: [],
            items_ire: []
        }
    },
    computed: {
        user_id:{
            get(){
                return this.$store.getters.user_id
            },
            set(value){
                return this.$store.commit('set_user_id',value)
            }
        },
    },
    mounted(){
        this.getHistory()
        window.addEventListener('resize', this.onResize)
    },
    beforeDestory(){
        window.removeEventListener('resize',this.onResize)
    },
    methods:{
        deleteHistory(){
            this.$store.commit('deleteHistory')
        },
        getHistory(){
            firebase.firestore().collection("users").doc(this.user_id).collection('history').orderBy('createdAt', 'desc').get().then(async snapshot => {
                    await snapshot.forEach(doc => {
                    //contentは要素
                    //pushは配列データそのもの
                    // this.allData.push(doc.data().content)
                    this.items_ire.push({
                        roomCompTime:doc.data().roomCompTime,
                        compDay:doc.data().compDay,
                        username:doc.data().username,
                        part_image:doc.data().part_image
                    })
                })
                this.history = this.items_ire
                this.items_ire = []
                if(this.history == ''){
                    this.$router.push('/user_mypage')
                }
            })
        },
        onResize(){
            this.x = window.innerWidth;
            this.y = window.innerHeight;
        },
        clickEvaluation(a){
            this.evaluation = a
            }
    },
    watch:{
        x:function(){
            if(this.x<=600)
            {
                this.size= 'display-6'
            }else
            {
                this.size='headline'
            }
        }
    },
    components:{
        Ufooter,
        Uheader,
    }
}
</script>

<style lang="scss">
h2{
    text-align: center;
}
</style>
