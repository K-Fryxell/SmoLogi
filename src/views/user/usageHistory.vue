<template>
    <content class="ma-0 pa-0">
        <v-container class="ma-0 pa-0" fluid>
            <Uheader/>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex xs12 lg12>
                    <v-row class="ma-0 pa-0" justify="center" style="background-color: #F6F6F6">
                        <v-card class="ma-0 pa-0 mb-12" elevation="0" style="background-color: #F6F6F6">
                            <h2 class="mb-12 justify-center font-weight-light">
                                <span style="text-decoration:underline; text-underline-position: under; text-decoration-thickness: 10px">利用履歴</span>
                            </h2>
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
                                            <span class="font-weight-light">利用日:{{history.compDay}}<br/>
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
        getHistory(){
            firebase.firestore().collection("users").doc(this.user_id).collection('history').orderBy('createdAt', 'desc').get().then(async snapshot => {
                    await snapshot.forEach(doc => {
                    //contentは要素
                    //pushは配列データそのもの
                    // this.allData.push(doc.data().content)
                    this.items_ire.push({
                        compDay:doc.data().compDay,
                        username:doc.data().username,
                        part_image:doc.data().part_image
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
