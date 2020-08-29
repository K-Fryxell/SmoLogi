<template>
    <content class="ma-0 pa-0">
        <Header/>
        <v-container fluid class="ma-0 pa-0">
            <v-layout column>
                <v-flex lg12 xs12>
                    <v-row class="ma-0 mt-6 pa-0" justify="center">
                        <v-col cols="12" lg="8">
                            <v-card outlined class="ma-0 pa-0">
                                <v-tabs color="green">
                                    <v-row class="ma-0 pa-0" justify="start">
                                        <v-tab>Mypage</v-tab>
                                        <v-tab>Profile</v-tab>
                                        <v-tab>Salary</v-tab>
                                    </v-row>
                                    <!-- パートナー側マイページ -->
                                    <v-tab-item class="pt-6 pb-10">
                                        <v-row class="ma-0 pa-0">
                                            <v-col lg="4" cols="6" class="ml-auto">
                                                <v-select
                                                v-model="selectCar"
                                                :items="cars"
                                                label="配達車種"
                                                color="green"
                                                outlined
                                                dense
                                                ></v-select>
                                            </v-col>
                                        </v-row>
                                        <v-row class="ma-0 pa-0" justify="center">
                                            <v-col lg="12" cols="12">
                                                <v-row class="ma-0 pa-0" justify="center">
                                                    <v-avatar size="200">
                                                        <!-- <img v-if="this.$store.state.img!='no_image' && !uploadImageUrl"
                                                            :src="this.$store.state.img"
                                                            alt="アイコン"
                                                            style="border-radius: 8em;
                                                            width:200px;
                                                            height:200px;"
                                                        >
                                                        <img v-if="!uploadImageUrl && this.$store.state.img=='no_image'"
                                                            src="#"
                                                            alt="アイコン"
                                                            style="border-radius: 8em;
                                                            width:200px;
                                                            height:200px;"
                                                        >  -->
                                                        <img
                                                            :src="part_image"
                                                            alt="アイコン"
                                                            style="border-radius: 8em;
                                                            width:200px;
                                                            height:200px;"
                                                        >
                                                    </v-avatar>
                                                </v-row>
                                            </v-col>
                                            <v-col lg="12" cols="12">
                                                <v-row class="ma-0 pa-0" justify="center">
                                                    <v-card-text class="text-center" v-resize='onResize' :class='size_title'>{{part_fname}}さん</v-card-text>
                                                    <v-card-text class="text-center" v-resize='onResize' :class='size_subtitle'>{{message}}</v-card-text>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                        <v-row class="ma-0 pa-0" justify="center" v-if="delivery == 0">
                                            <v-btn class="white--text pa-6" color="green" to="/part_request"><span v-resize='onResize' :class='size_headline'>配達依頼確認</span></v-btn>
                                        </v-row>
                                        <v-row class="ma-0 pa-0" justify="center" v-if="delivery == 1">
                                            <v-btn class="white--text pa-6" color="red" to="/contact"><span v-resize='onResize' :class='size_headline'>配達中の依頼</span></v-btn>
                                        </v-row>
                                        <v-row class="ma-0 pa-0" justify="center" v-if="delivery == 2">
                                            <v-btn class="white--text pa-6" color="red" to="/transport"><span v-resize='onResize' :class='size_headline'>配達中の依頼</span></v-btn>
                                        </v-row>

                                    </v-tab-item>


                                    <!-- パートナー側プロフィール詳細変更ページ -->
                                    <v-tab-item>
                                        <partChangeProfile/>
                                    </v-tab-item>

                                    <!-- パートナー側収益ページ -->
                                    <v-tab-item>
                                        <chart :height="size_height" :width="size_width"/>
                                    </v-tab-item>
                                </v-tabs>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
            <v-layout column>
                <v-row class="ma-0 mb-6 pa-0" justify="center">
                    <v-col cols="12" lg="8">
                        <v-card class="mt-12" outlined>
                            <v-banner
                                class="justify-center title font-weight-light"
                                sticky
                                v-resize='onResize' :class='size_headline'>
                                配達履歴
                            </v-banner>
                            <v-card
                                elevation="0"
                                class="overflow-y-auto"
                                max-height="400">
                                <v-card-text v-for="item in items"
                                    :key="item.id"
                                    class="mb-4"
                                    v-resize='onResize' :class='size_title'>
                                        <span class="pr-4">{{item.month}}月{{item.date}}日/{{item.time}}</span><span class="pr-4">{{item.name}}さん</span>{{item.weight}}kg
                                </v-card-text>
                            </v-card>
                        </v-card>
                        <v-row class="ma-0 pa-0" justify="end" align="end">
                            <v-col class="ma-0 pa-0" cols="2">
                                <v-btn class="ma-0 pa-0" text @click="delete_history=true">
                                    配達履歴の削除
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
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
                                        <v-btn width="50">
                                            はい
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
        <Footer/>
    </content>
