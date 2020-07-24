<template>
    <v-content class="ma-0 pa-0">
        <v-container>
            <Header/>
            <v-layout wrap>
                <v-flex xs12 sm6 lg12>
                    <div>
                        <v-card elevation="0">
                            <v-card-title class="justify-center grey--text">
                                <h1>依頼詳細</h1>
                            </v-card-title>
                        </v-card>
                        <v-card>
                            <v-row justify="space-around">
                                <v-avatar color="blue light5" size="164">
                                    <v-img
                                    v-resize='onResize' :height='size_card'
                                    :src="illust"
                                    class="my-3"
                                    contain
                                    />
                                </v-avatar>
                            </v-row>
                            <v-card-text class="text-center black--text subtitle-1">{{username}}さん</v-card-text>
                            <v-card-text class="text-center black--text subtitle-1">依頼場所まで：{{place}} ㎞</v-card-text>
                            <v-card-text class="text-center black--text subtitle-1">配達希望時間：{{time}}</v-card-text>
                            <v-card-text class="text-center black--text subtitle-1">荷物の重量：{{weight}} kg</v-card-text>
                            <v-row align="center">
                                <v-col class="text-center" cols="12" sm="12">
                                    <div class="my-1">
                                        <v-btn>この依頼を受ける<v-icon>mdi-thumb-up</v-icon></v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-card>
                            <v-card-text class="text-center black--text title">本日の依頼重量：{{sumweight}} kg</v-card-text>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <Footer/>
    </v-content>
</template>
<script>
import Header from '../../components/Part/Header';
import Footer from '../../components/Part/Footer';
export default {
        data() {
            return {
                x:window.innerWidth,
                y:window.innerHeight,
                size_card:200,
                size_display:'display-1',
                size_headline:'headline',
                size_title:'title',
                size_subtitle:'subtitle-1',
                size_body:'body-1',
                message1:'依頼場所まで',
                message2:'配達希望時間',
                message3:'荷物の重力',
                sumweight:0,
                username:'ハムカツ！！！',
                illust:require('@/assets/part/obaachan.png'),
                place:'2000',
                time:'120',
                weight:'2'
            }
        },
        components:{
            //partRequestdetails
            Header,
            Footer
        },
        mounted () {
      this.onResize
    },
    methods: {
      onResize () {
        this.x = window.innerWidth
        this.y = window.innerHeight
      },
    },
    watch:{
        x:function(){
            if(this.x<600)
            {
                this.size_card = 150,
                this.size_display = 'headline',
                this.size_headline = 'title',
                this.size_title = 'subtitle-1',
                this.size_subtitle = 'body-2',
                this.size_body = 'body-1'
            }
            else
            {
                this.size_card = 200,
                this.size_display = 'display-1',
                this.size_headline = 'headline',
                this.size_titele = 'title',
                this.size_subtitele = 'subtitle-1',
                this.size_body = 'body-1'
            }
        }
    }
    }
</script>