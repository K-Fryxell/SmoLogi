<template>
    <content>
        <v-container class="mt-5 ma-0 pa-0" fluid>
            <v-layout column>
                <v-row justify="center" class="ma-0 pa-0">
                    <v-col cols="auto" class="mx-12">
                        <v-form ref="form" v-model="update" v-if="btn == 0">
                            <v-row class="ma-0 mt-5 pa-0" justify="center">
                                <v-card-text align="center"  v-resize='onResize' :class='size_headline'>
                                    パスワード変更
                                </v-card-text>
                            </v-row>
                            <!-- メールtextarea -->
                            <v-row class="ma-0 mt-5 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        prepend-icon="mdi-email"
                                        :counter="50"
                                        label="メールアドレス"
                                        required/>
                                </v-col>
                            </v-row>
                            <!-- パスワード -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                        v-model="passwd"
                                        :rules="passwdRules"
                                        prepend-icon="mdi-lock"
                                        v-bind:type="showss ? 'text' : 'password'"
                                        v-bind:append-icon="showss ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showss = !showss"
                                        label="パスワード"
                                        counter/>
                                </v-col>
                            </v-row>
                            <!-- 再入力パスワード -->
                            <v-row class="ma-0 pa-0">
                                <v-col lg="12" cols="12">
                                    <v-text-field
                                        v-model="againpasswd"
                                        :rules="againpasswdRules"
                                        prepend-icon="mdi-lock"
                                        v-bind:type="showss ? 'text' : 'password'"
                                        v-bind:append-icon="showss ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showss = !showss"
                                        label="パスワード"
                                        counter/>
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
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </content>
</template>
<script>
export default {
    data (){
        return{
            btn:0,
            email:'',
            passwd:'',
            showpp:false,
            showss:false,
            againpasswd:'',
            array: {},
            update: true,
            //メール
            emailRules: [
                v => !!v || '入力欄が空白です。',
                v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。',
                v => /.+@.+\..+/.test(v) || 'メールアドレスの入力形式が異なっています。',
                v => (v && v.length <= 50) || '有効桁を超えた不正な値が入力されました。'
            ],
            //パスワード
            passwdRules:[
                v => !!v || '入力欄が空白です。',
                v => (v&& 8<=v.length) || '8文字以上で入力してください。',
                v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                v => /[a-zA-Z\d]$/.test(v) || '半角英数字のみで入力してください。'
            ],
            //再入力パスワード
            againpasswdRules:[
                v => !!v || '入力欄が空白です。',
                v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
                v => (v&& v === this.passwd) || 'パスワードが一致していません。',
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
                this.size_title = 'title',
                this.size_subtitle = 'subtitle-1',
                this.size_body = 'body-1',
                this.size_btn = 'body-1'
            }
        }
    }
}
</script>
