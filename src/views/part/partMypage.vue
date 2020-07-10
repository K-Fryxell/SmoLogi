<template>
    <div>
        <content class="ma-0 pa-0">
            <Header/>
            <v-container fluid class="ma-0 pa-0 pt-3">
                <v-layout>
                    <v-flex lg12 xs12>
                        <v-card elevation="0" class="ma-0 pa-0">
                            <v-row justify="center">
                                <v-col lg="8" cols="11">
                                    <v-btn @click="logout">ログアウト</v-btn>
                                    {{ allData }}
                                    <!-- <v-flex lg8> -->
                                    <v-tabs color="green">
                                        <v-row dense justify="start">
                                            <v-col lg="2" cols="4">
                                                <v-tab>Mypage</v-tab>
                                            </v-col>
                                            <v-col lg="2" cols="4">
                                                <v-tab>profile</v-tab>
                                            </v-col>
                                            <v-col lg="2" cols="4">
                                                <v-tab>salary</v-tab>
                                            </v-col>
                                        </v-row>

                                            <!-- パートナー側マイページ -->
                                        <v-tab-item class="red pt-6 pb-10">
                                            <v-row justify="center">
                                                <v-col lg="2" cols="12">
                                                    <v-row justify="center">
                                                        <v-avatar color="green light5" size="120">
                                                            <span class="white--text body-1">アイコン</span>
                                                        </v-avatar>
                                                    </v-row>
                                                </v-col>
                                                <v-col lg="5" cols="12">
                                                    <v-row justify="center">
                                                        <v-card-text class="text-center">ユーザ名表示</v-card-text>
                                                        <v-card-text class="text-center">運営からの軽いひとこと</v-card-text>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-btn class="white--text" x-large="12" color="green">配達依頼確認</v-btn>
                                            </v-row>
                                        </v-tab-item>
                                        

                                        <!-- パートナー側プロフィール詳細変更ページ -->
                                        <v-tab-item class="red">
                                            プロフィール変更ページuaiushapisuhdapsiudhpaidhsapiduhsapiduhapdiuhsapi
                                        </v-tab-item>

                                        <!-- パートナー側収益ページ -->
                                        <v-tab-item class="red">
                                            収益
                                            可変長さいず
                                        </v-tab-item>
                                    </v-tabs>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex lg12 xs12>
                        <v-card>
                            <v-row justify="center">
                                <v-col lg="8" cols="11">
                                    配達履歴表示
                                    ・あいそあそいあｊ
                                    ・いうあしうはいｘさｈ
                                    ・おいあそｘじゃそいじゃおい
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-flex>
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
