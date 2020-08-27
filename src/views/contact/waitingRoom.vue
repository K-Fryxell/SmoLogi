<template>
    <content>
        <v-overlay opacity="0.1" :value="overlay">
            <v-row class="ma-0 pa-0" justify="center">
                <v-col class="ma-0 pa-0">
                    <v-card-title class="ma-0 mb-12 pa-0 text-center justify-center headline" style="color:black;">
                        ただいま配達者を探しています<br>
                        暫くお待ちください
                    </v-card-title>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center">
                <v-progress-circular
                    :size="100"
                    :width="7"
                    indeterminate
                    color="green"
                ></v-progress-circular>
            </v-row>
            <v-row class="ma-0 mt-12 pa-0" justify="center">
                <v-btn color="red" @click="user_refusul=true">
                    拒否する
                </v-btn>
            </v-row>
            <!-- 拒否するボタン押下時モーダル -->
            <v-dialog persistent v-model="user_refusul" width="500">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                本当に配達を拒否しますか？
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" @click="user_refusul=false">
                                        いいえ
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <!-- ここはfirebase処理 -->
                                    <!-- 「はい」ボタン押下時、user側でuser_Deliveryモーダルをひらかせたい -->
                                    <v-btn width="50" @click="refusal()">
                                        はい
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-overlay>
    </content>
</template>
<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            overlay: true,
        user_refusul:false
        }
    },
    methods: {
        refusal(){
            this.$store.commit('deleteRoomTransport')
        }
    },
    computed: {
        user_id(){
            return this.$store.getters.user_id
        }
    },
    mounted() {
        firebase.firestore().collection('users').doc(this.user_id).onSnapshot((doc) => {
            console.log('success')
            if(doc.data().flg == false){
                this.$router.push('/contact')
            }
        })
    },
    created() {
        this.$store.commit('onAuthStateChanged')
    },
}
</script>>
