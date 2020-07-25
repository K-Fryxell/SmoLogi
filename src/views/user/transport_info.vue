<template>
    <v-container class="ma-0 pa-0" fluid>
        <Uheader/>
        <v-layout class="ma-0 pa-0" wrap>
            <v-flex xs12 lg12>
                <v-card class="mt-12 pa-0" min-height="561" elevation="0">
                    <v-card-title class="justify-center">運搬情報</v-card-title>
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-col cols="12" lg="2">
                            <!-- 配達希望時刻 -->
                            <v-row justify="end">
                                <v-col lg="auto">
                                    <h2 class="pt-2 display-6 font-weight-light">配達希望時刻</h2>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="auto" style="width:110px;">
                            <v-select
                                v-model="isTime"
                                :items="time"
                                single-line/>
                        </v-col>
                        <v-col cols="auto" class="mt-5 ml-n4">
                            時
                        </v-col>
                        <v-col cols="auto" style="width:110px;">
                            <v-select
                                v-model="isMinute"
                                :items="minute"
                                single-line/>
                        </v-col>
                        <v-col cols="auto" class="mt-5 ml-n4">
                            分
                        </v-col>
                    </v-row>
                    <!-- 荷物の重量 -->
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-col cols="12" lg="2" >
                            <v-row justify="end" class="ma-0 pa-0">
                                <v-col lg="auto">
                                    <h2 class=" pt-3 font-weight-light" display-6>荷物の重量</h2>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="auto" class="mt-7 ml-n4" style="width:50px;">
                            {{weight}}
                        </v-col>
                        <v-col cols="auto" class="mt-7 ml-n4">
                            kg以下
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
                                    <v-card-text >
                                        配達希望時刻:{{isTime}}時{{isMinute}}分<br>
                                        荷物の重量:{{weight}}kg以下
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer/>
                                        <v-btn color="green darken-1" text @click="dialog = false">戻る</v-btn>
                                        <v-btn color="green darken-1" text>確定</v-btn>
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
import Uheader  from '../../components/User/Uheader'
import Ufooter from '../../components/User/Ufooter'
export default {
    data(){
        return{
            //時
            isTime:8,
            time:[8,9,10,11,12,13,14,15,16,17,18,19,20,21],
            //分
            isMinute:15,
            minute:[0,5,10,15,20,25,30,35,40,45,50,55],
            //重さ
            weight:1,
            x:0,
            y:0,
            btnLayout:'end',
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
    methods:{
        select(kg){
            this.weight = kg
        },
        validate(){
            this.$refs.form.validate()
        },
        decide(){
            //時
            this.array['isTime'] = this.isTime
            //分
            this.array['isMinute'] = this.isMinute
            //重さ
            this.array['weight'] = this.weight
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
}
</script>
