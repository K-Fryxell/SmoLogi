<template>
    <content>
        <Header/>
        <v-card-title class="justify-center mt-12 display-2">依頼一覧</v-card-title>
        <v-container fluid>
            <v-layout column>
                <v-row class="ma-0 pa-0" justify="center">
                    <v-flex lg4 xs6 v-for="(item,index) in items" :key="index">
                        <v-row class="ma-0 pa-0" justify="center">
                        <v-col class="ma-6 pa-0" cols="10" lg="7">
                        <v-card @click="request(index)">
                            依頼場所まで:{{item.place}}m<br/>
                            <v-img
                                v-resize='onResize' :height='size_card'
                                v-if="item.gender==0"
                                :src="illust"
                                class="my-3"
                                contain
                                />
                            <v-img
                                v-resize='onResize' :height='size_card'
                                v-else-if="item.gender==1"
                                :src="img"
                                class="my-3"
                                contain
                            />
                            配達希望時間:{{item.isTime}}時{{item.isMinute}}分<br/>
                            荷物の重量:{{item.weight}}kg
                        </v-card>
                        </v-col>
                        </v-row>
                    </v-flex>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card class="mx-auto" max-width="344">
                            <v-card-text class="display-1">総重量:{{weight}}kg</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- <partRequestdetails :items=items></partRequestdetails> -->
            </v-layout>
        </v-container>
        <Footer/>
    </content>
</template>
<script>
// import partRequestdetails from '@/components/Part/partRequestdetails'
import Header from '../../components/Part/Header';
import Footer from '../../components/Part/Footer';
export default {
    data() {
        return {
            x:window.innerWidth,
            y:window.innerHeight,
            size_card:200,
            size_display:'display-1',
            size_headline:'headline',
            size_title:'title',
            size_subtitle:'subtitle-1',
            size_body:'body-1',
            sumweight:0,
            img:require('@/assets/part/obaachan.png'),
            illust:require('@/assets/part/ojiichan.png'),
            place:'2000',
            time:'120',
            // items: [
            //     // {
            //     //     illust:require('@/assets/part/obaachan.png'),
            //     //     place:'2000',
            //     //     time:'120',
            //     //     weight:'2'
            //     // },
            //     // {
            //     //     illust:require('@/assets/part/ojiichan.png'),
            //     //     place:'2000',
            //     //     time:'120',
            //     //     weight:'2'
            //     // },
            // ]
        }
    },
    components:{
        //partRequestdetails
        Header,
        Footer
    },
    mounted () {
      this.onResize
    },
    methods: {
      onResize () {
        this.x = window.innerWidth
        this.y = window.innerHeight
      },
      request(a){
        //   console.log(this.items[a])
          this.$store.state.user_info = this.items[a]
          this.$router.push('/part_requestdetails')
      }
    },
    watch:{
        x:function(){
            if(this.x<600)
            {
                this.size_card = 150,
                this.size_display = 'headline',
                this.size_headline = 'title',
                this.size_title = 'subtitle-1',
                this.size_subtitle = 'body-2',
                this.size_body = 'body-1'
            }
            else
            {
                this.size_card = 200,
                this.size_display = 'display-1',
                this.size_headline = 'headline',
                this.size_titele = 'title',
                this.size_subtitele = 'subtitle-1',
                this.size_body = 'body-1'
            }
        }
    },
    computed:{
        items(){
            return this.$store.getters.trans
        },
        weight(){
            return this.$store.getters.part_weight
        }
    },
    created:async function(){
        await this.$store.commit('getTtransport')
        // this.items = this.$store.state.trans
        // console.log(this.$store.getters.trans)
    }
}
</script>