</template>
<script>
import firebase from 'firebase'
import Header from '@/components/Part/PartHeader'
import Footer from '@/components/Part/PartFooter'
import partChangeProfile from '@/components/Part/PartChangeProfile'
import chart from '@/components/Part/Top/PartChart'
export default {
    data() {
        return {
            //モーダル
            delete_history: false,
            selectCar: '',
            message:"最近は週に３回ほど働けていますね。その調子で頑張っていきましょう！！",
            items: [
                {
                    month:'7',
                    date:'19',
                    time:'13:07',
                    name:'ユーザ',
                    weight:'2',
                },
                {
                    month:'7',
                    date:'19',
                    time:'13:06',
                    name:'ユーザ',
                    weight:'2'
                },
                {
                    month:'7',
                    date:'19',
                    time:'13:05',
                    name:'ユーザ',
                    weight:'2'
                },
                {
                    month:'7',
                    date:'19',
                    time:'13:04',
                    name:'ユーザ',
                    weight:'2'
                },
                {
                    month:'7',
                    date:'19',
                    time:'13:03',
                    name:'ユーザ',
                    weight:'2'
                },
                {
                    month:'7',
                    date:'19',
                    time:'13:02',
                    name:'ユーザ',
                    weight:'2'
                },
                {
                    month:'7',
                    date:'19',
                    time:'13:01',
                    name:'ユーザ',
                    weight:'2'
                }
            ],
            x:window.innerWidth,
            y:window.innerHeight ,
            size_height: 350,
            size_width: 700,
            size_display:'display-1',
            size_headline:'headline',
            size_title:'title',
            size_subtitle:'subtitle-1',
            size_body:'body-1',
        }
    },
    components:{
        Header,
        Footer,
        partChangeProfile,
        chart
    },
    computed:{
        part_fname(){
            return this.$store.getters.part_fname
        },
        cars(){
            return this.$store.getters.cars
        },
        part_image(){
            return this.$store.getters.part_image
        },
        delivery(){
            return this.$store.getters.delivery
        }
    },
    // created:function(){
    //     // this.$store.onAuth()
    //     firebase.firestore().collection('comments').get().then(snapshot => {
    //       snapshot.forEach(doc => {
    //         //contentは要素
    //         //pushは配列データそのもの
    //         // this.allData.push(doc.data().content)
    //         // this.allData = doc.data().content
    //       })
    //     })
    // }
    mounted () {
        this.onResize
    },
    methods: {
        logout:function(){
            firebase.auth().signOut()
        },
        onResize () {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        onAuth(){
            this.$store.commit('part_onAuthStateChanged')
            // this.$store.commit('')
        }
    },
    watch:{
        cars:function() {
            this.selectCar = this.cars[0]
        },
        x:function(){
            if(this.x<600)
            {
                this.size_height = 4,
                this.size_width = 5,
                this.size_display = 'headline',
                this.size_headline = 'title',
                this.size_title = 'subtitle-1',
                this.size_subtitle = 'body-2',
                this.size_body = 'body-1'
            }
            else
            {
                this.size_height = 350,
                this.size_width = 700,
                this.size_display = 'display-1',
                this.size_headline = 'headline',
                this.size_title = 'title',
                this.size_subtitle = 'subtitle-1',
                this.size_body = 'body-1'
            }
        }
    },
    created:function(){
        this.onAuth()
    }
}
</script>
