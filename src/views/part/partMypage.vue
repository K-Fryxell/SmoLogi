<template>
    <div>
        <v-card>パートナーユーザログイン</v-card>
        <v-btn @click="logout">ログアウト</v-btn>
        {{ allData }}
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            allData: [],
        }
    },
    computed: {
        user() {
        return this.$store.getters.user;
        },
        userStatus() {
        // ログインするとtrue
        return this.$store.getters.isSignedIn;
        }
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
        //     this.allData.push(doc.data())
        //   })
        // })
    }
}
</script>
