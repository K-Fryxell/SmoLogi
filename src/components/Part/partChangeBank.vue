<template>
    <v-content>
        <v-container class="mt-5 ma-0 pa-0" fluid>
            <v-layout column>
                <v-row justify="center" class="ma-0 pa-0">
                    <v-col cols="auto" class="mx-12">
                        <v-form ref="form" v-model="update" v-if="btn == 0">
                            <v-row class="ma-0 mt-5 pa-0" justify="center">
                                <v-card-text align="center"  v-resize='onResize' :class='size_headline'>
                                    口座情報変更
                                </v-card-text>
                            </v-row>
                            <!-- 銀行情報 -->
                            <v-row class="ma-0 mt-5 pa-0">
                                <v-card-text v-resize='onResize' :class='size_title'>
                                    給与支払先
                                </v-card-text>
                            </v-row>
                            <v-row class="ma-0 pa-0">
                                <v-col cols="12" lg="12">
                                    <!-- 銀行の種類で分岐 -->
                                    <v-radio-group v-model="whichbank" :mandatory="false" row>
                                        <v-radio value="0" label="ゆうちょ銀行"/>
                                        <v-radio value="1" label="その他"/>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <!-- ゆうちょ銀行 -->
                            <v-row class="ma-0 pa-0" v-if="whichbank==0">
                                <v-col lg="6" cols="12">
                                    <v-text-field
                                    v-model="y_symbol"
                                    :rules="y_symbolRules"
                                    label="通帳記号"
                                    :counter="6"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==0">
                                <v-col lg="6" cols="12">
                                    <v-text-field
                                    v-model="y_number"
                                    :rules="y_numberRules"
                                    label="通帳番号"
                                    :counter="8"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="y_host"
                                    :rules="y_hostRules"
                                    label="口座名義"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- その他の銀行 -->
                            <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="bankname"
                                        :rules="banknameRules"
                                        label="金融機関名"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="bankcode"
                                        :rules="bankcodeRules"
                                        :counter="4"
                                        label="金融機関コード"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="branch"
                                        :rules="branchRules"
                                        label="支店名"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                                <v-flex lg5 xs6>
                                    <v-col lg="12" cols="12">
                                        <v-text-field
                                        v-model="branchcode"
                                        :rules="branchcodeRules"
                                        :counter="3"
                                        label="支店コード"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-flex>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                    v-model="number"
                                    :rules="numberRules"
                                    :counter="7"
                                    label="口座番号"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0 pa-0" v-if="whichbank==1">
                                <v-col lg="8" cols="12">
                                    <v-text-field
                                    v-model="host"
                                    :rules="hostRules"
                                    label="口座名義"
                                    required
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- 更新ボタン -->
                            <v-row class="mt-6" justify="center">
                                <v-btn
                                    class="grey liten-5 white--text"
                                    to="#"
                                    :disabled="!update"
                                    @click="updater()"
                                    width="170"
                                    height="50"
                                >
                                変更
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </v-content>
</template>


<script>

export default {
    data (){
    return{
        btn:0,
        whichbank:null,
        y_symbol:'',
        y_number:'',
        y_host:'',
        bankname:'',
        bankcode:'',
        branch:'',
        branchcode:'',
        number:'',
        host:'',
        array: {},
        update: true,
        //ゆうちょ通帳記号
        y_symbolRules:[
            v => !!v || '入力欄が空欄です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => /^1\d{3}0{1}\d$/.test(v) || /^1\d{3}0$/.test(v) || '通帳記号の形式が違います。'
        ],
        //ゆうちょ通帳番号
        y_numberRules:[
            v => !!v || '入力欄が空欄です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => (v &&  7 <= v.length <= 8) || '番号が違います。'
        ],
        //ゆうちょ口座名義
        y_hostRules:[
            v => !!v || '入力欄が空欄です。',
            v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
        ],
        //金融機関名
        bankRules:[
             v => !!v || '入力欄が空欄です。',
        ],
        //金融機関コード
        bankcodeRules:[
            v => !!v || '入力欄が空白です。',
            v => (v && v.length == 4) || '4字で入力してください。'
        ],
        //支店名
        branchRules:[
             v => !!v || '入力欄が空欄です。',
        ],
        //支店コード
        branchcodeRules:[
            v => !!v || '入力欄が空白です。',
            v => (v && v.length == 3) || '3字で入力してください。'
        ],
        //口座番号
        numberRules:[
            v => !!v || '入力欄が空欄です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => (v &&  6 <= v.length <= 7) || '番号が違います。'
        ],
        //口座名義
        hostRules:[
            v => !!v || '入力欄が空欄です。',
            v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
        ],
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
            this.array['y_symbol'] = this.y_symbol
            this.array['y_number'] = this.y_number
            this.array['y_host'] = this.y_host
            this.array['bankname'] = this.bankname
            this.array['bankcode'] = this.bankcode
            this.array['branch'] = this.branch
            this.array['branchcode'] = this.branchcode
            this.array['number'] = this.number
            this.array['host'] = this.host
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