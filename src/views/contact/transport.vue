<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-layout class="ma-0 pa-0" wrap>
            <!-- ユーザ側Map -->
            <v-flex class="ma-0 pa-0 pa-lg-9 pa-md-8" xs12 sm8 md8 lg8 v-if="tab == 0">
                <v-row class="ma-0 pa-0">
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
                                            :position="{lat:pair_latitude, lng:pair_longitude}"
                                            :opened="infoWinOpen2"
                                            @closeclick="infoWinOpen2=false"
                                        >配達者の現在地</GmapInfoWindow>
                                        <GmapMarker
                                            @click="toggleInfoWindow(1)"
                                            :position="{lat:pair_latitude, lng:pair_longitude}"
                                            :clickable="true">
                                        </GmapMarker>
                                    </GmapMap>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-flex>
            <!-- ユーザ側コンテンツ：PC画面 -->
            <v-flex class="ma-0 mb-12 pa-0 pt-10 pr-12 hidden-sm-and-down" xs12 sm4 md4 lg4 v-if="tab == 0">
                <v-card class="ma-0 pa-5" style="background-color: #E5ECE6">
                    <v-row class="ma-0 mt-10 mb-5 pa-0" justify="center">
                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0" justify="center">
                                <v-avatar class="ma-0 pa-0" size="130">
                                    <img
                                        :src="part_image"
                                        alt="アイコン"
                                        style="border-radius: 8em;"
                                    >
                                </v-avatar>
                                <v-card-text class="ma-0 mt-5 pa-0 text-center" v-resize='onResize' :class='size_subtitle'>
                                    配達者名：{{part_name}}
                                </v-card-text>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0" justify="center">
                        <v-col class="ma-0 pa-0" cols="12">
                            <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_subtitle'>
                                ただいま荷物を配達中です
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <!-- 到着予定時刻の表示 -->
                    <v-row class="ma-0 mt-7 pa-0" justify="center">
                        <v-col class="ma-0 mt-2 pa-0" cols="7">
                            <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_title'>
                                到着予定時刻
                            </v-card-text>
                            <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_title'>
                                {{ last_hour }}時{{ last_minute }}分
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 mt-12 pa-0" justify="center">
                        <v-col class="ma-0 pa-0" cols="auto">
                            <v-btn width="300" height="60" class="green white--text" elevation="0" @click="change" v-resize='onResize' :class='size_headline'>
                                配達者と話す
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-flex>
            <!-- ユーザ側コンテンツ：携帯画面 -->
            <v-flex class="ma-0 mb-12 pa-0 hidden-md-and-up" xs12 sm4 md4 lg4 v-if="tab == 0">
                 <v-row class="ma-0 mt-3 pa-0" justify="center">
                    <v-col class="ma-0 pa-0" cols="11">
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card-text class="ma-0 pa-0" v-resize='onResize' :class='size_title'>
                                ただいま{{ part_name }}さんが荷物を配達中です
                            </v-card-text>
                        </v-row>
                    </v-col>
                </v-row>
                <!-- 配達者顔写真と到着予定時刻の表示 -->
                <v-row class="ma-0 mt-5 pa-0" justify="center">
                    <v-col class="ma-0 pa-0" cols="3">
                         <v-avatar class="ma-0 pa-0" size="80">
                            <img
                                :src="part_image"
                                alt="アイコン"
                                style="border-radius: 8em;"
                            >
                        </v-avatar>
                    </v-col>
                    <v-col class="ma-0 mt-2 pa-0" cols="7">
                        <v-card-title class="ma-0 pa-0">
                            到着予定時刻<br>
                        </v-card-title>
                        <v-card-title class="ma-0 pa-0 pl-12">
                            {{ last_hour }}時{{ last_minute }}分
                        </v-card-title>
                    </v-col>
                </v-row>
                <v-row class="ma-0 mt-6 pa-0" justify="center">
                    <v-col class="ma-0 pa-0" cols="auto">
                        <v-btn width="300" height="60" class="green white--text" elevation="0" @click="change" v-resize='onResize' :class='size_headline'>
                            配達者と話す
                        </v-btn>
                    </v-col>
                </v-row>
            </v-flex>
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

            <!-- part_Completeモーダルで「はい」ボタン押下時 -->
            <v-dialog persistent v-model="user_Complete" width="500" v-if="tab == 0 && completed == 1">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                {{ cmpHoure }}時{{ cmpMinute }}分に配達を完了しました。
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" @click="userComp()">
                                        確認
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>

            <!-- ここからpart側 -->
            <v-flex class="ma-0 pa-0 pa-lg-9 pa-md-8" xs12 sm8 md8 lg8 v-if="tab == 1">
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
                                            :position="{lat:pair_latitude, lng:pair_longitude}"
                                            :opened="infoWinOpen2"
                                            @closeclick="infoWinOpen2=false"
                                        >配達者の現在地</GmapInfoWindow>
                                        <GmapMarker
                                            @click="toggleInfoWindow(1)"
                                            :position="{lat:pair_latitude, lng:pair_longitude}"
                                            :clickable="true">
                                        </GmapMarker>
                                    </GmapMap>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-flex>
            <!-- パート側コンテンツ：PC表示 -->
            <v-flex class="ma-0 mb-12 pa-0 pt-10 pr-12 hidden-sm-and-down" xs12 sm4 md4 lg4 v-if="tab == 1">
                <v-card class="ma-0 pa-5" style="background-color: #E5ECE6">
                    <v-row class="ma-0 mt-10 mb-5 pa-0" justify="center">
                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0" justify="center">
                                <v-avatar class="ma-0 pa-0" size="130">
                                    <img
                                        :src="user_image"
                                        alt="アイコン"
                                        style="border-radius: 8em;"
                                    >
                                </v-avatar>
                                <v-card-text class="ma-0 mt-5 pa-0 text-center" v-resize='onResize' :class='size_subtitle'>
                                    依頼者名：{{user_name}}
                                </v-card-text>
                                <v-row class="ma-0 pa-0" justify="center" align="end">
                                    <v-col class="ma-o pa-0" cols="8">
                                        <v-card-text class="ma-0 mt-5 pa-0" v-resize='onResize' :class='size_subtitle'>
                                            お届け先住所：〒<span id="target">{{ user_post }}</span><br>
                                            <span id="target">{{ user_address }}</span>
                                        </v-card-text>
                                    </v-col>
                                    <v-col class="ma-0 pa-0" cols="2">
                                        <v-btn
                                            @click="witeToClipboard()"
                                        >
                                            コピー
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-row>
                        </v-col>
                    </v-row>
                    <!-- 到着予定時刻の表示 -->
                    <v-row class="ma-0 mt-7 pa-0" justify="center">
                        <v-col class="ma-0 mt-2 pa-0" cols="7">
                            <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_title'>
                                到着予定時刻
                            </v-card-text>
                            <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_title'>
                                {{ p_last_hour }}時{{ p_last_minute }}分
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 mt-12 pa-0" justify="center">
                        <v-col class="ma-0 pa-0" cols="auto">
                            <v-btn width="300" height="60" class="green white--text" elevation="0" @click="change" v-resize='onResize' :class='size_headline'>
                                お客様と話す
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 mt-6 mb-10 pa-0" justify="center">
                        <v-col class="ma-0 pa-0" cols="auto">
                            <v-btn width="300" height="60" class="green white--text" elevation="0" @click="part_Complete=true" v-resize='onResize' :class='size_headline'>
                            配達完了
                        </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-flex>
            <!-- パート側コンテンツ：携帯表示 -->
            <v-flex class="ma-0 pa-0 hidden-md-and-up" xs12 sm4 md4 lg4 v-if="tab == 1">
                <v-row class="ma-0 mt-3 pa-0" justify="center">
                    <v-col class="ma-0 pa-0" cols="11">
                        <v-row class="ma-0 pa-0" justify="center">
                            <v-card-text class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_title'>
                                {{ user_name }}様へ荷物を配達しています
                            </v-card-text>
                        </v-row>
                    </v-col>
                </v-row>
                <!-- お客様のアイコンと到着予定時刻の表示 -->
                <v-row class="ma-0 mt-5 pa-0" justify="center">
                    <v-col class="ma-0 pa-0" cols="3">
                        <!-- レイアウト仮置き -->
                        <v-avatar class="ma-0 pa-0" size="80">
                            <img
                                :src="user_image"
                                alt="アイコン"
                                style="border-radius: 8em;"
                            >
                        </v-avatar>
                    </v-col>
                    <v-col class="ma-0 mt-2 pa-0" cols="7">
                        <v-card-title class="ma-0 pa-0">
                            到着予定時刻<br>
                        </v-card-title>
                        <v-card-title class="ma-0 pa-0 pl-12">
                            {{ p_last_hour }}時{{ p_last_minute }}分
                        </v-card-title>
                    </v-col>
                </v-row>
                <v-row class="ma-0 pa-0" justify="center" align="end">
                    <v-col class="ma-o pa-0" cols="7">
                        <v-card-text class="ma-0 mt-5 pa-0" v-resize='onResize' :class='size_subtitle'>
                            お届け先住所：〒<span id="target">{{ user_post }}</span><br>
                            <span id="target">{{ user_address }}</span>
                        </v-card-text>
                    </v-col>
                    <v-col class="ma-0 pa-0" cols="2">
                        <v-btn
                            @click="witeToClipboard()"
                        >
                            コピー
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="ma-0 mt-6 pa-0" justify="center">
                    <v-col class="ma-0 pa-0" cols="auto">
                        <v-btn width="300" height="60" class="green white--text" elevation="0" @click="change" v-resize='onResize' :class='size_headline'>
                            お客様と話す
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="ma-0 pa-0" justify="center" style="height:100px" align="center">
                    <v-col class="ma-0 pa-0" cols="auto">
                        <v-btn width="300" height="60" class="green white--text" elevation="0" @click="part_Complete=true" v-resize='onResize' :class='size_headline'>
                            配達完了
                        </v-btn>
                    </v-col>
                </v-row>
            </v-flex>
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
            <!-- 「配達完了」ボタン押下時 -->
            <v-dialog persistent v-model="part_Complete" width="500" v-if="tab == 1">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                本当に配達を完了しますか？
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" @click="part_Complete=false">
                                        いいえ
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <!-- ここはfirebase -->
                                    <!-- 「はい」ボタン押下時に part_Finモーダルを開く & user側でuser_Completeモーダルを開く -->
                                    <v-btn width="50" @click="complete()">
                                        はい
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
            <!-- part_Completeモーダルで「はい」押下時 -->
            <v-dialog persistent v-model="part_Fin" width="500" v-if="tab == 1">
                <v-card>
                    <v-row justify="center" class="pa-0 ma-0">
                        <v-col cols="auto">
                            <v-card-title>
                                {{ cmpHoure }}時{{ cmpMinute }}分<br>
                                配達完了
                            </v-card-title>
                            <v-row justify="center" class="pa-0 ma-0">
                                <v-col cols="auto">
                                    <v-btn width="50" to="/part_mypage" @click="part_Fin=false">
                                        確認
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'MapComponent',
    data() {
        return {
            // {{ user_post }} 郵便番号
            cmpHoure:'15',
            cmpMinute:'59',
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
            chat_ire:[],
            // marker_items: [
            //     { position: { lat: YOUR_lat, lng: YOUR_lng }, title: 'title' }
            // ],
            absolute: true,
            opacity: 0.4,
            overlay: false,
            user_Complete: true,
            part_Check: false,
            part_Complete: false,
            part_Fin: false,
            name:""
        }
    },
    methods:{
        userComp(){
            this.$store.commit('user_comp')
        },
        complete(){
            this.part_Fin = true
            this.$store.commit('complete')
        },
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
        getChats(){
            firebase.firestore().collection('comments').orderBy('createdAt', 'asc').get().then(async snapshot => {
                    await snapshot.forEach(doc => {
                    //contentは要素
                    //pushは配列データそのもの
                    // this.allData.push(doc.data().content)
                    this.chat_ire.push({
                        content:doc.data().content,
                        name:doc.data().name
                    })
                })
                this.chat = this.chat_ire
                this.chat_ire = []
            })
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
        delivery(){
            if(this.tab == 0){
                this.user_Delivery=true
            }else if(this.tab == 1){
                this.part_Delivery=true
            }
        },
        //コピー
        witeToClipboard() {
            const copyText = this.$el.querySelector('#target').textContent
            navigator.clipboard
            .writeText(copyText)
            .then(() => {
                console.log('テキストコピー完了')
            })
            .catch(e => {
                console.error(e)
            })
        }
    },
    watch:{
        completed:function(){
            return this.$store.state.completed
        },
        pair_latitude:function() {
            if(this.tab == 0){
                return this.$store.state.part_latitude
            }
            else{
                return this.$store.state.user_latitude
            }
        },
        pair_longitude:function() {
            if(this.tab == 0){
                return this.$store.state.part_longitude
            }
            else{
                return this.$store.state.user_longitude
            }
        },
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
				this.size_title = 'title',
				this.size_subtitle = 'subtitle-1',
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
        user_image(){
            return this.$store.getters.user_image
        },
        user_post(){
            return this.$store.getters.user_post
        },
        user_address(){
            return this.$store.getters.user_address
        },
        part_name(){
            return this.$store.getters.nickname
        },
        part_image(){
            return this.$store.getters.part_image
        },
        last_hour(){
            return this.$store.getters.last_hour
        },
        last_minute(){
            return this.$store.getters.last_minute
        },
        p_last_hour(){
            return this.$store.getters.p_last_hour
        },
        p_last_minute(){
            return this.$store.getters.p_last_minute
        },
        completed:{
            get(){
                return this.$store.getters.completed
            },
            set(value){
                return this.$store.commit('set_completed',value)
            }
        },
        pair_latitude:{
            get() {
                if(this.tab == 0){
                    return this.$store.getters.part_latitude
                }
                else{
                    return this.$store.getters.user_latitude
                }
            },
            set(value) {
                if(this.tab == 0){
                    this.$store.commit('set_part_latitude',value)
                }
                else{
                    this.$store.commit('set_user_latitude',value)
                }
            }
        },
        pair_longitude:{
            get() {
                if(this.tab == 0){
                    return this.$store.getters.part_longitude
                }
                else{
                    return this.$store.getters.user_longitude
                }
            },
            set(value) {
                if(this.tab == 0){
                    this.$store.commit('set_part_longitude',value)
                }
                else{
                    this.$store.commit('set_user_longitude',value)
                }
            }
        }
    },
    mounted() {
        firebase.firestore().collection('users').onSnapshot(() => {
            this.$store.commit('judge_onAuthStateChanged')
            this.completed = this.$store.getters.completed
        })
        firebase.firestore().collection('comments').onSnapshot(() => {
            this.getChats()
        })
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
        // 戻るボタンの無効化
        // window.history.pushState(null, null, null)
        // window.addEventListener("popstate", function() {
        //     window.history.pushState(null, null, null)
        //     return
        // })
        // 共通項ページでは、judgeを呼び出す(判定)
        this.$store.commit('judge_onAuthStateChanged')
        this.$store.commit('judge_room_onAuthState')
    }
}
</script>
