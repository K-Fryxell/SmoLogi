<template>
    <v-container>
        <v-row justify="center" class="ma-0 pa-0"> 
            
        ユーザ情報
        {{user}}<br>
        ユーザID
        {{user_id}}
        <br>
          <v-card-title class="mt-12 display-3">ようこそ！<br/>○○○さん</v-card-title>
        </v-row>
        <v-row justify="center">
            <v-btn class="mt-12" rounded color="primary" large>お手伝いを頼む</v-btn>
        </v-row>
        <v-row justify="center"> 
            <v-card
                    class="overflow-y-auto mt-12"
                    max-height="400">
                <v-banner
                    class="justify-center title font-weight-light"
                    sticky>
                    利用履歴
                </v-banner>

                <v-card-text>
                    <div
                        v-for="n in 12"
                        :key="n"
                        class="mb-4"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
                    </div>
                </v-card-text>
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
            user: {
                email: "",
                pass: "",
                // name: "",
                // sex:""
            },
            user_id:""
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
