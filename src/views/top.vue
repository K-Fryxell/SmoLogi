
<template>
    <v-container>
        <v-layout>
            <v-flex xs=12 sm=6 md=6 >
                <Sign/>
                <v-row>
                    <v-col sm=6 md=6>
                        <v-card elevation="0">
                            <v-card-text>
                                <v-card-title class="headline">ニモチとは</v-card-title>
                                高齢者向けのお買い物手助けサービスです。
                                <br>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols=12 sm=12 md=12 >
                        <v-card elevation="0">
                            <v-img  height="auto" :src="imageurl">
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col sm=6 md=6>
                        <v-card elevation="0">
                            <v-card-text>
                                <v-card-title class="headline">利用者に向けたサイト特徴</v-card-title>
                                素早く簡単に配達所を要請できる<br>配達者の名前や顔写真も表示されるため、安心してサービスを受けられる。
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col sm=6 md=6>
                        <v-card elevation="0">
                            <v-img height="200px" :src="imageurl"></v-img>
                        </v-card>
                    </v-col>
                    <v-col sm=6 md=6>
                        <v-card elevation="0">
                            <v-card-text><v-card-title class="headline">配達者に向けたサイト特徴</v-card-title>
                            働ける時間と場所を自分で決めることができる。</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col sm=6 md=6>
                        <v-card elevation="0">
                            <v-img height="200px" :src="imageurl"></v-img>
                        </v-card>
                    </v-col>
                <v-btn x-large dark>新規会員登録</v-btn>
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Sign from '../components/User/Sign'
export default {
    data(){
        return{
            imageurl:require("../assets/nimoti.jpg"),
        }
    },components:{
        Sign
    },
}

</script>
