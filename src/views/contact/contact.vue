<template>
    <v-layout>
        <v-flex xs=12 sm=6 md=6>
            <v-row class="ma-0 pa-0 mx-12">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="9" class="ma-0 pa-0">
                            <v-card class="red pa-5" elevation="0" height="700" tile>
                                <v-card class="green" elevation="0" height="650" tile >
                                    <!-- ここにグーグルマップの表示 -->
                                    <GmapMap
                                        :center="{lat:latitude, lng:longitude}"
                                        :zoom="zoom"
                                        style="width: 100%; height: 100%;"
                                        :options="mapStyle">
                                        <!-- <GmapMarker v-for="(m, id) in marker_items"
                                        :position="m.position"
                                        :title="m.title"
                                        :key="id"
                                        :icon="m.icon"
                                        :clickable="true"
                                        :draggable="true">
                                        </GmapMarker> -->
                                    </GmapMap>
                                </v-card>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="ma-0 pa-0">
                            <v-card class="blue pa-3" height="200" elevation="0" tile>
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-col class="ma-0 pa-0" cols="auto">
                                        <v-avatar color="indigo" size="180" class="ma-0 pa-0">
                                            <span class="white--text headline">配達者の顔</span>
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card  class="orange display-1 py-12" height="400" elevation="0" tile v-if="!tab">
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-col  class="ma-0 pa-0" cols="auto">
                                        ニックネーム
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 pa-0 my-12" justify="center">
                                    <v-col  class="ma-0 pa-0" cols="auto">
                                        到着予定時間
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-col class="ma-0 pa-0" cols="auto">
                                        <v-btn width="290" height="150" class="display-1" fab elevation="0" @click="change">
                                            配達者と話す
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <!-- 切替 -->
                            <v-card class="green display-1 overflow-y-auto" id="takasa" height="350" elevation="0" tile v-else-if="tab">
                                <v-card-text
                                    class="body-1 pb-0 ma-0"
                                    v-for="(item,index) in chat"
                                    :key="item.content"
                                    :index="index"
                                >
                                    ニックネーム:<v-card-text
                                            class="title pt-0 ma-0">
                                            {{item.content}}
                                        </v-card-text>
                                </v-card-text>
                            </v-card>
                            <v-card class="white display-1 overflow-y-auto pa-0 ma-0" height="50" elevation="0" v-if="tab">
                                <v-row class="ma-0 pa-0 px-2">
                                    <v-col cols="10" class="ma-0 pa-0 py-4">
                                        <v-text-field
                                            dense
                                            label="Message"
                                            class="ma-0"
                                            v-model="coment"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="2" class="ma-0 pa-0 py-1">
                                        <v-btn class="pa-0 ma-0 ml-1" tile large color="teal" icon @click="send">
                                            <v-icon class="pa-0 ma-0">mdi-send</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card  class="purple" height="100" elevation="0" tile>
                                <v-row class="ma-0 pa-0" justify="center" style="height:100px;" align="center">
                                    <v-col class="ma-0 pa-0" cols="auto">
                                        <v-btn width="290" height="70" class="display-1" elevation="0">
                                            配達完了
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            緯度：{{latitude}}<br/>経度：{{longitude}}
        </v-flex>
    </v-layout>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'MapComponent',
    data() {
        return {
            latitude: 0,
            longitude: 0,
            coment:"",
            center: { lat: 35.698304, lng: 139.766325 },
            zoom: 18,
            mapStyle: {
                disableDefaultUI: true, // 表示のオプションを指定できます。
                styles: [
                    // console.log(process.env['VUE_APP_API_MAP']),
                    // カスタマイズで使用したスタイルなどはここに。
                ]
            },
            tab:true,
            chat:[]
            // marker_items: [
            //     { position: { lat: YOUR_lat, lng: YOUR_lng }, title: 'title' }
            // ]
        }
    },
    methods:{
        change:function(){
            this.tab = !this.tab
        },
        send:function(){
            // this.chat = []
            firebase.firestore().collection("comments").add({
                content: this.coment,
                createdAt: new Date()
            })
            // .then(
            //     firebase.firestore().collection('comments').get().then(async snapshot => {
            //         await snapshot.forEach(doc => {
            //             //contentは要素
            //             //pushは配列データそのもの
            //             // this.allData.push(doc.data().content)
            //             console.log(doc.data().content)
            //             this.chat.push({
            //                 content:doc.data().content
            //                 })
            //         })
            //     })
            // )
            this.chat.push({
                content:this.coment
                })
            this.coment = ""
        },
    },
    mounted() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function(position){
                let coords = position.coords;
                // 緯度経度だけ取得
                this.latitude = coords.latitude;
                this.longitude = coords.longitude;
            }.bind(this))
        }
    },
    created:function(){
        firebase.firestore().collection('comments').orderBy('createdAt', 'asc').get().then(async snapshot => {
          await snapshot.forEach(doc => {
            //contentは要素
            //pushは配列データそのもの
            // this.allData.push(doc.data().content)
            console.log(doc.data().content)
            this.chat.push({
                content:doc.data().content
                })
          })
        })
    }
}
</script>
