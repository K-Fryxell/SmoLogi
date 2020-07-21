<template>
<v-container class="ma-0 pa-0" fluid>
  <Uheader/>
  <v-layout class="ma-0 pa-0" wrap>
    <v-flex xs12 lg12 >
      <v-card class="ma-0 pa-0" elevation="0">
        <v-card-title class="justify-center font-weight-thin">
          詳細変更</v-card-title>
          <v-flex xs12 lg12>
            <v-row justify="center" class="ma-0 pa-0">
              <v-col cols="auto" lg="9" class="mx-12">
                <v-form ref="form" v-model="update">
                  <v-row class="ma-0 pa-0">
                    <v-col cols="6" lg="4">
                      <v-text-field
                        prepend-icon="mdi-account-circle"
                        v-model="firstname"
                        label="姓"
                        :rules="firstnameRules"/>
                    </v-col>
                    <v-col cols="6" lg="4">
                      <v-text-field
                        v-model="lastname"
                        label="名"
                        :rules="lastnameRules"/>
                    </v-col>
                  </v-row>
                  <v-row class="ma-0 pa-0">
                    <v-col cols="6" lg="4">
                      <v-text-field
                        prepend-icon="mdi-account-circle-outline"
                        v-model="firstkana"
                        label="セイ"
                        :rules="firstkanaRules"/>
                    </v-col>
                    <v-col cols="6" lg="4">
                      <v-text-field
                        v-model="lastkana"
                        label="メイ"
                        :rules="lastkanaRules"/>
                    </v-col>
                  </v-row>
                  <v-row class="ma-0 pa-0">
                    <v-col cols="12" lg="4">
                      <v-radio-group
                        prepend-icon="mdi-human-male-female"
                        v-model="sex" :mandatory="false" row>
                        <v-radio label="男性"/>
                        <v-radio label="女性"/>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row class="ma-0 pa-0">
                    <v-col>
                      <v-text-field
                        prepend-icon="mdi-email"
                        v-model="email"
                        counter
                        label="メールアドレス"
                        :rules="emailRules"
                        hint="メールアドレスは50字以内で記入してください。"/>
                    </v-col>
                  </v-row>
                  <v-row class="ma-0 pa-0">
                    <v-col cols="12" lg="5">
                      <v-text-field
                        prepend-icon="mdi-currency-kzt"
                        v-model="post"
                        label="郵便番号"
                        :rules="postRules"
                        hint="郵便番号は(-)を含んで入力してください。"/>
                    </v-col>
                  </v-row>
                  <v-row class="ma-0 pa-0">
                    <v-col>
                      <v-text-field
                        prepend-icon="mdi-home"
                        v-model="address"
                        label="住所"
                        :rules="addressRules"/>
                    </v-col>
                  </v-row>
                  <v-row class="ma-0 pa-0">
                    <v-col>
                      <v-text-field
                        prepend-icon="mdi-phone-in-talk"
                        v-model="tel"
                        label="電話"
                        :rules="telRules"
                        hint="電話番号は(-)を含んで入力してください。"/>
                    </v-col>
                  </v-row>
                </v-form>
                <v-row justify="center" class="ma-0 pa-0">
                  <v-btn
                    color="grey darken-2"
                    outlined
                    x-large
                    :disabled="!update"
                    @click="updat()"
                    >
                    更新
                  </v-btn>
                </v-row>
                <v-row justify="center"
                  class="ma-0 pa-0">
                  <v-btn
                    class="mt-12"
                    color="grey darken-2"
                    outlined
                    x-large
                    rounded
                    >
                    クレジットカード情報変更
                  </v-btn>
                </v-row>
                <v-row justify="center" class="ma-0 pa-0">
                  <v-btn
                    class="mt-12"
                    color="grey darken-2"
                    outlined
                    x-large
                    rounded
                    >
                    パスワード変更
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
  <Ufooter/>
</v-container>
</template>
<script>
import Uheader  from '../../components/User/Uheader'
import Ufooter from '../../components/User/Ufooter'
export default {
    data(){
        return{
          firstname: '',
          lastname: '',
          firstkana: '',
          lastkana: '',
          sex: '',
          email: '',
          post: '',
          address: '',
          tel: '',
          array:{},
          update :true,
          //姓名
          firstnameRules:[
            v => !!v || '入力欄が空白です。',
          ],
          lastnameRules:[
            v => !!v || '入力欄が空白です。',
          ],
          //セイメイ
          firstkanaRules: [
            v => !!v || '入力欄が空白です。',
            v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
          ],
          lastkanaRules: [
            v => !!v || '入力欄が空白です。',
            v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
          ],
          //メールアドレス
          emailRules: [
            v => !!v || '入力欄が空白です。',
            v => /.+@.+\..+/.test(v) || 'メールアドレスの入力形式が異なっています。',
            v => (v && v.length <= 50) || '50字以内で入力してください。',
            v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。',
          ],
          //郵便番号
          postRules: [
            v => !!v || '入力欄が空白です。',
            v => /^[0-9]{3}-[0-9]{4}$/.test(v) || '郵便番号の形式が違います',

          ],
          //住所
          addressRules: [
            v => !!v || '入力欄が空白です。',
            v => /^[^A-Za-z0-]+$/.test(v) || '全角で入力してください。',
          ],
          //電話番号
          telRules: [
            v => !!v || '入力欄が空白です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => /^0\d{1,4}-\d{1,4}-\d{4}$/.test(v) || /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '電話番号の形式が違います'
          ],
        }
    },method:{
        validate(){
          this.$refs.form.validate()
      },
        updat(){
          this.array['firstname'] = this.firstname
          this.array['lastname'] = this.lastname
          this.array['email'] = this.email
          this.array['address'] = this.address
          this.array['tel'] = this.tel
        }
    },components: {
      Ufooter,
      Uheader,
    },
}
</script>
