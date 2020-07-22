<template>
<v-container class="ma-0 pa-0" fluid>
  <v-layout class="ma-0 pa-0" wrap>
    <v-flex xs12 lg12 >
      <v-card class="ma-0 pa-0" elevation="0">
        <v-card-title class="justify-center font-weight-light">
          詳細変更
        </v-card-title>
            <v-flex xs12 lg12>
              <v-row justify="center">
                <v-col cols="7" class="mx-12">
                  <v-form ref="form">
                    <v-row>
                      <v-col cols="6" lg="4">
                        <v-text-field
                          v-model="sei"
                          label="姓"
                          :rules="seiRules"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" lg="4">
                        <v-text-field
                          v-model="mei"
                          label="名"
                          :rules="meiRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" lg="4">
                          <v-text-field
                            v-model="seiKana"
                            label="セイ"
                            :rules="seikanaRules"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="6" lg="4">
                          <v-text-field
                            v-model="meiKana"
                            label="メイ"
                            :rules="meikanaRules"
                          ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" lg="5">
                          <v-text-field
                            v-model="post"
                            label="郵便番号"
                            :rules="postRules"
                          ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                          <v-text-field
                            v-model="address"
                            label="住所"
                            :rules="addressRules"
                          ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                          <v-text-field
                            v-model="mailaddress"
                            counter
                            label="メールアドレス"
                            :rules="mailRules"
                            hint="メールアドレスは50字以下で記入してください。"
                          ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                          <v-text-field
                            v-model="tel"
                            label="電話"
                            :rules="telRules"
                          ></v-text-field>
                        </v-col>
                    </v-row>
                  </v-form>
                </v-col>
              </v-row>
            </v-flex>
      </v-card>
      <v-row justify="center">
          <v-btn class="mt-12" color="primary"  x-large>変更</v-btn>
      </v-row>
      <div class="my-2">
        <v-btn rounded class="mt-12" color="primary"  x-large>クレジットカード情報変更</v-btn>
      </div>

      <div class="my-2 ">
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
          post: '',
          address: '',
          mailaddress: '',
          tel: '',
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
          //メールアドレス
          mailRules: [
            v => !!v || '入力欄が空白です。',
            v => /.+@.+\..+/.test(v) || 'メールアドレスの入力形式が異なっています。',
            v => (v && v.length <= 50) || '50字以内で入力してください。',
            v => /[a-zA-Z\d]$/.test(v) ||'半角英数字のみで入力してください。',
          ],
          //電話番号
          telRules: [
            v => !!v || '入力欄が空白です。',
            v => /[\d]$/.test(v)  ||'半角数字で入力してください。',
            v => /^0\d{1,4}-\d{1,4}-\d{4}$/.test(v) || /^0[789]0-[0-9]{4}-[0-9]{4}$/.test(v) || '電話番号の形式が違います'
          ],
        }
    },
    method: {

    }
}
</script>
