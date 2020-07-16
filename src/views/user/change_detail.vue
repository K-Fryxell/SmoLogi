<template>
<v-container class="ma-0 pa-0" fluid>
  <v-layout class="ma-0 pa-0" wrap>
    <v-flex xs12 lg12 >
      <v-card class="ma-12 pa-0" elevation="0">
        <v-card-title class="justify-center font-weight-light">
          詳細変更
        </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6" lg="3">
                  <v-text-field
                    v-model="sei"
                    label="姓"
                    :rules="seiRules"
                  ></v-text-field>
                </v-col>
                  <v-col cols="6" sm="3">
                <v-text-field
                  v-model="mei"
                  label="名"
                  :rules="meiRules"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" sm="3">
                <v-text-field
                  v-model="seiKana"
                  label="セイ"
                  :rules="seikanaRules"
                ></v-text-field>
              </v-col>
              <v-col cols="6" sm="3">
                <v-text-field
                  v-model="meiKana"
                  label="メイ"
                  :rules="meikanaRules"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="2">
                <v-text-field
                v-model="frontpost"
                  label="xxx"
                  :rules="frontpostRules"
                ></v-text-field>
              </v-col>
              <div class="mt-10">
                ー
              </div>
              <v-col sm="2">
                <v-text-field
                  v-model="backpost"
                  label="xxxx"
                  :rules="backpostRules"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-flex xs12 lg10>
              <v-text-field
                v-model="address"
                  label="住所"
                  :rules="addressRules"
                ></v-text-field>
                <v-text-field
                  v-model="mailaddress"
                  counter
                  label="メールアドレス"
                  :rules="mailRules"
                  hint="メールアドレスは50字以下で記入してください。"
                ></v-text-field>
                <v-text-field
                  v-model="tel"
                  label="電話番号"
                  :rules="telRules"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="パスワード"
                  :rules="passRules"
                ></v-text-field>
                <v-text-field
                  v-model="password2"
                  label="再入力パスワード"
                  :rules="pass2Rules"
                ></v-text-field>
            </v-flex>
          </v-card-text>
      </v-card>
        <v-row justify="center">
          <v-btn class="mt-12" color="primary"  x-large>変更</v-btn>
        </v-row>
            <div class="my-2 text-right">
            <v-btn rounded class="mt-12" color="primary"  x-large>クレジットカード情報変更</v-btn>
            </div>
            <div class="my-2 text-right">
            <v-btn rounded class="mt-12" color="primary"  x-large>パスワード変更</v-btn>
            </div>
  </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
    data(){
        return{
          sei: '',
          mei: '',
          seiKana: '',
          meiKana: '',
          frontpost: '',
          backpost: '',
          address: '',
          mailaddress: '',
          tel: '',
          password: '',
          password2: '',
          seiRules:[
            v => !!v || '入力欄が空白です。',
          ],
          meiRules:[
            v => !!v || '入力欄が空白です。',
          ],
          //セイメイ
          seikanaRules: [
            v => !!v || '入力欄が空白です。',
            v => /[ァ-ヴ]$/.test(v)  ||'カタカナで入力してください。'
          ],
          meikanaRules: [
            v => !!v || '入力欄が空白です。',
            v => /[ァ-ヴ]$/.test(v) || 'カタカナで入力してください。'
          ],
          //郵便番号(前)
          frontpostRules: [
            v => !!v || '入力欄が空白です。',
            v => /^\d{3}$/.test(v) || '郵便番号は半角数字3桁で入力してください。'
          ],
          //郵便番号(後)
          backpostRules: [
            v => !!v || '入力欄が空白です。',
            v => /^\d{4}$/.test(v) || '郵便番号は半角数字4桁で入力してください。'
          ],
          //住所
          addressRules: [
            v => !!v || '入力欄が空白です。',
            // v => /^[^\x01-\x7E\xA1-\xDF]+$/.test(v) || '住所は全角で',
          ],
          //メールアドレス
          mailRules: [
            v => !!v || '入力欄が空白です。',
                v => (v && v.length <= 50) || '50字以内で入力してください。',
                v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。',
          ],
          //電話番号
          telRules: [
            v => !!v || '入力欄が空白です。',
          ],
          //パスワード
          passRules: [
            v => (v&& 8<=v.length) || '8文字以上で入力してください。',
            v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
            v => /[a-zA-Z\d]$/.test(v) || '半角英数字のみで入力してください。'
          ],
          //パスワード再確認
          pass2Rules: [
            v => (v&& v.length<=20) || '有効桁を超えた不正な値が入力されました。',
            v => v === this.password || 'パスワードが一致していません。',
          ]

        }
    },
}
</script>
