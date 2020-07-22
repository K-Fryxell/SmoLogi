
<template>
<v-container class="ma-0 pa-0" fluid>
    <v-layout class="ma-0 pa-0" wrap>
        <v-flex xs12 lg12>
            <v-row class="ma-0 pa-0">
                <v-col cols="12" lg="12">
                    <v-card elevation="0">
                        <v-card-text>
                            <v-card-title class="headline ">ニモチとは</v-card-title>
                                高齢者向けのお買い物手助けサービスです。
                                <br>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" lg="12">
                    <v-card elevation="0">
                        <v-img  height="auto" :src="imageurl">
                            </v-img>
                    </v-card>
                </v-col>

                    <v-flex xs12 lg12>
                        <v-row>
                            <v-col cols="12" lg="6" class="text-center">
                                <v-card elevation="0">
                                    <v-card-text>
                                        <v-card-title class="headline">利用者に向けたサイト特徴</v-card-title>
                                        素早く簡単に配達所を要請できる<br>配達者の名前や顔写真も表示されるため、安心してサービスを受けられる。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            
                            <v-col cols="12" lg="6">
                                <v-card elevation="0">
                                    <v-img height="300px" :src="imageurl"/>
                                </v-card>
                            </v-col>

                            <v-col cols="12" lg="6" class="text-center">
                                <v-card elevation="0">
                                    <v-card-text>
                                        <v-card-title   class="headline
                                            ">配達者に向けたサイト特徴</v-card-title>
                                            働ける時間と場所を自分で決めることができる。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" lg="6">
                                <v-card elevation="0" class="ma-0 pa-0">
                                    <v-img height="300px" :src="imageurl"></v-img>
                                </v-card>
                            </v-col>
                            <!-- <v-btn x-large dark>新規会員登録</v-btn> -->
                        </v-row>
                    </v-flex>
                </v-col>
            </v-row>
        </v-flex>
    </v-layout>
    <Ufooter/>
</v-container>
    </content>
</template>
<script>
import TopHeader from '../components/User/TopHeader'
import Ufooter from '../components/User/Ufooter'
export default {
    data(){
        return{
            imageurl:require("../assets/delivery.jpg"),
            x:0,
            y:0,
                }
            },
            mounted(){
                window.addEventListener('resize', this.onResize)
            },
            beforeDestory(){
                window.removeEventListener('resize',this.onResize)
            },methods: {
                onResize(){
                    this.x =  window.innerWidth;
                    this.y = window.innerHeight;
                },
                },components:{
                    TopHeader,
                    Ufooter,
                    }
        }
</script>
