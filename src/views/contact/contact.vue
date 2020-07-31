<template>
    <v-layout>
        <v-flex xs=12 sm=6 md=6>
            <v-row class="ma-0 pa-0" v-if="tab == 0">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0" justify="center">
                        <v-col cols="12" class="ma-0 pa-0">
                            <v-card class="green" elevation="0" height="650" tile >
                                <!-- ここにグーグルマップの表示  -->
                                <GmapMap
                                    :center="{lat:user_latitude, lng:user_longitude}"
                                    :zoom="zoom"
                                    :options="mapStyle"
                                    style="width: 100%; height: 100%;">

                                    <GmapInfoWindow
                                        :options="infoOptions"
                                        :position="{lat:user_latitude, lng:user_longitude}"
                                        :opened="infoWinOpen"
                                        @closeclick="infoWinOpen=false"
                                    >あなたの現在地</GmapInfoWindow>
                                    <GmapMarker
                                        @click="toggleInfoWindow(0)"
                                        :position="{lat:user_latitude, lng:user_longitude}"
                                        :clickable="true">
                                    </GmapMarker>

                                    <GmapInfoWindow
                                        :options="infoOptions"
                                        :position="{lat:part_latitude, lng:part_longitude}"
                                        :opened="infoWinOpen2"
                                        @closeclick="infoWinOpen2=false"
                                    >配達者の現在地</GmapInfoWindow>
                                    <GmapMarker
                                        @click="toggleInfoWindow(1)"
                                        :position="{lat:part_latitude, lng:part_longitude}"
                                        :clickable="true">
                                    </GmapMarker>
                                </GmapMap>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="290" height="150" class="display-1" fab elevation="0" @click="change">
                        配達者と話す
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center" style="height:100px;" align="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="290" height="70" class="display-1" elevation="0" @click="dialog=true">
                        配達完了
                    </v-btn>
                </v-col>
            </v-row>
            <v-overlay
                :opacity="opacity"
                :value="overlay"
                v-if="tab == 0"
                >
                <v-row class="ma-0 pa-0" align="end">
                    <v-col cols="auto">
                        <v-btn
                            color="orange lighten-2"
                            @click="overlay = false"
                            tile
                        >
                            Mapに戻る
                        </v-btn>
                        <v-card class="white display-1 overflow-y-auto" max-height="470" height="470" min-width="375" max-width="375" elevation="0" tile>
                            <v-card-text
                                v-for="(item,index) in chat"
                                :key="index"
                                :index="index"
                                class="black--text"
                            >
                                {{ item.name }}:
                                <v-card-text
                                    class="title pt-0 ma-0">
                                    {{item.content}}
                                </v-card-text>
                            </v-card-text>
                        </v-card>

                        <v-card class="display-1 py-2 pl-5 ma-0" outlined max-height="60" elevation="0">
                            <v-row class="ma-0 pa-0" justify="end">
                                <v-col cols="10" class="ma-0 pa-0">
                                    <v-text-field
                                        label="Message"
                                        class="ma-0 black--text"
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
                    </v-col>
                </v-row>
            </v-overlay>

            <v-row class="ma-0 pa-0" v-if="tab == 1">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0" justify="center">
                        <v-col cols="12" class="ma-0 pa-0">
                            <v-card class="green" elevation="0" height="650" tile >
                                <!-- ここにグーグルマップの表示  -->
                                <GmapMap
                                    :center="{lat:user_latitude, lng:user_longitude}"
                                    :zoom="zoom"
                                    :options="mapStyle"
                                    style="width: 100%; height: 100%;">

                                    <GmapInfoWindow
                                        :options="infoOptions"
                                        :position="{lat:user_latitude, lng:user_longitude}"
                                        :opened="infoWinOpen"
                                        @closeclick="infoWinOpen=false"
                                    >あなたの現在地</GmapInfoWindow>
                                    <GmapMarker
                                        @click="toggleInfoWindow(0)"
                                        :position="{lat:user_latitude, lng:user_longitude}"
                                        :clickable="true">
                                    </GmapMarker>

                                    <GmapInfoWindow
                                        :options="infoOptions"
                                        :position="{lat:part_latitude, lng:part_longitude}"
                                        :opened="infoWinOpen2"
                                        @closeclick="infoWinOpen2=false"
                                    >配達者の現在地</GmapInfoWindow>
                                    <GmapMarker
                                        @click="toggleInfoWindow(1)"
                                        :position="{lat:part_latitude, lng:part_longitude}"
                                        :clickable="true">
                                    </GmapMarker>
                                </GmapMap>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center" v-if="tab == 1">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="290" height="150" class="display-1" fab elevation="0" @click="change">
                        配達者と話す
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center" style="height:100px;" align="center" v-if="tab == 1">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="290" height="70" class="display-1" elevation="0" @click="dialog=true">
                        配達完了
                    </v-btn>
                </v-col>
            </v-row>
            <v-overlay
                :opacity="opacity"
                :value="overlay"
                v-if="tab == 1"
                >
                <v-row class="ma-0 pa-0" align="end">
                    <v-col cols="auto">
                        <v-btn
                            color="orange lighten-2"
                            @click="overlay = false"
                            tile
                        >
                            Mapに戻る
                        </v-btn>
                        <v-card class="white display-1 overflow-y-auto" max-height="470" height="470" min-width="375" max-width="375" elevation="0" tile>
                            <v-card-text
                                v-for="(item,index) in chat"
                                :key="index"
                                :index="index"
                                class="black--text"
                            >
                                {{ item.name }}:
                                <v-card-text
                                    class="title pt-0 ma-0">
                                    {{item.content}}
                                </v-card-text>
                            </v-card-text>
                        </v-card>

                        <v-card class="display-1 py-2 pl-5 ma-0" outlined max-height="60" elevation="0">
                            <v-row class="ma-0 pa-0" justify="end">
                                <v-col cols="10" class="ma-0 pa-0">
                                    <v-text-field
                                        label="Message"
                                        class="ma-0 black--text"
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
                    </v-col>
                </v-row>
            </v-overlay>
            <v-dialog v-model="dialog" width="500" v-if="tab == 1">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                依頼を完了しますか?
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" @click="dialog=false">
                                        いいえ
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn width="50">
                                        はい
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'MapComponent',
    data() {
        return {
            tab:0,
            infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            },
            infoWindowPos: null,
            infoWinOpen: false,
            infoWinOpen2: false,
            user_latitude: 0,
            user_longitude: 0,
            part_latitude: 0,
            part_longitude: 0,
            coment:"",
            // center: { lat: 35.698304, lng: 139.766325 },
            zoom: 18,
            mapStyle: {
                disableDefaultUI: false, // 表示のオプションを指定できます。
                gestureHandling: 'cooperative',
                styles: [
                    // console.log(process.env['VUE_APP_API_MAP']),
                    // カスタマイズで使用したスタイルなどはここに。
                ]
            },
            chat:[],
            // marker_items: [
            //     { position: { lat: YOUR_lat, lng: YOUR_lng }, title: 'title' }
            // ],
            absolute: true,
            opacity: 0.4,
            overlay: false,
            dialog:false
        }
    },
    methods:{
        toggleInfoWindow(flg) {
            // this.infoWindowPos = marker.position
            if(flg == 0){
                this.infoWinOpen = true
                this.infoWinOpen2 = false
            }
            else{
                this.infoWinOpen2 = true
                this.infoWinOpen = false
            }
            // console.log("markerClick")
        },
        change:function(){
            this.overlay = !this.overlay
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
                this.user_latitude = coords.latitude;
                this.user_longitude = coords.longitude;
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
        this.tab = this.$store.state.judge
    }
}
</script>
