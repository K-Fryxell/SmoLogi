<template>
    <v-container class="ma-0 pa-0" fluid>
        <Uheader/>
        <v-layout class="ma-0 pa-0">
            <v-flex class="ma-0 pa-0" xs12 md12 sm12 lg12>
                <v-card-title class="ma-0 pa-0 text--black justify-center headline">
                    <span style="text-decoration:underline; text-underline-position: under; text-decoration-thickness: 15px">
                        配達依頼情報
                    </span>
                </v-card-title>
                <v-row class="ma-0 pa-0" justify="center" style="background-color: #F6F6F6">
                    <v-col cols="auto" md="6" sm="6" lg="6">
                        <v-card class="ma-0 pa-0" min-height="561" elevation="0" style="background-color: #F6F6F6">
                            <v-row justify="center" class="ma-0 pa-0">
                                <v-col cols="auto">
                                    <!-- 配達希望時刻 -->
                                    <v-row class="mb-5 mt-6 pa-0" justify="center">
                                        <v-col cols="12" lg="auto">
                                            <span style="font-size: 23px;">配達希望時刻：</span>
                                        </v-col>
                                        <v-col cols="6" lg="auto">
                                            <span style="font-size: 23px;">
                                                {{first_time}}時{{first_minute}}分から
                                            </span>
                                        </v-col>
                                        <v-col cols="6" lg="auto">
                                            <span style="font-size: 23px;">
                                                {{last_time}}時{{last_minute}}分まで
                                            </span>
                                        </v-col>
                                    </v-row>

                                    <v-row justify="center" class="mt-0 pa-0">
                                        <v-col cols="4" lg="auto">
                                            <v-row class="ma-0 pa-0" justify="end">
                                                <v-btn
                                                    @click="isTime(0)"
                                                    width="100"
                                                    height="50"
                                                    large
                                                    outlined
                                                    :color="gozen"
                                                >
                                                    午前
                                                </v-btn>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4" lg="auto">
                                            <v-row class="ma-0 pa-0" justify="center">
                                                <v-btn
                                                    @click="isTime(1)"
                                                    width="100"
                                                    height="50"
                                                    large
                                                    outlined
                                                    :color="yugata"
                                                >
                                                    夕方
                                                </v-btn>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4" lg="auto">
                                            <v-row class="ma-0 pa-0" justify="start">
                                                <v-btn
                                                    width="100"
                                                    height="50"
                                                    @click="isTime(2)"
                                                    large
                                                    outlined
                                                    :color="yakan"
                                                >
                                                    夜間
                                                </v-btn>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mt-2 pa-0">
                                        <v-col lg="auto">
                                            <v-radio-group v-model="detailTime" :mandatory="false" row>
                                                <v-radio color="green" @click="isTrans" label="詳しく時間指定をする"/>
                                            </v-radio-group>
                                        </v-col>
                                    </v-row>
                                    <v-row v-if="detailTime==0" class="mt-0 pa-0" justify="center">
                                        <v-col class="mt-5" cols="12">
                                            <span style="font-size: 20px;">配達希望時刻：</span>
                                        </v-col>
                                        <v-col cols="auto" style="width:100px;">
                                            <v-select
                                                v-model="first_time"
                                                :items="firstTime"
                                                single-line/>
                                        </v-col>
                                        <v-col cols="auto" class="mt-8 pa-0">
                                            <span style="font-size: 18px;">時</span>
                                        </v-col>
                                        <v-col cols="auto" style="width:100px;">
                                            <v-select
                                                v-model="first_minute"
                                                :items="firstMinute"
                                                single-line/>
                                        </v-col>
                                        <v-col cols="auto" class="mt-8 pa-0">
                                            <span style="font-size: 18px;">分から</span>
                                        </v-col>
                                        <v-col cols="auto" style="width:100px;">
                                            <v-select
                                                v-model="last_time"
                                                :items=" lastTime"
                                                single-line/>
                                        </v-col>
                                        <v-col cols="auto" class="mt-8 pa-0">
                                            <span style="font-size: 18px;">時</span>
                                        </v-col>
                                        <v-col cols="auto" style="width:100px;">
                                            <v-select
                                                v-model="last_minute"
                                                :items="lastMinute"
                                                single-line/>
                                        </v-col>
                                        <v-col cols="auto" class="mt-8 pa-0">
                                            <span style="font-size: 18px;">分まで</span>
                                        </v-col>
                                    </v-row>
                                    <!-- 荷物のサイズ -->
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="12" lg="12" >
                                            <v-row  class="ma-0 pa-0">
                                                <v-col class="mt-5 mb-4 ml-n3 pa-0" cols="12" lg="auto">
                                                    <span style="font-size: 20px;">荷物のサイズ：</span>
                                                </v-col>
                                                <v-col class="ml-n3 pa-0" cols="12" lg="12">
                                                    <v-select
                                                        v-model="size"
                                                        :items="isSize"
                                                        single-line/>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <!-- 荷物の重量 -->
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="12" lg="12" >
                                            <v-row class="mb-5 pa-0">
                                                <v-col lg="auto" cols="6" class="mt-5 ml-n3">
                                                    <span style="font-size: 20px;">荷物の重量:</span>
                                                </v-col>
                                                <v-col lg="auto" cols="6" class="mt-5 ml-n4" style="font-size: 20px;">
                                                    {{weight}}kg以下
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mt-0 pa-0" justify="center">
                                        <v-col cols="4" lg="auto">
                                            <v-row class="ma-0 pa-0" justify="end">
                                                <v-btn
                                                    @click="select(1);selectColor(0)"
                                                    width="100"
                                                    height="50"
                                                    large
                                                    outlined
                                                    :color="onekg"
                                                >
                                                    1キロ
                                                </v-btn>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4" lg="auto">
                                            <v-row class="ma-0 pa-0" justify="center">
                                                <v-btn
                                                    @click="select(3);selectColor(1)"
                                                    width="100"
                                                    height="50"
                                                    large
                                                    outlined
                                                    :color="threekg"
                                                >
                                                    3キロ
                                                </v-btn>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4" lg="auto">
                                            <v-row class="ma-0 pa-0" justify="start">
                                                <v-btn
                                                    width="100"
                                                    height="50"
                                                    @click="select(5);selectColor(2)"
                                                    large
                                                    outlined
                                                    :color="fivekg"
                                                >
                                                    5キロ
                                                </v-btn>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <!-- 決定ボタンとダイアログ表示 -->
                                    <v-card width="1100" elevation="0" justify="center" style="background-color: #F6F6F6">
                                        <v-row :justify="btnLayout"  v-resize="onResize" class="mb-12 mt-7 pb-12">
                                            <v-dialog
                                                v-model="dialog"
                                                persistent max-width="500">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <!-- 決定 -->
                                                    <v-btn
                                                        dark
                                                        style="background-color: #83B590"
                                                        width="100"
                                                        height="60"
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        x-large
                                                    >
                                                        決定
                                                    </v-btn>
                                                </template>
                                                <v-card>
                                                    <!-- ダイアログの中身 -->
                                                    <v-card-title class="headline">運搬情報</v-card-title>
                                                    <v-card-text>
                                                        配達希望時刻:{{first_time}}時{{first_minute}}分〜{{last_time}}時{{last_minute}}分
                                                        <br>
                                                        荷物のサイズ:{{size}}
                                                        <br>
                                                        荷物の重量:{{weight}}kg以下
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-spacer/>
                                                        <v-btn color="green darken-1" text @click="dialog = false">戻る</v-btn>
                                                        <v-btn color="green darken-1" text @click="decide()">確定</v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                        </v-row>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
        <Ufooter/>
    </v-container>
