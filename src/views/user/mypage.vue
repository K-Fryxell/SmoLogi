<template>
<v-container class="ma-0 pa-0" fluid>
    <v-layout class="ma-0 pa-0" wrap>
        <v-flex xs12 lg12>
            <v-row justify="center" class="ma-0 pa-0">
                <v-card class="ma-0 pa-0" elevation="0">
                    <v-card-title class="mt-12 justify-center" v-resize="onResize" :class="size">ようこそ！</v-card-title>
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-card-title class="mt-12 display-3" v-resize="onResize" :class="size">{{username}}</v-card-title>
                            <v-card-title class="mt-12 display-1">さん</v-card-title>
                    </v-row>
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-btn class="mt-12" rounded color="primary" large to="/user_transport">お手伝いを頼む</v-btn>
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
                                    <v-card-text v-for="item in items"
                                        :key="item.id"
                                        class="mb-4">
                                        <span class="pr-4">名前:{{item.name}}</span><br>利用日:{{item.day}}<br>
                                    </v-card-text>
                                </v-card>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
            <v-row justify="center" class="ma-0 pa-0">
                <v-card class="ma-0 pa-0" elevation="0">
                    <v-row justify="center" align="center" class="ma-0 pa-0 mt-2">
                        <v-col>
                            <v-btn
                                to="user_change"
                                class="mb-5 mt-2"
                                width="120">
                                    登録情報の変更
                            </v-btn>
                        </v-col>
                        <v-row justify="end" align="end" class="ma-0 pa-0 mt-2">
                            <v-col>
                                <v-btn
                                    to="user_history"
                                    class="mb-5 "
                                    width="120">
                                        利用履歴
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-row>
                </v-card>
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
            //ユーザーの名前
            username:"まるい",
            x:0,
            y:0,
            size:"display-3",
            items: [
                    {
                        name:'たろう',
                        day:'2020年3月27日',

                    },
                    {
                        name:'ねむい',
                        day:'2020年3月27日',
                    },
                    {
                        name:'ねむい',
                        day:'2020年3月27日',
                    },
                    {
                        name:'ねむい',
                        day:'2020年3月27日',
                    },
                    {
                        name:'ねむい',
                        day:'2020年3月27日',
                    },
                    {
                        name:'ねむい',
                        day:'2020年3月27日',
                    },
                    {
                        name:'ねむい',
                        day:'2020年3月27日',
                    }
                ]
            }
        },
            computed: {
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
            },
            onResize(){
                this.x = window.innerWidth;
                this.y = window.innerHeight;
            },
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

        created:function(){
        // this.$store.onAuth()
        // firebase.firestore().collection('comments').get().then(snapshot => {
        //   snapshot.forEach(doc => {
        //     //contentは要素
        //     //pushは配列データそのもの
        //     // this.allData.push(doc.data().content)
        //     this.allData = doc().data().content
        //   })
        // })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                // ユーザーIDの取得
                console.log(user.uid);
                this.user_id = user.uid
                // ドキュメントIDをユーザIDとしているのでユーザIDを持ってきてそこからフィールド取り出し
                firebase.firestore().collection('users').doc(this.user_id).get().then( doc => {
                console.log(doc.data())
                this.user.email = doc.data().email
                this.user.pass = doc.data().password
                // this.user.name = doc.data().fname
                // this.user.sex = doc.data().sex
            })
            } else {
                // User not logged in or has just logged out.
            }
        })
    },

    },
}
</script>
