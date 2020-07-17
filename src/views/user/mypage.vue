<template>
    <v-container>
        <v-row justify="center" class="ma-0 pa-0">   
        ユーザ情報
        {{user}}<br/>
        ユーザID
        {{user_id}}
        <br/>
          <v-card-title class="mt-12 display-3">ようこそ！<br/>○○○さん</v-card-title>
        </v-row>
        <v-row justify="center">
            <v-btn class="mt-12" rounded color="primary" large>お手伝いを頼む</v-btn>
        </v-row>
        <v-row justify="center"> 
            <v-card class="mt-12" min-width="700" outlined>
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
                            <span class="pr-4">{{item.name}}{{message1}}</span>{{item.weight}}{{message2}}
                    </v-card-text>
                </v-card>
            </v-card>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn class="mt-12">登録情報の変更</v-btn>
        </v-row>
    </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            message1:"さん",
            message2:"kg",
            user: {
                email: "",
                pass: "",
                // name: "",
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
    computed: {
    },
    methods:{
        logout:function(){
            firebase.auth().signOut()
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
        
        
    }
}
</script>
