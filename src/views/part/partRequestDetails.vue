<template>
    <v-content class="ma-0 pa-0">
        <!-- pcヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-sm-and-down" fixed height style="width:100%;" permanent>
			<Header/>
		</v-navigation-drawer>
		<!-- 携帯ヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-md-and-up" fixed height style="width:100%; height:70px;" permanent>
			<Header/>
		</v-navigation-drawer>
        <v-container fluid class="ma-0 mt-12 py-8 pa-0">
            <v-layout wrap>
                <v-row class="ma-0 pa-0" justify="center">
                    <v-flex xs12 sm6 lg4>
                        <v-card-title class="justify-center ma-0 pa-0 pt-10 pb-12" v-resize='onResize' :class='size_display'>
                            依頼詳細
                        </v-card-title>
                        <v-card class="ma-lg-0 ma-8 mt-0 mb-12 pa-0">
                            <v-row class="ma-0 pa-0 pt-5 pt-lg-12" justify="space-around">
                                <v-avatar size="164">
                                    <v-img
                                        v-resize='onResize' :height='size_card'
                                        v-if="items.gender==0"
                                        :src="illust"
                                        class="my-3"
                                        contain
                                    />
                                    <v-img
                                        v-resize='onResize' :height='size_card'
                                        v-else-if="items.gender==1"
                                        :src="img"
                                        class="my-3"
                                        contain
                                    />
                                </v-avatar>
                            </v-row>
                            <v-card-text class="ma-0 mt-3 mb-7 pa-0 text-center" v-resize='onResize' :class='size_headline'>
                                {{items.name}}さん
                            </v-card-text>
                            <v-card-text class="ma-0 ma-lg-3 ml-12 pa-0 pl-lg-12" v-resize='onResize' :class='size_headline'>
                                〇依頼場所まで<br>
                            </v-card-text>
                            <v-card-text class="ma-0 ma-lg-3 ml-12 pa-0 pl-lg-12" v-resize='onResize' :class='size_headline'>
                                ：{{place}} ㎞
                            </v-card-text>
                            <v-card-text class="ma-0 ma-lg-3 ml-12 pa-0 pl-lg-12" v-resize='onResize' :class='size_headline'>
                                〇配達希望時間<br>
                            </v-card-text>
                            <v-card-text class="ma-0 ma-lg-3 ml-12 pa-0 pl-lg-12" v-resize='onResize' :class='size_headline'>
                                ：{{items.first_hour}}時{{items.first_minute}}分～{{items.last_hour}}時{{items.last_minute}}分
                            </v-card-text>
                            <v-card-text class="ma-0 ma-lg-3 ml-12 pa-0 pl-lg-12" v-resize='onResize' :class='size_headline'>
                                〇荷物の重量<br>
                            </v-card-text>
                            <v-card-text class="ma-0 ma-lg-3 ml-12 pa-0 pl-lg-12" v-resize='onResize' :class='size_headline'>
                                ：{{items.weight}} kg
                            </v-card-text>
                            <v-row class="ma-0 mt-5 pa-0 pb-12" align="center">
                                <v-col class="text-center" cols="12" sm="12">
                                    <div class="my-1">
                                        <!-- 既に受けている依頼が完了していない場合モーダル表示させたい -->
                                        <v-btn @click="send">この依頼を受ける<v-icon>mdi-thumb-up</v-icon></v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-flex>
                </v-row>
                <!-- 既に依頼を受けている場合 -->
                <v-dialog v-model="noAccept" width="500">
                    <v-card class="ma-0 pa-0">
                        <v-row justify="center" class="pa-0 ma-0">
                            <v-col cols="auto">
                                <v-card-title>
                                    既に受けている依頼があります。<br>
                                    配達ページへ移動して完了してください。
                                </v-card-title>
                                <v-row justify="center" class="pa-0 ma-0">
                                    <v-col cols="auto">
                                        <v-btn width="50" to="/contact" @click="noAccept=false">
                                            確認
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
        <Footer/>
    </v-content>
</template>
<script>
import Header from '@/components/Part/PartHeader'
import Footer from '@/components/Part/PartFooter'
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
            img:require('@/assets/part/woman.jpg'),
            illust:require('@/assets/part/man.jpg'),
            part_latitude:0,
            part_longitude:0,
            place:0,
            noAccept: false,
            array:{},
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
    computed: {
        items(){
            return this.$store.getters.user_info
        },
        part_fname(){
            return this.$store.getters.part_fname
        },
        part_name(){
            return this.$store.getters.part_name
        },
        part_image(){
            return this.$store.getters.part_image
        },
        part_id(){
            return this.$store.getters.part_id
        },
        username(){
            return this.$store.getters.nickname
        },
        delivery(){
            return this.$store.getters.delivery
        }
    },
    methods: {
        onResize () {
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
        calc() {
            console.log(this.part_latitude)
            console.log(this.part_longitude)
            console.log(this.items['user_lat'])
            console.log(this.items['user_lng'])
            //緯度経度取得
            let a = this.part_latitude * Math.PI / 180;
            let b = this.part_longitude * Math.PI / 180;
            let c = this.items['user_lat'] * Math.PI / 180;
            let d = this.items['user_lng'] * Math.PI / 180;
            //計算
            this.place = 6371 * Math.acos(Math.cos(a) * Math.cos(c) * Math.cos(d - b) + Math.sin(a) * Math.sin(c))
            this.place = Math.floor(this.place)
        },
        send() {
            if(this.delivery == 1){
                alert('配達中の依頼を完了してください')
            }
            else{
                //パート情報
                console.log(this.part_id)
                console.log(this.username)
                this.array['part_id'] = this.part_id
                this.array['username'] = this.username
                this.array['part_fname'] = this.part_fname
                this.array['part_name'] = this.part_name
                this.array['part_image'] = this.part_image
                this.array['part_latitude'] = this.part_latitude
                this.array['part_longitude'] = this.part_longitude

                //ユーザ情報
                this.array['first_hour'] = this.items['first_hour']
                this.array['first_minute'] = this.items['first_minute']
                this.array['last_hour'] = this.items['last_hour']
                this.array['last_minute'] = this.items['last_minute']
                this.array['user_id'] = this.items['user_id']
                this.array['user_fname'] = this.items['name']
                this.array['user_image'] = this.items['user_image']
                this.array['user_post'] = this.items['user_post']
                this.array['user_address'] = this.items['user_address']
                this.array['user_lat'] = this.items['user_lat']
                this.array['user_lng'] = this.items['user_lng']
                // this.array['part_id'] = this.$store.state.part_id
                this.$store.commit('part_send', this.array)
                this.$router.push('/contact')
            }
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
                this.size_title = 'title',
                this.size_subtitle = 'subtitle-1',
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
