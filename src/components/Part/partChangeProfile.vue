<template>
    <v-content>
        <v-container class="mt-5 ma-0 pa-0" fluid>
            <v-layout column>
                <v-row justify="center" class="ma-0 pa-0">
                    <v-col cols="auto" class="mx-12">
                        <v-form ref="form" v-model="update" v-if="btn == 0">
                            <v-row class="ma-0 mt-5 pa-0" justify="center">
                                <v-card-text align="center"  v-resize='onResize' :class='size_headline'>
                                    プロフィール変更
                                </v-card-text>
                            </v-row>

                            <!-- ここから顔写真の登録   -->
                            <v-row class="ma-0 mt-5 pa-0" justify="center">
                                <v-card-text align="center"  v-resize='onResize' :class='size_title'>
                                    アイコンの変更
                                </v-card-text>
                            </v-row>
                            <v-row class="ma-0 pa-0" justify="center">
                                <v-avatar size="200">
                                    <img v-if="this.$store.state.img!='no_image' && !uploadImageUrl" 
                                        :src="this.$store.state.img"
                                        alt="アイコンa"
                                        style="border-radius: 8em;
                                        width:200px;
                                        height:200px;" 
                                    >
                                    <img v-if="!uploadImageUrl && this.$store.state.img=='no_image'"
                                        src="#"
                                        alt="アイコンb"
                                        style="border-radius: 8em;
                                        width:200px;
                                        height:200px;"
                                    >
                                    <img v-if="uploadImageUrl" 
                                        :src="uploadImageUrl"
                                        alt="アイコンc"
                                        style="border-radius: 8em;
                                        width:200px;
                                        height:200px;" 
                                    >
                                </v-avatar>
                            </v-row>
                            <!-- ここからテスト -->
                            <input
                                style="display: none"
                                ref="input"
                                type="file"
                                accept="image/*, image/*, image/*"
                                @change="selectedFile()"
                            >
                            <!-- ここまでテスト -->
                            <v-row class="pa-0 ma-0 mt-4" justify="center">
                                <v-col class="ma-0 pa-0" cols="auto">
                                    <v-flex xs12>
                                        <!-- ファイルの選択 -->
                                        <v-btn elevation="2" color="grey liten-5 white--text" @click="btnclick()">画像変更</v-btn>
                                    </v-flex>
                                </v-col>
                            </v-row>
                            <!-- ここまで顔写真の登録 -->

                            <v-row class="ma-0 pa-0">
                            <!-- 姓textarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="firstname"
                                        :rules="nameRules"
                                        prepend-icon="mdi-account-circle"
                                        required
                                        label="姓"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <!-- 名textarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="lastname"
                                        :rules="nameRules"
                                        required
                                        label="名"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <!-- セイtextarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="firstkana"
                                        :rules="kanaRules"
                                        prepend-icon="mdi-account-circle-outline"
                                        required
                                        label="セイ"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <!-- メイtextarea -->
                                <v-flex lg6 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="lastkana"
                                        :rules="kanaRules"
                                        required
                                        label="メイ"
                                    ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <!-- ユーザ名textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="6" cols="8">
                                    <v-text-field
                                    v-model="username"
                                    :rules="usernameRules"
                                    prepend-icon="mdi-account-circle"
                                    :counter="8"
                                    required
                                    label="ユーザ名"
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            
                            <!-- 郵便番号textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="6" cols="8">
                                    <v-text-field
                                    v-model="post"
                                    :rules="postRules"
                                    prepend-icon="mdi-currency-kzt"
                                    label="郵便番号(ハイフン(-)を含めて入力してください)"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- 住所textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="address"
                                    :rules="nameRules"
                                    prepend-icon="mdi-home"
                                    label="住所"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- 電話番号textarea -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="10" cols="8">
                                    <v-text-field
                                    v-model="tel"
                                    :rules="telRules"
                                    prepend-icon="mdi-phone-in-talk"
                                    label="電話番号(ハイフン(-)を含めて入力してください)"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>


                            <!-- 更新ボタン -->
                            <v-row class="mt-6" justify="center">
                                <v-btn
                                    class="grey liten-5 white--text"
                                    to="/#"
                                    :disabled="!update"
                                    @click="updater()"
                                    width="170"
                                    height="50"
                                >
                                変更
                                </v-btn>
                            </v-row>
                        </v-form>
                        <!-- パスワード変更ページ -->
                        <partChangePasswd v-if="btn == 1"/>
                        <!-- 口座変更ページ -->
                        <partChangeBank v-if="btn == 2"/>
                        <!-- 切り替えボタン（縦表示不可） -->
                        <v-row class="ma-0 mt-8 pa-0" justify="center">
                            <v-btn-toggle class="ma-0 pa-0" borderless v-model="btn">
                                <v-btn :value="0" class="overline lighten-1" :elevation="0" v-if="btn != 0" text>
                                    <span v-resize='onResize' :class='size_btn'>プロフィールの変更</span>
                                </v-btn>
                                <v-btn :value="1" class="overline lighten-1" :elevation="0" v-if="btn != 1" text>
                                    <span v-resize='onResize' :class='size_btn'>パスワードの変更</span>
                                </v-btn>
                                <v-btn :value="2" class="overline lighten-1" :elevation="0" v-if="btn != 2" text>
                                    <span v-resize='onResize' :class='size_btn'>振込先の変更</span>
                                </v-btn>
                            </v-btn-toggle>
                        </v-row>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </v-content>
