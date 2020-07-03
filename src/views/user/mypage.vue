<template>
    <div>
        <v-card>ユーザーログイン</v-card>
        <v-btn @click="logout">ログアウト</v-btn>
        {{allData}}
        {{user}}
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            allData: "",
            user: {
                id: "",
                email: "",
                name: "",
                sex: ""
            }
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
        firebase.firestore().collection('users').doc('001').get().then( doc => {
            console.log(doc.data())
            this.user.email = doc.data().email
            this.user.id = doc.data().id
            this.user.name = doc.data().name
            this.user.sex = doc.data().sex
        })
        
    }
}
</script>
