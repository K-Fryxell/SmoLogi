<template>
    <div>
        <v-card>パートナーユーザログイン</v-card>
        <v-btn @click="logout">ログアウト</v-btn><br/>
        ユーザ情報
        {{part_user['email']}} {{part_user['pass']}}<br/>
        ユーザID
        {{part_user_id}}
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            part_user: {
                email: "",
                pass: ""
                // name: "",
                // sex:""
            },
            part_user_id:"",
            allData: "",
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
        firebase.auth().onAuthStateChanged((part_user) => {
            if (part_user) {
                // User logged in already or has just logged in.
                // ユーザーIDの取得
                console.log(part_user.uid);
                this.part_user_id = part_user.uid
                // ドキュメントIDをユーザIDとしているのでユーザIDを持ってきてそこからフィールド取り出し
                firebase.firestore().collection('part_users').doc(this.part_user_id).get().then( doc => {
                console.log(doc.data())
                this.part_user['email'] = doc.data().email
                this.part_user['pass'] = doc.data().password
                // zako.com
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
