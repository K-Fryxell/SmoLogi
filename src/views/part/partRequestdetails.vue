<template>
    <v-content class="ma-0 pa-0">
        <v-container>
            <Header/>
            <v-layout wrap>
                <v-flex xs12 sm6 lg12>
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
                        <v-card-text class="text-center black--text subtitle-1">{{items.name}}さん</v-card-text>
                        <v-card-text class="text-center black--text subtitle-1">依頼場所まで：{{place}} ㎞</v-card-text>
                        <v-card-text class="text-center black--text subtitle-1">配達希望時間：{{items.isTime}}時{{ items.isMinute }}分</v-card-text>
                        <v-card-text class="text-center black--text subtitle-1">荷物の重量：{{items.weight}} kg</v-card-text>
                        <v-row align="center">
                            <v-col class="text-center" cols="12" sm="12">
                                <div class="my-1">
                                    <v-btn @click="send">この依頼を受ける<v-icon>mdi-thumb-up</v-icon></v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-card-text class="text-center black--text title">本日の依頼重量：{{sumweight}} kg</v-card-text>
                    </v-card>
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
            sumweight:0,
            illust:require('@/assets/part/obaachan.png'),
            part_latitude:0,
            part_longitude:0,
            place:0,
            array:{},
            items:[],
            flg: false
        }
    },
    components:{
        //partRequestdetails
        Header,
        Footer
    },
    mounted:async function() {
        this.onResize
    },
    methods: {
        onResize () {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        calc() {
            console.log(this.part_latitude)
            console.log(this.part_longitude)
            console.log(this.$store.state.user_info['user_lat'])
            console.log(this.$store.state.user_info['user_lng'])

            this.items = this.$store.state.user_info

            //緯度経度取得
            this.part_latitude *= Math.PI / 180;
            this.part_longitude *= Math.PI / 180;
            this.items['user_lat'] *= Math.PI / 180;
            this.items['user_lng'] *= Math.PI / 180;

            //計算
            this.place = 6371 * Math.acos(Math.cos(this.part_latitude) * Math.cos(this.items['user_lat']) * Math.cos(this.items['user_lng'] - this.part_longitude) + Math.sin(this.part_latitude) * Math.sin(this.items['user_lat']))
            this.place = Math.floor(this.place)
        },
        send() {
            this.$store.commit('part_onAuthStateChanged')
            this.array['part_latitude'] = this.part_latitude
            this.array['part_longitude'] = this.part_longitude
            this.array['user_id'] = this.items['user_id']
            this.array['part_id'] = this.$store.state.part_id
            this.$store.commit()
        }
        
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
        },
        part_latitude: function(){
            this.flg = true
        },
        flg: function(){
            this.calc()
        }
    },
    created() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function(position){
                let coords = position.coords;
                // 緯度経度だけ取得
                this.part_latitude = coords.latitude;
                this.part_longitude = coords.longitude;
            }.bind(this))
        }
    },
}
</script>
