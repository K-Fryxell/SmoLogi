<template>
    <v-card class="pb-6"> 
        <v-card-title class="text-center justify-center pt-3 pb-2" v-resize='onResize' :class='size_display'>
            サイト利用の流れ
        </v-card-title>
        <v-carousel
            cycle
            height=""
            hide-delimiter-background
            show-arrows-on-hover
            class="ma-0 pa-0"
        >
            <v-carousel-item
              v-for="item in items"
              :key="item.slides"
              class="px-6 pb-4"
            >
              <v-sheet
                  :color="item.color"
                  height="300"
                  width=""
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <img :width="item.width">
                  </v-row>
              </v-sheet>
              <v-sheet height="">
                <v-row
                    class="ma-0 pa-0"
                    align="center"
                    justify="center"
                  >
                  <v-card-title elevation="0" width="100%" align="center" class="mt-6" v-resize='onResize' :class='size_headline'>{{item.text}}</v-card-title>
                  <v-card-text elevation="0" justify="center" class="pa-4 text-center" v-resize='onResize' :class='size_title'>{{item.texts}}</v-card-text>
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
        x:window.innerWidth,
        y:window.innerHeight ,
        size_display:'display-1',
        size_headline:'headline',
        size_title:'title',
        size_subtitle:'subtitle-1',
        size_body:'body-1',
        items:[
            {color:'green',slides:'First',text:'1.ログイン',texts:'マイページでは色々な情報を見ることができます。'},
            {color:'green',slides:'Second',text:'2.依頼を選ぶ',texts:'マイページから依頼一覧ページを選び、自分に合った依頼を探しましょう！'},
            {color:'green',slides:'Third',text:'3.荷物を受け取りに向かう',texts:'素早く安全に荷物を受け取りに行きましょう！'},
            {color:'green',slides:'Fourth',text:'4.荷物を届ける',texts:'指定の時間内に荷物をお客様の元へ届けます！'}
          ]
      }
    },
    mounted () {
      this.onResize
    },
    methods: {
      onResize () {
        this.x = window.innerWidth
        this.y = window.innerHeight
      },
    },
    watch:{
        x:function(){
            if(this.x<600)
            {
                this.size_display = 'headline',
                this.size_headline = 'title',
                this.size_title = 'subtitle-1',
                this.size_subtitle = 'body-2',
                this.size_body = 'body-1'//まだ
            }
            else
            {
                this.size_display = 'display-1',
                this.size_headline = 'headline',
                this.size_titele = 'title',
                this.size_subtitele = 'subtitle-1',
                this.size_body = 'body-1'
            }
        }
    }
   
  }
</script>
