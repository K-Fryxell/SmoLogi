<template>
    <v-container class="ma-0 pa-0" fluid>
        <Uheader/>
        <v-layout class="ma-0 pa-0" wrap>
            <v-flex xs12 lg12>
                <v-card class="mt-12 pa-0" min-height="561" elevation="0">
                    <v-card-title class="justify-center">運搬情報</v-card-title>
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-col lg="12">
                            <!-- 配達希望時刻 -->
                            <v-row justify="center" class="mt-0 pa-0">
                                <v-col lg="auto">
                                    <h2 class="pt-2 display-6 font-weight-light">配達時刻</h2>
                                </v-col>
                            </v-row>
                            <v-row justify="center" class="mt-0 pa-0">
                                <v-col cols="auto">
                                    {{first_time}}
                                </v-col>
                                <v-col cols="auto" style="width:50px;">
                                    時
                                </v-col>
                                <v-col cols="auto" style="width:50px;">
                                    {{first_minute}}
                                </v-col>
                                <v-col cols="auto" style="width:50px;">
                                    分
                                </v-col>
                                <v-col cols="auto" >
                                    〜
                                </v-col>
                                <v-col cols="auto" style="width:50px;">
                                    {{last_time}}
                                </v-col>
                                <v-col cols="auto" style="width:50px;">
                                    時
                                </v-col>
                                <v-col cols="auto" style="width:50px;">
                                    {{last_minute}}
                                </v-col>
                                <v-col cols="auto" style="width:50px;">
                                    分
                                </v-col>
                            </v-row>
                            <v-row class="mt-0 pa-0" justify="center" >
                                <v-col cols="4" lg="auto">
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
                                </v-col>
                                <v-col cols="4" lg="auto">
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
                                </v-col>
                                <v-col cols="4" lg="auto">
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
                                </v-col>
                            </v-row>
                            <v-row class="mt-0 pa-0" justify="center">
                                <v-col lg="auto">
                                    <v-radio-group v-model="detailTime" :mandatory="false" row>
                                        <v-radio @click="isTrans" label="詳しく時間指定をする"/>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row lg="12" v-if="detailTime==0" class="mt-0 pa-0" justify="center">
                                <v-col lg="auto">
                                    <h2 class="pt-2 display-6 font-weight-light">配達希望時刻</h2>
                                </v-col>
                                <v-col cols="auto" style="width:110px;">
                                    <v-select
                                        v-model="first_time"
                                        :items="front_time"
                                        single-line/>
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    時
                                </v-col>
                                <v-col cols="auto" style="width:110px;">
                                    <v-select
                                        v-model="first_minute"
                                        :items="front_minute"
                                        single-line/>
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    分
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    〜
                                </v-col>
                                <v-col cols="auto" style="width:110px;">
                                    <v-select
                                        v-model="last_time"
                                        :items="back_time"
                                        single-line/>
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    時
                                </v-col>
                                <v-col cols="auto" style="width:110px;">
                                    <v-select
                                        v-model="last_minute"
                                        :items="back_minute"
                                        single-line/>
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    分
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <!-- 荷物のサイズ -->
                    <v-form ref="form" v-model="valid">
                        <v-row justify="center" class="ma-0 pa-0">
                            <v-col cols="12" lg="12" >
                                <v-row justify="center" class="ma-0 pa-0">
                                    <v-col lg="auto">
                                        <h2 class=" pt-3 font-weight-light" display-6>荷物のサイズ</h2>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-select
                                            :rules="sizeRules"
                                            v-model="isSize"
                                            :items="size"
                                            single-line/>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-form>
                    <!-- 荷物の重量 -->
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-col cols="12" lg="12" >
                            <v-row justify="center" class="ma-0 pa-0">
                                <v-col lg="auto">
                                    <h2 class=" pt-3 font-weight-light" display-6>荷物の重量</h2>
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4" style="width:50px;">
                                    {{weight}}
                                </v-col>
                                <v-col cols="auto" class="mt-5 ml-n4">
                                    kg以下
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row class="mt-0 pa-0" justify="center" >
                        <v-col cols="4" lg="auto">
                            <v-btn
                                @click="select(1)"
                                width="100"
                                height="50"
                                large
                                outlined
                                color="grey darken-2"
                            >
                                1キロ
                            </v-btn>
                        </v-col>
                        <v-col cols="4" lg="auto">
                            <v-btn
                                @click="select(3)"
                                width="100"
                                height="50"
                                large
                                outlined
                                color="grey darken-2"
                            >
                                3キロ
                            </v-btn>
                        </v-col>
                        <v-col cols="4" lg="auto">
                            <v-btn
                                width="100"
                                height="50"
                                @click="select(5)"
                                large
                                outlined
                                color="grey darken-2"
                            >
                                5キロ
                            </v-btn>
                        </v-col>
                    </v-row>
                    <!-- 決定ボタンとダイアログ表示 -->
                    <v-card width="1100" elevation="0">
                        <v-row :justify="btnLayout"  v-resize="onResize" class="mb-12 mt-7 pb-12">
                            <v-dialog
                                v-model="dialog"
                                persistent max-width="500">
                                <template v-slot:activator="{ on, attrs }">
                                    <!-- 決定 -->
                                    <v-btn
                                        :disabled="!valid"
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
                                        荷物のサイズ:{{isSize}}
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
                </v-card>
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
            first_time:9,
            first_minute:0,
            last_time:12,
            last_minute:0,
            //詳しい配達希望時刻
            detailTime:null,
            //最初
            //時
            front_time:[8,9,10,11,12,13,14,15,16,17,18,19,20,21],
            //分
            front_minute:[0,5,10,15,20,25,30,35,40,45,50,55],
            //最後
            //時
            back_time:[8,9,10,11,12,13,14,15,16,17,18,19,20,21],
            //分
            back_minute:[0,5,10,15,20,25,30,35,40,45,50,55],
            //ボタンの色
            gozen:"grey darken-2",
            yugata:"grey darken-2",
            yakan:"grey darken-2",

            //荷物のサイズ
            valid: true,
            isSize:'小(A2サイズ以内、40cm×15cm×60cm以内)',
            size:['小(A2サイズ以内、40cm×15cm×60cm以内)','中(35cm×54cm×48cm以内)','大(110cm×165cm×105cm以内)'],
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
            //荷物のサイズ
            sizeRules:[
                v => !!v || 'サイズを選択してください',
            ]
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
        }
    },
    methods:{
        isTime(a){
            //午前が押された時
            if(a==0){
                this.first_time = 9
                this.last_time = 12
                this.gozen = "green"
                this.yugata = "grey darken-2"
                this.yakan = "grey darken-2"
            }
            //夕方が押された時
            else if(a==1){
                this.first_time = 14
                this.last_time = 16
                this.gozen = "grey darken-2"
                this.yugata = "green"
                this.yakan = "grey darken-2"
            }
            //夜間が押された時
            else{
                this.first_time = 17
                this.last_time = 20
                this.gozen = "grey darken-2"
                this.yugata = "grey darken-2"
                this.yakan = "green"
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
            //名前
            this.array['name'] = this.name
            //時
            this.array['isTime'] = this.isTime
            //分
            this.array['isMinute'] = this.isMinute
            //重さ
            this.array['weight'] = this.weight
            //緯度経度
            this.array['user_lat'] = this.user_latitude
            this.array['user_lng'] = this.user_longitude

            this.$store.commit('transport', this.array)
        },
        onResize(){
            this.x = window.innerWidth;
            this.y = window.innerHeight;
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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function(position){
                let coords = position.coords;
                // 緯度経度だけ取得
                this.user_latitude = coords.latitude;
                this.user_longitude = coords.longitude;
            }.bind(this))
        }
    },
}
</script>
