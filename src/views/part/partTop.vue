<template>
  <content class="ma-0 pa-0">
    <!-- ヘッダー -->
    <TopHeader/>
    <v-container class="ma-0 pa-0" fluid >
      <v-layout class="ma-0 pa-0" wrap>
        <v-card  class="ma-0 pa-0" elevation="0">
          <v-card-title class="justify-center mt-5">
            <h3>ニモチの利用方法</h3>
          </v-card-title>
          <v-row  class="ma-0 pa-0" justify="center">
            <v-col
            class="ma-0 pa-0 text-center pl-0"
            cols="12"
            lg="4"
            >
              <v-card-text class="mt-3 subtitle-1">
                「ニモチ」ではパートナー登録していただいた方に利用者様の荷物をご自宅まで運んでいただきますaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </v-card-text>
            </v-col>           
            <v-col class="ma-0 pa-0 mb-6"
            cols="12" 
            lg="4"
            >
              <v-img
                src="../../assets/partTop/図1.png"
                class="mt-3 mr-n6"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-layout>
    </v-container>

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
    <v-container fluid class="ma-0 pt-5 pb-12">
      <v-card elevation="0" class="ma-0 pa-0">
      <v-card-title class="justify-center">
        <h3>利用車種の例</h3>
      </v-card-title>
        <v-row justify="space-around" class="px-6 pt-5">
            <v-card
              v-for="item in items"
              :key="item.name" cols="4"
              class="justify-center ma-0 pa-0"
              tile
              style="border:solid 2px grey;"
              elevation="0"
            >
              <v-col>
                <v-card-text class="bule mt-5 text-center">
                  <img :src="item.img" width="110" height="80" class="ma-0 pa-0"/>
                  <p>
                    {{item.name}}
                  </p>
                </v-card-text>
              </v-col>
            </v-card>
        </v-row>
      </v-card>
    </v-container>
    <hr 
    size="8"
    color="#1B5E20"
    elevation="2"
    noshade/>
    <!-- フッター -->
    <Footer/>
  </content>
</template>


<script>
import Slider from '../../components/Part/Top/Slider.vue';
import TopHeader from '../../components/Part/Top/TopHeader.vue';
import Footer from '../../components/Part/Footer.vue';
export default {
    data (){
    return{
      items:[
        {img:require('@/assets/partTop/bike1.jpg'),name:'自転車'},
        {img:require('@/assets/partTop/bike2.jpg'),name:'バイク'},
        {img:require('@/assets/partTop/car1.jpg'),name:'普通自動車'},
        {img:require('@/assets/partTop/car3.jpg'),name:'軽トラック'}
      ],
    }
  },
    computed: {},
    components:{
        Slider,
        TopHeader,
        Footer
    },
    methods:{}
}
</script>