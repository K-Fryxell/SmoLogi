<template>
    <div>
        <content class="ma-0 pa-0">
            <Header/>
            <v-container fluid class="ma-0 pa-0">
                <v-layout>
                    <v-card class="ma-0 pa-0">
                        <v-btn @click="logout">ログアウト</v-btn>
                        {{ allData }}
                        <v-tabs color="green">
                            <v-tab>Mypage</v-tab>
                            <v-tab>profile</v-tab>
                            <v-tab>salary</v-tab>
                            <v-tab-item>
                                <v-avatar color="green light5" size="120">
                                    <span class="white--text body-1">アイコン</span>
                                </v-avatar>
                            </v-tab-item>
                            <v-tab-item>
                                <!-- パートナー側プロフィール詳細変更ページ -->
                            </v-tab-item>
                            <v-tab-item>
                                <!-- パートナー側収益ページ -->
                            </v-tab-item>
                        </v-tabs>
                    </v-card>
                </v-layout>
            </v-container>
            <Footer/>
        </content>
    </div>
</template>
<script>
import firebase from 'firebase'
import Header from '../../components/Part/Header'
import Footer from '../../components/Part/Footer'
export default {
    data() {
        return {
            allData: "",
        }
    },
    components:{
        Header,
        Footer
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
        firebase.firestore().collection('comments').get().then(snapshot => {
          snapshot.forEach(doc => {
            //contentは要素
            //pushは配列データそのもの
            // this.allData.push(doc.data().content)
            this.allData = doc.data().content
          })
        })
    }
}
</script>
