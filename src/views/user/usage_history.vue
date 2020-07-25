<template>
    <v-container class="ma-0 pa-0" fluid>
        <Uheader/>
            <v-layout class="ma-0 pa-0" wrap>
                <v-flex xs12 lg12>
                    <v-card-title class="justify-center mt-10">利用履歴</v-card-title>
                    <v-row class="ma-0 pa-0" justify="center">
                        <v-col cols="auto" lg="auto" v-for="item in items" :key="item.id">
                            <v-card class="mx-6 pa-0" max-width="1000">
                                <v-row class="ma-0 pa-0">
                                    <!-- 配達者画像 -->
                                    <v-col cols="12" lg="5">
                                        <v-img
                                            class="my-3 pa-0"
                                            :src="imageurl"
                                            contain
                                            height="150"/>
                                    </v-col>
                                    <!-- 名前、利用日、評価 -->
                                    <v-col
                                        cols="12" lg="6"
                                        v-resize="onResize"
                                        :class="size"
                                        class="font-weight-light"
                                    >
                                        名前:{{item.user_name}}<br/>
                                        利用日:{{item.day}}<br/>
                                        評価:
                                        <v-btn class="ma-2" @click="clickEvaluation(0)" icon color="blue lighten-2">
                                            <v-icon>mdi-thumb-up</v-icon>
                                        </v-btn>
                                        <v-btn class="ma-2" @click="clickEvaluation(1)" icon color="red lighten-2">
                                            <v-icon>mdi-thumb-down</v-icon>
                                        </v-btn>
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
import Uheader  from '../../components/User/Uheader'
import Ufooter from '../../components/User/Ufooter'
export default {
    data(){
        return {
            //評価
            evaluation: 2,
            //画像
            imageurl:require("../../assets/people.jpg"),
            x:0,
            y:0,
            size:"display-1",
            items: [
                {
                    user_name:'田中太郎',
                    day:'2020年03月25日',
                },
                {
                    user_name:'中川武',
                    day:'2020年05月25日',
                },
                {
                    user_name:'中川聖',
                    day:'2020年02月25日',
                },
                {
                    user_name:'中川聖',
                    day:'2020年02月25日',
                },
                {
                    user_name:'中川聖',
                    day:'2020年02月25日',
                },
                {
                    user_name:'中川聖',
                    day:'2020年02月25日',
                }
            ]
        }
    },
    mounted(){
        window.addEventListener('resize', this.onResize)
    },
    beforeDestory(){
        window.removeEventListener('resize',this.onResize)
    },
    methods:{
        onResize(){
            this.x = window.innerWidth;
            this.y = window.innerHeight;
        },
        clickEvaluation(a){
            this.evaluation = a
            }
    },
    watch:{
        x:function(){
            if(this.x<=600)
            {
                this.size= 'display-6'
            }else
            {
                this.size='display-1'
            }
        }
    },
    components:{
        Ufooter,
        Uheader,
    }
}
</script>