</template>
<script>
import Uheader  from '@/components/User/Header'
import Ufooter from '@/components/User/Footer'
export default {
    data(){
        return{
            //時間
            //配達希望時刻(午前、夕方、夜間)
            first_time:'09',
            first_minute:'00',
            last_time:'12',
            last_minute:'00',
            //詳しい配達希望時刻
            detailTime:null,
            //最初
            //時
            firstTime:['08','09','10','11','12','13','14','15','16','17','18','19','20','21'],
            //分
            firstMinute:['00','05','10','15','20','25','30','35','40','45','50','55'],
            //最後
            //時
            lastTime:['08','09','10','11','12','13','14','15','16','17','18','19','20','21'],
            //分
            lastMinute:['00','05','10','15','20','25','30','35','40','45','50','55'],
            //時空
            first:'',
            last:'',
            //ボタンの色(午前、午後、夜間)
            gozen:"grey darken-2",
            yugata:"grey darken-2",
            yakan:"grey darken-2",
            //ボタンの色(1kg、3kg、5kg)
            onekg:"grey darken-2",
            threekg:"grey darken-2",
            fivekg:"grey darken-2",
            //荷物のサイズ
            size:'小(A2サイズ以内、40cm×15cm×60cm以内)',
            isSize:['小(A2サイズ以内、40cm×15cm×60cm以内)','中(35cm×54cm×48cm以内)','大(110cm×165cm×105cm以内)'],
            //重さ
            weight:1,
            x:0,
            y:0,
            btnLayout:'end',
            //緯度経度
            user_latitude:0,
            user_longitude:0,
            //ダイアログ
            dialog: false,
            array:{},
        }
    },
    mounted(){
        window.addEventListener('resize', this.onResize)
    },
    beforeDestory(){
        window.removeEventListener('resize',this.onResize)
    },
    computed: {
        name() {
            return this.$store.getters.user_fname
        },
        user_image(){
            return this.$store.getters.user_image
        },
        user_post(){
            return this.$store.getters.user_post
        },
        user_address(){
            return this.$store.getters.user_address
        },
        request:{
            get(){
                return this.$store.getters.request
            },
            set(value){
                return this.$store.commit('set_request',value)
            }
        }
    },
    methods:{
        isTime(a){
            //午前が押された時
            if(a==0){
                this.first_time = '09'
                this.last_time = '12'
                this.gozen = "green"
                this.yugata = "grey darken-2"
                this.yakan = "grey darken-2"
            }
            //夕方が押された時
            else if(a==1){
                this.first_time = '14'
                this.last_time = '16'
                this.gozen = "grey darken-2"
                this.yugata = "green"
                this.yakan = "grey darken-2"
            }
            //夜間が押された時
            else{
                this.first_time = '17'
                this.last_time = '20'
                this.gozen = "grey darken-2"
                this.yugata = "grey darken-2"
                this.yakan = "green"
            }
            this.first_minute = '00'
            this.last_minute = '00'
        },
        selectColor(a){
            if(a==0){
                this.onekg = "green"
                this.threekg = "grey darken-2"
                this.fivekg = "grey darken-2"
            }
            else if(a==1){
                this.onekg = "grey darken-2"
                this.threekg = "green"
                this.fivekg = "grey darken-2"
            }
            else{
                this.onekg = "grey darken-2"
                this.threekg = "grey darken-2"
                this.fivekg = "green"
            }
        },
        isTrans(){
            if(this.detailTime==0){
                this.detailTime = null
            }
            else{
                this.detailTime = 0
            }
        },
        select(kg){
            this.weight = kg
        },
        validate(){
            this.$refs.form.validate()
        },
        decide(){
            if(this.request == 0){
                //計算の処理 (jsでは数値として扱える文字列は自動的に数値として扱われる)
                this.first = this.first_time+this.first_minute
                this.last = this.last_time+this.last_minute
                console.log(this.first)
                console.log(this.last)
                if(this.first < this.last){
                    //ユーザアイコン
                    this.array['user_image'] = this.user_image
                    //郵便番号 住所
                    this.array['user_post'] = this.user_post
                    this.array['user_address'] = this.user_address
                    //名前
                    this.array['name'] = this.name
                    //最初
                    //時
                    this.array['first_time'] = this.first_time
                    //分
                    this.array['first_minute'] = this.first_minute
                    //最後
                    //時
                    this.array['last_time'] = this.last_time
                    //分
                    this.array['last_minute'] = this.last_minute
                    //荷物のサイズ
                    this.array['size'] = this.size
                    //重さ
                    this.array['weight'] = this.weight
                    //緯度経度
                    this.array['user_lat'] = this.user_latitude
                    this.array['user_lng'] = this.user_longitude

                    this.$store.commit('transport', this.array)
                }
                else{
                    alert('配達希望時刻の値が不適切です')
                }
            }
            else{
                alert('既に依頼中です')
            }
        },
        onResize(){
            this.x = window.innerWidth
            this.y = window.innerHeight
        },
    },
    watch:{
        x:function(){
            if(this.x<=600)
            {
                this.btnLayout= 'center'
            }else
            {
                this.btnLayout='end'
            }
        }
    },
    components: {
        Ufooter,
        Uheader,
    },
    created() {
        this.request = this.$store.getters.request
        console.log(this.request)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function(position){
                let coords = position.coords
                // 緯度経度だけ取得
                this.user_latitude = coords.latitude
                this.user_longitude = coords.longitude
            }.bind(this))
        }
    },
}
</script>
<style lang="scss">
h2{
    text-align: center;
}
</style>
