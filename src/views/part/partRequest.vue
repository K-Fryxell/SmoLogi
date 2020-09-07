<template>
    <content class="ma-0 pa-0">
        <!-- pcヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-sm-and-down" fixed height style="width:100%;" permanent>
			<Header/>
		</v-navigation-drawer>
		<!-- 携帯ヘッダー -->
		<v-navigation-drawer class="ma-0 pa-0 hidden-md-and-up" fixed height style="width:100%; height:70px;" permanent>
			<Header/>
		</v-navigation-drawer>
        <v-card-title class="justify-center ma-0 pa-0 mt-12 py-8 mb-2" v-resize='onResize' :class='size_display'>
            依頼一覧
        </v-card-title>
        <v-container
            id="scroll-target"
            style="max-height: 550px; min-height:300px;"
            class="ma-0 mb-12 pa-0 overflow-y-auto"
            fluid
        >
            <v-layout class="ma-0 pa-0" column>
                <v-row
                    class="ma-0 pa-0"
                    v-scroll:#scroll-target="onScroll"
                    align="center"
                    justify="center"
                    style="height: auto"
                >
                    <v-flex class="ma-0 pa-0" lg3 xs6 v-for="(item,index) in items" :key="index">
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-col class="ma-0 pa-0" cols="12">
                                <v-card class="ma-lg-7 ma-1 pa-0" @click="request(index)">
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
                                    <v-card-text class="ma-2 ml-lg-5 pa-0" v-resize='onResize' :class='size_headline'>
                                        〇依頼者名<br>
                                        ：{{ item.name }}さん
                                    </v-card-text>
                                    <v-card-text class="ma-2 ml-lg-5 pa-0" v-resize='onResize' :class='size_headline'>
                                        〇配達希望時間<br>
                                        ：{{item.first_hour}}時{{item.first_minute}}分～{{item.last_hour}}時{{item.last_minute}}分
                                    </v-card-text>
                                    <v-card-text class="ma-2 ml-lg-5 pa-0 pb-5" v-resize='onResize' :class='size_headline'>
                                        〇荷物の重量<br>
                                        ：{{item.weight}}kg
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-row>
                <v-dialog persistent v-model="no_request" width="500">
                    <v-card>
                        <v-row justify="center" class="pa-0 ma-0">
                            <v-col cols="auto">
                                <v-card-title class="text-center">
                                    ただいま受注可能な依頼がありません<br>
                                    少し時間を空けてご確認ください
                                </v-card-title>
                                <v-row justify="center" class="pa-0 ma-0">
                                    <v-col cols="auto">
                                        <v-btn width="50" to="/part_mypage" @click="no_request=false">
                                            確認
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
                <!-- <partRequestdetails :items=items></partRequestdetails> -->
            </v-layout>
        </v-container>
        <Footer/>
    </content>
</template>
<script>
// import partRequestdetails from '@/components/Part/partRequestdetails'
import Header from '@/components/Part/PartHeader'
import Footer from '@/components/Part/PartFooter'
export default {
    data() {
        return {
            //モーダル
            no_request: false,
            x:window.innerWidth,
            y:window.innerHeight,
            size_card:200,
            size_display:'display-1',
            size_headline:'headline',
            size_title:'title',
            size_subtitle:'subtitle-1',
            size_body:'body-1',
            sumweight:0,
            img:require('@/assets/part/woman.jpg'),
            illust:require('@/assets/part/man.jpg'),
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
          if(this.delivery == 1){
              alert('配達中の依頼を完了してください')
          }
          else{
            this.$store.state.user_info = this.items[a]
            this.$store.commit('request_info', this.items[a])
          }
      },
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
    watch:{
        x:function(){
            if(this.x<600)
            {
                this.size_card = 150,
                this.size_display = 'headline',
                this.size_headline = 'subtitle-1',
                this.size_title = 'subtitle-1',
                this.size_subtitle = 'body-2',
                this.size_body = 'body-1'
            }
            else
            {
                this.size_card = 200,
                this.size_display = 'display-1',
                this.size_headline = 'headline',
                this.size_title = 'title',
                this.size_subtitle = 'subtitle-1',
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
        },
        delivery(){
            return this.$store.getters.delivery
        }
    },
    created:async function(){
        await this.$store.commit('getTtransport')
        // this.items = this.$store.state.trans
        // console.log(this.$store.getters.trans)
    }
}
</script>
