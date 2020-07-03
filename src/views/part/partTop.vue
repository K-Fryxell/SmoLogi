<template>
  <content>
  <!-- ヘッダー -->
    <TopHeader/>
    <v-card>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="auto"
            class="text-center pl-0"
          >
            <v-row
              class="flex-column ma-0 mt-3"
              justify="center"
            >
            <v-col class="px-0">
                <v-card-text height="200" class="display-1">
                  ニモチの利用方法
                </v-card-text>
              </v-col>
              <v-col class="px-0">
                <v-card-text style="line-height: 1.9em" width="100" class="headline">
                    「ニモチ」ではパートナー登録していただいた方に利用者様の荷物をご自宅まで運んでいただきます
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-img
              width="550"
              src="../../assets/図1.png"
              class="mt-3 mr-n6"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <hr size="8"
    color="#1B5E20"
    elevation="2"
    noshade/>
    <!-- スライダー -->
    <Slider/>
    <hr 
    size="8"
    color="#1B5E20"
    elevation="2"
    noshade/>
    <!-- 利用車種例 -->
    
    <v-card>
      <v-card-title class="justify-center">
        <h3>利用車種の例</h3>
      </v-card-title>
      <v-container fluid>
        <v-row justify="space-around" class="px-6">
            <v-card
              v-for="item in items"
              :key="item.name"
              tile
              style="border:solid 2px grey;"
              elevation="0"
            >
              <v-col style="text-align:center;">
                <v-card-text class="mt-5">
                  <img :src="item.img" width="150" height="110" class="mt-n6"/>
                  <p>
                    {{item.name}}
                  </p>
                </v-card-text>
              </v-col>
            </v-card>
        </v-row>
      </v-container>
    </v-card>
    <hr 
    size="8"
    color="#1B5E20"
    elevation="2"
    noshade/>
    <!-- フッター -->
  </content>
</template>


<script>
import Slider from '../../components/Part/Top/Slider.vue';
import TopHeader from '../../components/Part/Top/TopHeader.vue';
export default {
    data (){
    return{
      items:[
        {img:require('@/assets/bike1.jpg'),name:'自転車'},
        {img:require('@/assets/bike2.jpg'),name:'バイク'},
        {img:require('@/assets/car1.jpg'),name:'軽自動車'},
        {img:require('@/assets/car2.jpg'),name:'普通自動車'},
        {img:require('@/assets/car3.jpg'),name:'軽トラック'}
      ],
    }
  },
    computed: {},
    components:{
        Slider,
        TopHeader
    },
    methods:{}
}
</script>
