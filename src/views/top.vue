<template>
    <content class="ma-0 pa-0">
        <TopHeader/>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
            <!-- PC -->
            <v-row class="ma-0 pa-0 hidden-sm-and-down" style="background-color: #E5ECE6">
                <v-col>
                    <h2 class="py-6" style="color: #000000">二モチとは</h2>
                    <h2 class="py-6" style="color: #000000" headline >高齢者向けのお買い物手助けサービスです。</h2>
                </v-col>
            </v-row>
            <!-- 携帯 -->
            <v-row class="ma-0 pa-0 hidden-md-and-up" justify="center" style="background-color: #E5ECE6">
                <v-col>
                    <h2 class="py-6 title font-weight-bold" style="color: #000000">二モチとは</h2>
                    <h2 class="py-6 title font-weight-bold" style="color: #000000">高齢者向けの<br>お買い物手助けサービスです。</h2>
                </v-col>
            </v-row>
            </v-layout>
        </v-container>
            <v-row class="ma-0 pa-0" style="background-color: #E5ECE6">
                <v-col>
                    <p class="pb-3"><v-icon class="me-2 mb-1">mdi-timer-outline</v-icon><span class="font-weight-bold">素早く簡単に</span>配達者を要請</p>
                    <p><v-icon class="me-2 mb-1">mdi-security</v-icon>
                    <span class="font-weight-bold">安心安全な</span>サービスの提供
                    </p>
                </v-col>
            </v-row>
        <!-- ユーザ特徴 -->
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <!-- PC -->
                <v-row class="ma-0 mb-12 m mt-3 pa-0 hidden-sm-and-down" justify="center">
                        <!-- <v-img
                            justify="center"
                            src="../assets/delivery.jpg"
                            max-width="1800"
                            max-height="234"/> -->
                    <v-card elevation="0" width="1172" height="150" style="background-color: #83B590">
                        <v-row class="mt-12 ma-0 pa-0" justify="center">
                            <v-card elevation="0" style="background-color: #83B590">
                                <h2 class="mt-2">ユーザに向けた特徴</h2>
                            </v-card>
                        </v-row>
                    </v-card>
                </v-row>
                <!-- 携帯 -->
                <v-row class="ma-0 mb-10 mt-3 pa-0 hidden-md-and-up" justify="center">
                        <!-- <v-img
                        justify="center"
                        src="../assets/delivery.jpg"
                        max-width="1800"
                        max-height="234"/> -->
                    <v-card elevation="0" width="500" height="100" style="background-color: #83B590">
                        <v-row class="mt-8 ma-0 pa-0" justify="center">
                            <v-card elevation="0" style="background-color: #83B590">
                                <h2 class="title font-weight-bold">ユーザに向けた特徴</h2>
                            </v-card>
                        </v-row>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" fluid style="background-color: #E5ECE6">
            <v-layout class="ma-0 pa-0" column>
                <!-- PC -->
                <v-row class="mb-12 pa-0 hidden-sm-and-down" justify="center">
                    <v-card elevation="0" height="350" width="1172">
                        <v-row class="mt-12 pa-0" justify="center">
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>01</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3" style="color: #000000">
                            素早く手軽に要請が可能
                        </h2>
                        <v-divider/>
                        <p class="mt-9 title">簡単な操作でご希望に沿った配達者を要請します</p>
                    </v-card>
                </v-row>
                <!-- 携帯 -->
                <v-row class="mb-10 pa-0 hidden-md-and-up" justify="center">
                    <v-card elevation="0" height="250" width="350">
                        <v-row class="mt-12 pa-0" justify="center">
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>01</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3 title font-weight-bold" style="color: #000000">
                            素早く手軽に要請が可能
                        </h2>
                        <v-divider/>
                        <p class="mt-9 body-2" v-resize='onResize' :class='size'>簡単な操作でご希望に沿った配達者を要請します</p>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <!-- PC -->
                <v-row class="mb-12 pa-0 hidden-sm-and-down" justify="center">
                    <v-card elevation="0" height="350" width="1172">
                        <v-row class="mt-12 pa-0" justify="center">
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>02</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3" style="color: #000000">
                            安心安全な配達
                        </h2>
                        <v-divider/>
                        <p class="mt-9 title">配達者の名前と顔写真が表示されるため、安心してサービスを受けられます</p>
                    </v-card>
                </v-row>
                <!-- 携帯 -->
                <v-row class="mb-12 pa-0 hidden-md-and-up" justify="center">
                    <v-card elevation="0" height="250" width="350">
                        <v-row class="mt-12 pa-0" justify="center">
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>02</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3 title font-weight-bold" style="color: #000000">
                            安心安全な配達
                        </h2>
                        <v-divider/>
                        <p class="mt-9 body-2">配達者の名前と顔写真が表示されるため、安心してサービスを受けられます</p>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
            <v-btn
                outlined
                large
                style="color: #83B590"
                to="user_regist"
                class="mb-5 font-weight-bold"
                width="300"
            >
                <span style="font-size:18px">
                    新規登録はこちらから
                </span>
            </v-btn>
        </v-row>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <!-- PC -->
                <v-row class="ma-0 mb-12 mt-8 pa-0 hidden-sm-and-down" justify="center">
                        <!-- <v-img
                        justify="center"
                        src="../assets/delivery.jpg"
                        max-width="1800"
                        max-height="234"/> -->

                    <v-card elevation="0" width="1172" height="150" style="background-color: #83B590">
                        <v-row class="mt-12 pa-0" justify="center">
                            <v-card elevation="0" style="background-color: #83B590">
                                <h2 class="mt-2">パートに向けた特徴</h2>
                            </v-card>
                        </v-row>
                    </v-card>
                </v-row>
                <!-- 携帯 -->
                <v-row class="ma-0 mb-10 mt-8 pa-0 hidden-md-and-up" justify="center">
                        <!-- <v-img
                        justify="center"
                        src="../assets/delivery.jpg"
                        max-width="1800"
                        max-height="234"/> -->

                    <v-card elevation="0" width="500" height="100" style="background-color: #83B590">
                        <v-row class="mt-6 pa-0" justify="center">
                            <v-card elevation="0" style="background-color: #83B590">
                                <h2 class="mt-2 title font-weight-bold">パートに向けた特徴</h2>
                            </v-card>
                        </v-row>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <!-- PC -->
                <v-row class="mb-12 pa-0 hidden-sm-and-down" justify="center">
                    <v-card elevation="0" height="350" width="1172">
                        <v-row class="mt-12 pa-0" justify="center" >
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>01</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3" style="color: #000000">
                            空いている時間に稼げる
                        </h2>
                        <v-divider/>
                        <p class="mt-9 title">働ける時間と場所を自分で決めることができます</p>
                    </v-card>
                </v-row>
                <!-- 携帯 -->
                <v-row class="mb-10 pa-0 hidden-md-and-up" justify="center">
                    <v-card elevation="0" height="250" width="350">
                        <v-row class="mt-12 pa-0" justify="center" >
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>01</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3 title font-weight-bold" style="color: #000000">
                            空いている時間に稼げる
                        </h2>
                        <v-divider/>
                        <p class="mt-9 body-2">働ける時間と場所を自分で決めることができます</p>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <!-- PC -->
                <v-row class="mb-5 pa-0 hidden-sm-and-down" justify="center">
                    <v-card elevation="0" height="350" width="1172">
                        <v-row class="mt-12 pa-0" justify="center">
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>02</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3" style="color: #000000">
                            運動不足の解消
                        </h2>
                        <v-divider/>
                        <p class="mt-9 title">運動がてら働くことも可能です</p>
                    </v-card>
                </v-row>
                <!-- 携帯 -->
                <v-row class="mb-5 pa-0 hidden-md-and-up" justify="center">
                    <v-card elevation="0" height="250" width="350">
                        <v-row class="mt-12 pa-0" justify="center">
                            <v-card elevation="0" width="150" style="background-color: #83B590">
                                <h2>02</h2>
                            </v-card>
                        </v-row>
                        <h2 class="mt-6 pb-3 title font-weight-bold" style="color: #000000">
                            運動不足の解消
                        </h2>
                        <v-divider/>
                        <p class="mt-9 body-2">運動がてら働くことも可能です</p>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
            <v-btn
                outlined
                large
                style="color: #83B590"
                to="part_top"
                class="mb-5 font-weight-bold"
                width="300"
            >
                <span style="font-size:18px">
                    配達者TOPへ
                </span>
            </v-btn>
        </v-row>
        <Ufooter/>
    </content>
</template>
<script>
import TopHeader from '@/components/User/TopHeader'
import Ufooter from '@/components/User/Footer'
export default {
    data(){
        return{
                x:0,
                y:0,
                size:"body-1"
            }
        },
        mounted(){
            window.addEventListener('resize', this.onResize)
        },
        beforeDestory(){
            window.removeEventListener('resize',this.onResize)
        },
        methods: {
            onResize(){
                this.x = window.innerWidth;
                this.y = window.innerHeight;
            },
        },
        watch:{
        x:function(){
            if(this.x<=600)
            {
                this.size= 'display-6'
            }else
            {
                this.size='body-1'
            }
        }
    },
        components:{
            TopHeader,
            Ufooter,
        }
    }
</script>
<style lang="scss">
h2{
    text-align: center;
    color: white;
}
p{
    text-align: center;
}

</style>
