<template>
    <v-card class="pb-6"> 
        <v-card-title class="text-center justify-center pt-3 pb-2">
            <h3>サイト利用の流れ</h3>
        </v-card-title>
        <v-carousel
            cycle
            height="600"
            hide-delimiter-background
            show-arrows-on-hover
            class=""
        >
            <v-carousel-item
              v-for="item in items"
              :key="item.slides"
              class="px-6 pb-4"
            >
              <v-sheet
                  :color="item.color"
                  height="400"
                  width="1400"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <img :width="item.width">
                  </v-row>
              </v-sheet>
              <v-sheet height="200">
                <v-row
                    class=""
                    align="center"
                    justify="center"
                  >
                  <v-card elevation="0" width="100%" align="center" class="display-2 mt-6">{{item.text}}</v-card>
                  <v-card elevation="0" justify="center" class="headline mt-5">{{item.texts}}</v-card>
                </v-row>
              </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items:[
            {color:'green',slides:'First',text:'1.ログイン',texts:'マイページでは色々な情報を見ることができます。'},
            {color:'green',slides:'Second',text:'2.依頼を選ぶ',texts:'マイページから依頼一覧ページを選び、自分に合った依頼を探しましょう！'},
            {color:'green',slides:'Third',text:'3.荷物を受け取りに向かう',texts:'素早く安全に荷物を受け取りに行きましょう！'},
            {color:'green',slides:'Fourth',text:'4.荷物を届ける',texts:'指定の時間内に荷物をお客様の元へ届けます！'}
          ]
      }
    },
    methods:{

    }
  }
</script>