<template>
    <content class="ma-0 pa-0">
        <TopHeader/>
        <v-container class="ma-0 pa-0 pt-lg-8 pt-md-8" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <!-- 紹介 -->
                <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
                    <v-col class="ma-0 pa-0" lg="9" md="9">
                        <v-card-text class="ma-0 pa-0 py-6 text-center" v-resize='onResize' :class='size_headline'>
                            二モチでは
                        </v-card-text>
                        <v-card-text class="ma-0 pa-0 py-lg-2 text-center" v-resize='onResize' :class='size_headline' >
                            お買い物後の荷物運びを<br>負担と感じている人をターゲットに<br>お買い物荷物の配達サービスを行っております
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
            <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
                <v-col class="ma-0 pa-0">
                    <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_subtitle'>
                        <v-icon class="ma-0 pa-0">mdi-timer-outline</v-icon>
                        <span class="ma-0 pa-0 font-weight-bold">素早く簡単に</span>配達者を要請
                    </v-card-text>
                    <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_subtitle'>
                        <v-icon class="ma-0 pa-0">mdi-security</v-icon>
                        <span class="ma-0 pa-0 font-weight-bold">安心安全な</span>サービスの提供
                    </v-card-text>
                </v-col>
            </v-row>
        <!-- ユーザ特徴 -->
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0" justify="center">
                        <!-- <v-img
                            justify="center"
                            src="../assets/delivery.jpg"
                            max-width="1800"
                            max-height="234"/> -->
                    <!-- card1 -->
                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #83B590" v-resize='onResize' :height='card1_height' :width='card1_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card class="ma-0 pa-0" elevation="0" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 white--text" v-resize='onResize' :class='size_headline'>
                                    ニモチの特徴
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" fluid style="background-color: #E5ECE6">
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0" justify="center">
                    <!-- card2 -->
                    <v-card class="ma-0 pa-0" elevation="0" v-resize='onResize' :height='card2_height' :width='card2_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <!-- card3 -->
                            <v-card class="ma-0 pa-0" elevation="0" style="background-color: #83B590" width="150">
                                <v-card-text class="ma-0 pa-0 white--text" v-resize='onResize' :class='size_headline'>
                                    01
                                </v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            素早く手軽に要請が可能
                        </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            簡単な操作でご希望に沿った配達者を要請します
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0" justify="center">
                    <!-- card2 -->
                    <v-card class="ma-0 pa-0" elevation="0" v-resize='onResize' :height='card2_height' :width='card2_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card class="ma-0 pa-0" elevation="0" width="150" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 white--text" v-resize='onResize' :class='size_headline'>02</v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            安心安全な配達
                        </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            配達者の名前と顔写真が表示されるため、安心してサービスを受けられます
                        </v-card-text>
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
                <v-row class="ma-0 pa-0" justify="center">
                        <!-- <v-img
                        justify="center"
                        src="../assets/delivery.jpg"
                        max-width="1800"
                        max-height="234"/> -->
                    <!-- card1 -->
                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #83B590" v-resize='onResize' :height='card1_height' :width='card1_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card class="ma-0 pa-0" elevation="0" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 white--text" v-resize='onResize' :class='size_headline'>
                                    パートに向けた特徴
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0" justify="center">
                    <v-card class="ma-0 pa-0" elevation="0" v-resize='onResize' :height='card2_height' :width='card2_width'>
                        <v-row class="ma-0 pa-0" justify="center" >
                            <v-card class="ma-0 pa-0" elevation="0" width="150" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 white--text" v-resize='onResize' :class='size_headline'>
                                    01
                                </v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            空いている時間に稼げる
                        </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            働ける時間と場所を自分で決めることができます
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0" justify="center">
                    <v-card class="ma-0 pa-0" elevation="0" v-resize='onResize' :height='card2_height' :width='card2_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card class="ma-0 pa-0" elevation="0" width="150" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 white--text" v-resize='onResize' :class='size_headline'>
                                    02
                                </v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            運動不足の解消
                        </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 pa-0 text-center black--text" v-resize='onResize' :class='size_headline'>
                            運動がてら働くことも可能です
                        </v-card-text>
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
                class="ma-0 pa-0 font-weight-bold"
                width="300"
            >
                <span style="font-size:18px">
                    配達者TOPへ
                </span>
            </v-btn>
        </v-row>
        <UTopfooter/>
    </content>
</template>
<script>
import TopHeader from '@/components/User/TopHeader'
import UTopfooter from '../components/User/TopFooter'
export default {
    data(){
        return{
                x:window.innerWidth,
                y:window.innerHeight ,
                size_display:'display-1',
                size_headline:'headline',
                size_title:'title',
                size_subtitle:'subtitle-1',
                size_body:'body-1',
                card1_height: 150,
                card1_width: 1172,
                card2_height: 350,
                card2_width: 1172
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
                if(this.x<600)
                {
                    this.size_display = 'headline',
                    this.size_headline = 'subtitle-1',
                    this.size_title = 'subtitle-1',
                    this.size_subtitle = 'caption',
                    this.size_body = 'body-1',
                    this.card1_height = 100,
                    this.card1_width = 500,
                    this.card2_height = 250,
                    this.card2_width = 350
                }
                else
                {
                    this.size_display = 'display-1',
                    this.size_headline = 'headline',
                    this.size_title = 'title',
                    this.size_subtitle = 'subtitle-1',
                    this.size_body = 'body-1',
                    this.card1_height = 150,
                    this.card1_width = 1172,
                    this.card2_height = 350,
                    this.card2_width = 1172
                }
            }
        },
        components:{
            TopHeader,
            UTopfooter,
        }
    }
</script>
<style lang="scss">
v-card-text{
    text-align: center;
    color: white;
}
v-card-text{
    text-align: center;
}

</style>