</template>


<script>
import partChangePasswd from '@/components/Part/PartChangePasswd.vue'
import partChangeBank from '@/components/Part/PartChangeBank.vue'

export default {
    data (){
    return{
        btn:0,
        firstname:'',
        lastname:'',
        firstkana:'',
        lastkana:'',
        post:'',
        address:'',
        tel:'',
        username:'',
        uploadImageUrl: '',
        array: {},
        update: true,
        //姓・名・住所
        nameRules: [
            v => !!v || '入力欄が空白です。'
        ],
        //セイ・メイ
        kanaRules: [
            v => !!v || '入力欄が空白です。',
            v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
        ],
        //郵便番号(前)
        postRules: [
            v => !!v || '入力欄が空白です。',
            v => /^[0-9]{3}-[0-9]{4}$/.test(v) || '郵便番号の形式が違います'
        ],
        //電話番号
        telRules: [
            v => !!v || '入力欄が空欄です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => /^0\d{1,4}-\d{1,4}-\d{4}$/.test(v) || /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '電話番号の形式が違います'
        ],
        //ユーザ名
        usernameRules: [
            v => !!v || '入力欄が空白です。',
            v => (v && v.length <= 8) || '8字以内で入力してください。'
        ],
        inputImage: null,
    
      x:window.innerWidth,
      y:window.innerHeight ,
      size_display:'display-1',
      size_headline:'headline',
      size_title:'title',
      size_subtitle:'subtitle-1',
      size_body:'body-1',
      size_btn:'body-1',
    }
  },
    computed: {},
    components:{
        partChangePasswd,
        partChangeBank
    },
    mounted () {
      this.onResize
    },
    methods: {
      onResize () {
        this.x = window.innerWidth
        this.y = window.innerHeight
      },
      validate () {
            this.$refs.form.validate()
        },
        updater(){
            this.array['firstname'] = this.firstname
            this.array['lastname'] = this.lastname
            this.array['firstkana'] = this.firstkana
            this.array['lastkana'] = this.lastkana
            this.array['post'] = this.post
            this.array['address'] = this.address
            this.array['tel'] = this.tel
            this.array['email'] = this.email
            this.array['username'] = this.username
            this.$store.commit('updater', this.array)
        },
        // selectfileボタン押下時
        btnclick() {
          this.$refs.input.click()
        },
        async selectedFile() {
          this.isUploading = true;

          const file = this.$refs.input.files[0]
          if (!file) {
            return;
          }  
          const fr = new FileReader()
            fr.readAsDataURL(file)
            fr.addEventListener('load', () => {
              this.uploadImageUrl = fr.result
              // alert(this.uploadImageUrl);
            })
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
                this.size_body = 'caption',
                this.size_btn = 'caption'
            }
            else
            {
                this.size_display = 'display-1',
                this.size_headline = 'headline',
                this.size_titele = 'title',
                this.size_subtitele = 'subtitle-1',
                this.size_body = 'body-1',
                this.size_btn = 'body-1'
            }
        }
    }
}
</script>