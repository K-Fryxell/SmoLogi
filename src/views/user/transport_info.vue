<template>
    <v-container class="ma-0 pa-0" fluid>
        <Uheader/>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex xs12 lg12>
                    <v-card class="mt-12 pa-0" height="100%" elevation="0">
                        <v-card-title class="justify-center">運搬情報</v-card-title>
                        <v-form ref="form" v-model="decid">
                            <v-row justify="center" class="ma-0 pa-0">
                                <v-col cols="12" lg="2">
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
                            <v-row justify="center" class="ma-0 pa-0">
                                <v-col cols="12" lg="2" >
                                    <v-row justify="end" class="ma-0 pa-0">
                                        <v-col lg="auto">
                                            <h2 class=" pt-3 font-weight-light" display-6>荷物の重量</h2>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="auto" class="mt-6 ml-n4" style="width:50px;">
                                    {{weight}}
                                </v-col>
                                <v-col cols="auto" class="mt-6 ml-n4">
                                    kg以下
                                </v-col>
                            </v-row>
                            <v-row class="mt-2 pa-6" justify="center" >
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
                        </v-form>

                        <v-row justify="center" class="mb-12 mt-5">
                            <v-btn
                                width="100"
                                height="60"
                                x-large
                                :disabled="!decid"
                                @click="decide()"
                            >
                                決定
                            </v-btn>
                        </v-row>
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
            isTime:1,
            time:[8,9,10,11,12,13,14,15,16,17,18,19,20,21],
            //分
            isMinute:1,
            minute:[0,10,15,20,25,30,35,40,45,50,55],
            //重さ
            weight:'',
            x:0,
            y:0,
            size:"display-1",
            array:{},
            decid:true,
        }
    },
    methods:{
        select(kg){
            this.weight = kg
        },
        validate(){
            this.$refs.form.validate()
        },
        decide(){
            this.array['isTime'] = this.isTime
            this.array['isMinute'] = this.isMinute
            this.array['weight'] = this.weight
        }
    },
    components: {
        Ufooter,
        Uheader,
    },
}
</script>
