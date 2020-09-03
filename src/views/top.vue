<template>
    <content class="ma-0 pa-0">
        <v-navigation-drawer fixed height style="width:100%" permanent>
			<TopHeader/>
		</v-navigation-drawer>
        <v-container class="ma-0 mt-12 py-8 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <!-- 紹介-->
                <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
                    <v-col class="ma-0 pa-0" lg="9" md="9">
                        <v-card-text class="ma-0 pa-0 py-6 text-center font-weight-bold" v-resize='onResize' :class='size_headline'>
                            二モチとは
                        </v-card-text>
                        <v-card-text class="ma-0 pa-0 py-lg-2 text-center" v-resize='onResize' :class='size_headline'>
                            お買い物後の手助け配達サービスです。
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
            <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
                <v-col class="ma-0 pa-0">
                    <v-card-text class="ma-0 mt-5 pa-0 text-center" v-resize='onResize' :class='size_subtitle'>
                        <v-icon class="ma-0 pa-0">mdi-timer-outline</v-icon>
                        <span class="ma-0 pa-0 font-weight-bold">素早く簡単に</span>配達者を要請
                    </v-card-text>
                    <v-card-text class="ma-0 pa-0 mt-3 mb-10 text-center" v-resize='onResize' :class='size_subtitle'>
                        <v-icon class="ma-0 pa-0">mdi-security</v-icon>
                        <span class="ma-0 pa-0 font-weight-bold">安心安全な</span>サービスの提供
                    </v-card-text>
                    <v-divider/>
                </v-col>
            </v-row>
        <!-- ユーザ特徴 -->
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 mt-10 mb-10 pa-0" justify="center">
                    <!-- card1 -->
                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #E5ECE6">
                        <v-card-text class="ma-0 pa-0 font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
                            ニモチの特徴
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" elevation="0" fluid style="background-color: #E5ECE6">
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0" justify="center">
                    <!-- card2 -->
                    <v-card class="ma-0 pa-0" elevation="0" v-resize='onResize' :height='card2_height' :width='card2_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <!-- card3 -->
                            <v-card class="ma-0 mt-10 pa-0 text-center"  elevation="0" style="background-color: #83B590" width="150">
                                <v-card-text class="ma-0 pa-0 font-weight-bold white--text"  v-resize='onResize' :class='size_headline'>
                                    01
                                </v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 mt-5 mb-5 pa-0 text-center black--text font-weight-bold" v-resize='onResize' :class='size_headline'>
                            素早く手軽に要請が可能
                        </v-card-text>
                        <v-card-text class="ma-0 pa-0" v-resize='onResize' :class='size_subtitle'>
                            </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 pa-0 mt-5 text-center black--text" v-resize='onResize' :class='size_title'>
                            配達依頼までの手順が短いので簡単に配達者を要請することが可能です。<br>
                            またチャットを使って配達者と連絡を取ることができます。
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" elevation="0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 mb-5 pa-0" justify="center">
                    <!-- card2 -->
                    <v-card class="ma-0 pa-0 mb-5 mt-12" elevation="0" v-resize='onResize' :height='card2_height' :width='card2_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card class="ma-0 mt-10 pa-0" elevation="0" width="150" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 font-weight-bold white--text text-center" v-resize='onResize' :class='size_headline'>02</v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 mt-5 mb-5 pa-0 text-center black--text font-weight-bold" v-resize='onResize' :class='size_headline'>
                            安心安全な配達
                        </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 mt-5 pa-0 text-center black--text" v-resize='onResize' :class='size_title'>
                            配達者の顔写真が表示されるため、安心してサービスを受けることができます。
                        </v-card-text>
                    </v-card>
                </v-row>
                <v-divider/>
            </v-layout>
        </v-container>
        <!-- nimotiの使い方タイトル -->
        <v-container class="ma-0 pa-0" elevation="0" fluid style="background-color: #E5ECE6">
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0 mt-10 mb-10" justify="center">
                    <v-card class="ma-0 pa-0" elevation="0" justify="center" style="background-color: #E5ECE6">
                        <v-card-text class="ma-0 pa-0 font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
                            ニモチの使い方
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <!-- 内容-->
        <v-container class="ma-0 pa-0" elevation="0" fluid style="background-color: #E5ECE6">
            <v-layout class="ma-0 pa-0" column>
            <!-- pcサイズ -->
                <v-row class="ma-0 mb-10 pa-0 hidden-sm-and-down" justify="center">
                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #E5ECE6">
                        <v-row class="ma-0 pa-0 px-8">
                            <v-col class="ma-0 pa-0">
                                <v-card class="ma-0 pa-0" elevation="0" v-resize='onResize' :height='card3_height' :width='card3_width'>
                                    <v-card-text class="pl-5 ma-0 pa-0 display-2 font-weight-bold"
                                        style="color: #83B590"
                                        >
                                        1
                                    </v-card-text>
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <img v-resize='onResize' :width='img_width' src="../assets/transport.png">
                                    </v-row>
                                    <v-row class="ma-0 mt-3 pa-0">
                                        <v-card-text class="ma-0 pa-0 text-center font-weight-bold">
                                            配達依頼情報を入力する
                                            </v-card-text>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col class="ma-0 px-12 pa-0">
                                <v-card class="ma-0 pa-0" justify="center" elevation="0" v-resize='onResize' :height='card3_height' :width='card3_width'>
                                    <v-card-text class="ma-0 pl-5 pa-0 display-2 font-weight-bold"
                                    style="color: #83B590"
                                    >2</v-card-text>
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <img v-resize='onResize' :width='img_width' src="../assets/transport.png">
                                    </v-row>
                                    <v-row class="ma-0 pa-0">
                                        <v-card-text class="ma-0 pa-0 text-center font-weight-bold">
                                            決定ボタンを押し<br>配達者を要請
                                            </v-card-text>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col class="ma-0 pa-0">
                                <v-card class="ma-0 pa-0" justify="center" elevation="0" v-resize='onResize' :height='card3_height' :width='card3_width'>
                                    <v-card-text class="ma-0 pl-5 pa-0 font-weight-bold display-2"
                                    style="color: #83B590">
                                    3</v-card-text>
                                    <v-row class="ma-0 pa-0" justify="center">
                                        <img width="150" src="../assets/transport_image1.png">
                                    </v-row>
                                    <v-row class="ma-0 mb-5 pa-0">
                                        <v-card-text class="ma-0 pa-0 text-center font-weight-bold">
                                            配達完了
                                            </v-card-text>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
                <!-- 携帯サイズ -->
                <v-sheet class="mx-auto mb-5 hidden-md-and-up" max-width="200">
                    <v-slide-group>
                        <!-- multiple show-arrows -->
                        <v-slide-item
                            v-for="item in items"
                            :key="item.explanation"
                            v-slot:default="{ active, toggle }"
                            class="ma-0 pa-0"
                        >
                            <v-card-text
                                class="ma-0 pa-0 pt-4 pl-5 pr-5 text-center"
                                :input-value="active"
                                rounded
                                @click="toggle">
                                <img :src="item.img" width="70" height="100" class="ma-0 pa-0"
                            />
                            <p style="color: #83B590;">{{item.explanation}}</p>
                            </v-card-text>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-layout>
        </v-container>
    <v-divider/>
        <!-- <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
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
        </v-row> -->
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 mt-10 mb-10 pa-0" justify="center">
                    <!-- card1 -->
                    <v-card class="ma-0 pa-0" elevation="0" style="background-color: #E5ECE6">
                        <v-card-text class="ma-0 pa-0 font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
                            配達パートナーの特徴
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
                            <v-card class="ma-0 mt-10 mb-5 pa-0" elevation="0" width="150" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 font-weight-bold white--text text-center" v-resize='onResize' :class='size_headline'>
                                    01
                                </v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 mb-5 pa-0 text-center black--text font-weight-bold" v-resize='onResize' :class='size_headline'>
                            空いている時間に稼げる
                        </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 mt-5 pa-0 text-center black--text" v-resize='onResize' :class='size_title'>
                            いつでもどこでもご自身の都合に合わせて、働くことができます。<br>
                            副業をしてみたい人にも最適です。
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <v-container class="ma-0 pa-0" style="background-color: #E5ECE6" fluid>
            <v-layout class="ma-0 pa-0" column>
                <v-row class="ma-0 pa-0" justify="center">
                    <v-card class="ma-0 mt-10 pa-0 mb-12" elevation="0" v-resize='onResize' :height='card2_height' :width='card2_width'>
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card class="ma-0 mt-10 mb-5 pa-0" elevation="0" width="150" style="background-color: #83B590">
                                <v-card-text class="ma-0 pa-0 font-weight-bold white--text text-center" v-resize='onResize' :class='size_headline'>
                                    02
                                </v-card-text>
                            </v-card>
                        </v-row>
                        <v-card-text class="ma-0 mb-5 pa-0 text-center black--text font-weight-bold" v-resize='onResize' :class='size_headline'>
                            運動不足の解消
                        </v-card-text>
                        <v-divider/>
                        <v-card-text class="ma-0 pa-0 mt-5 text-center black--text" v-resize='onResize' :class='size_title'>
                            普段運動されない方や運動する時間が取れない方も働きながら運動することができます<br>
                            普段行かないエリアでの新しい発見があるかもしれません。
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-layout>
        </v-container>
        <!-- <v-row class="ma-0 pa-0" justify="center" style="background-color: #E5ECE6">
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
        </v-row> -->
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
                y:window.innerHeight,
                size_display:'display-1',
                size_headline:'headline',
                size_title:'title',
                size_subtitle:'subtitle-1',
                size_body:'body-1',
                card1_height: 150,
                card1_width: 1000,
                card2_height: 300,
                card2_width: 1000,
                card3_height: 300,
                card3_width: 250,
                img_width: 100,
                items:[
                    {img:require('../assets/transport.png'),
                    explanation:'1.配達依頼情報を入力する'
                    },
                    {img:require('../assets/transport.png'),
                    explanation:'2.決定ボタンを押し配達者を要請'
                    },
                    {img:require('../assets/transport_image1.png'),
                    explanation:'3.配達者から荷物を受け取る'
                    },
                ]
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
                    this.card1_height = 75,
                    this.card1_width = 500,
                    this.card2_height = 300,
                    this.card2_width = 390
                    this.card3_height = 70,
                    this.card3_width = 70
                }
                else
                {
                    this.size_display = 'display-1',
                    this.size_headline = 'headline',
                    this.size_title = 'title',
                    this.size_subtitle = 'subtitle-1',
                    this.size_body = 'body-1',
                    this.card1_height = 150,
                    this.card1_width = 1000,
                    this.card2_height = 300,
                    this.card2_width = 1000,
                    this.card3_height = 300,
                    this.card3_width = 250,
                    this.img_width = 100
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
