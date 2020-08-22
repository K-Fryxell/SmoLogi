<template>
    <v-layout class="ma-0 pa-0">
        <v-flex class="ma-0 pa-0 pa-lg-9 pa-md-8" xs12 sm8 md8 lg8>
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
            <v-row class="ma-0 mt-3 pa-0" justify="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" lg="8" cols="11">
                    <v-card-text class="ma-0 pa-0" v-resize='onResize' :class='size_title'>
                        ただいま{{ part_Name }}さんが荷物を受け取りに向かっています。
                    </v-card-text>
                </v-col>
            </v-row>
            <!-- 配達者顔写真と到着予定時刻の表示 -->
            <v-row class="ma-0 mt-5 pa-0" justify="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" cols="3">
                    <!-- レイアウト仮置き -->
                    <v-avatar class="ma-0 pa-0" color="green light5" size="80">
                        <span class="white--text body-1">アイコン</span>
                    </v-avatar>
                    <!-- <img
                        v-if="this.$store.state.img=='no_image'"
                        class="mt-5 ml-6"
                        src="@/assets/icon.jpg"
                        alt="アイコン"
                        width="80"
                        style="border-radius: 50px;"
                    >
                    <img
                        v-if="this.$store.state.img!='no_image'"
                        class="mt-5 ml-6"
                        :src="this.$store.state.img"
                        alt="アイコン"
                        width="80"
                        style="border-radius: 50px;"
                    > -->
                </v-col>
                <v-col class="ma-0 mt-2 pa-0" cols="7">
                    <v-card-title class="ma-0 pa-0">
                        到着予定時刻<br>
                    </v-card-title>
                    <v-card-title class="ma-0 pa-0 pl-12">
                        {{ houre }}時{{ minute }}分
                    </v-card-title>
                </v-col>
            </v-row>
            <v-row class="ma-0 mt-6 pa-0" justify="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="300" height="60" class="green white--text" elevation="0" @click="change" v-resize='onResize' :class='size_headline'>
                        配達者と話す
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="ma-0 mt-6 pa-0" justify="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="300" height="60" class="green white--text" elevation="0" @click="user_Refusal=true" v-resize='onResize' :class='size_headline'>
                        拒否する
                    </v-btn>
                </v-col>
            </v-row>
            <!-- ここからチャット -->
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
            <!-- 最初から表示マッチング待機画面_ローディングマークつける前だよ -->
            <!-- <v-dialog v-model="user_Matching" width="500" v-if="tab == 0">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                マッチング中
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" @click="user_Refusal=true">
                                        拒否する
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog> -->

            <!-- 拒否ボタン押下時 -->
            <v-dialog v-model="user_Refusal" width="500" v-if="tab == 0">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                本当に配達を拒否しますか？
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" @click="user_Refusal=false">
                                        いいえ
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <!-- ここはfirebase処理 -->
                                    <!-- 「はい」ボタン押下時、part側でpart_Cancelモーダルを開かせたい -->
                                    <v-btn width="50" to="/user_mypage" @click="part_Cancel=true">
                                        はい
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
            <!-- part側で荷物受け取り完了ボタン押下時 -->
            <v-dialog v-model="user_Delivery" width="500" v-if="tab == 0">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                荷物受け渡し完了
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" to="/transport" @click="user_Delivery=false">
                                        確認
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>

            <!-- ここからpart側 -->
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
            <v-row class="ma-0 mt-3 pa-0" justify="center" v-if="tab == 1">
                <v-col class="ma-0 pa-0" lg="8" cols="11">
                    <v-card-text class="ma-0 pa-0" v-resize='onResize' :class='size_title'>
                        {{ user_Name }}様へ荷物を受け取りに向かっています。
                    </v-card-text>
                </v-col>
            </v-row>
            <!-- お客様のアイコンと到着予定時刻の表示 -->
            <v-row class="ma-0 mt-5 pa-0" justify="center" v-if="tab == 1">
                <v-col class="ma-0 pa-0" cols="3">
                    <!-- レイアウト仮置き -->
                    <v-avatar class="ma-0 pa-0" color="green light5" size="80">
                        <span class="white--text body-1">アイコン</span>
                    </v-avatar>
                    <!-- <img
                        v-if="this.$store.state.img=='no_image'"
                        class="mt-5 ml-6"
                        src="@/assets/icon.jpg"
                        alt="アイコン"
                        width="80"
                        style="border-radius: 50px;"
                    >
                    <img
                        v-if="this.$store.state.img!='no_image'"
                        class="mt-5 ml-6"
                        :src="this.$store.state.img"
                        alt="アイコン"
                        width="80"
                        style="border-radius: 50px;"
                    > -->
                </v-col>
                <v-col class="ma-0 mt-2 pa-0" cols="7">
                    <v-card-title class="ma-0 pa-0">
                        到着予定時刻<br>
                    </v-card-title>
                    <v-card-title class="ma-0 pa-0 pl-12">
                        {{houre}}時{{minute}}分
                    </v-card-title>
                </v-col>
            </v-row>
            <v-row class="ma-0 mt-6 pa-0" justify="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="300" height="60" class="green white--text" elevation="0" @click="change" v-resize='onResize' :class='size_headline'>
                        配達者と話す
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="ma-0 mt-6 pa-0" justify="center" v-if="tab == 0">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="300" height="60" class="green white--text" elevation="0" @click="user_Refusal=true" v-resize='onResize' :class='size_headline'>
                        拒否する
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="ma-0 mt-6 pa-0" justify="center" v-if="tab == 1">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="300" height="60" class="green white--text" elevation="0" @click="change" v-resize='onResize' :class='size_headline'>
                        お客様と話す
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" justify="center" style="height:100px;" align="center" v-if="tab == 1">
                <v-col class="ma-0 pa-0" cols="auto">
                    <v-btn width="300" height="60" class="green white--text" elevation="0" @click="part_Delivery=true" v-resize='onResize' :class='size_headline'>
                        荷物受け取り完了
                    </v-btn>
                </v-col>
            </v-row>
            <!-- ここからチャット -->
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
            <!-- user_Refusalモーダルで「はい」ボタン押下時 -->
            <v-dialog v-model="part_Cancel" width="500" v-if="tab == 1">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                配達依頼がキャンセルされました。
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" to="/part_mypage" @click="part_Cancel=false">
                                        確認
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
            <!-- 荷物受け取り完了ボタン押下時 -->
            <v-dialog v-model="part_Delivery" width="500" v-if="tab == 1">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                荷物受け渡し完了
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" @click="part_Delivery=false">
                                        いいえ
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <!-- ここはfirebase処理 -->
                                    <!-- 「はい」ボタン押下時、user側でuser_Deliveryモーダルをひらかせたい -->
                                    <v-btn width="50" @click="deleteRoom()">
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
            user_Name:'おーさき',
            part_Name:'kaito',
            houre:'16',
            minute:'10',
            //文字サイズ
            x:window.innerWidth,
            y:window.innerHeight ,
            size_display:'display-1',
            size_headline:'headline',
            size_title:'title',
            size_subtitle:'subtitle-1',
            size_body:'body-1',

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
            user_Matching: true,
            user_Refusal: false,
            user_Delivery: false,
            // user_Complete: false,
            part_Cancel: false,
            part_Delivery: false,
            // part_Check: false,
            // part_Complete: false,
            name:""
        }
    },
    methods:{
        onResize () {
			this.x = window.innerWidth
			this.y = window.innerHeight
		},
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
            if(this.tab == 0)
            {
                this.name = this.user_name
            }
            else
            {
                this.name = this.part_name
            }
            firebase.firestore().collection("comments").add({
                content: this.coment,
                createdAt: new Date(),
                name:this.name
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
                content:this.coment,
                name:this.name
            })
            this.coment = ""
        },
        deleteRoom(){
            // ルームのuser_idを取得する
            this.$store.commit('deleteRoom')
        }
    },
    watch:{
		x:function(){
			if(this.x<600)
			{
				this.size_display = 'headline',
				this.size_headline = 'subtitle-1',
				this.size_title = 'subtitle-1',
				this.size_subtitle = 'caption',
				this.size_body = 'body-1'
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
	},
    computed:{
        tab(){
            return this.$store.getters.judge
        },
        user_name(){
            return this.$store.getters.user_fname
        },
        part_name(){
            return this.$store.getters.nickname
        }
    },
    mounted() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function(position){
                let coords = position.coords
                // 緯度経度だけ取得
                this.user_latitude = coords.latitude
                this.user_longitude = coords.longitude
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
                    content:doc.data().content,
                    name:doc.data().name
                })
            })
        })
        // 共通項ページでは、judgeを呼び出す(判定)
        this.$store.commit('judge_onAuthStateChanged')
        this.$store.commit('room_onAuthState')
    }
}
</script>
