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
              <v-col cols="12" lg="5">
                <v-img
                  class="my-3 pa-0"
                  :src="imageurl"
                  contain
                  height="150"/>
              </v-col>
              <v-col cols="12" lg="6" v-resize="onResize" :class="size"
                class="font-weight-light">
                {{name}}:{{item.name}}<br/>
                {{usage_day}}:{{item.usage_day}}<br/>
                {{evaluation}}:<v-btn :key="item.id"  class="ma-2" text icon color="blue lighten-2"><v-icon>mdi-thumb-up</v-icon></v-btn>
                <v-btn class="ma-2" text icon color="red lighten-2">
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
        data() {
            return {
                name:'名前',
                usage_day:'利用日',
                evaluation:'評価',
                imageurl:require("../../assets/people.jpg"),
                x:0,
                y:0,
                size:"display-1",
                items: [
                    {
                      name:'田中太郎',
                      usage_day:'2020年03月25日',
                      evaluation:''
                    },
                    {
                      name:'中川武',
                      usage_day:'2020年05月25日',
                    },
                    {
                      name:'中川聖',
                      usage_day:'2020年02月25日'
                    },
                    {
                    name:'中川聖',
                      usage_day:'2020年02月25日'
                    },
                    {
                      name:'中川聖',
                      usage_day:'2020年02月25日'
                    },
                    {
                    name:'中川聖',
                      usage_day:'2020年02月25日'
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
                },components:{
                  Ufooter,
                  Uheader,
                },
              }
</script>
