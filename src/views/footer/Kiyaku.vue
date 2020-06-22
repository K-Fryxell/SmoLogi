<template>
    <content>
        <v-card-title class="justify-center mt-12 display-1">ニモチの利用規約</v-card-title>
        <v-container>
            <v-row justify="center">
                <v-card tile width="600" height="auto">
                    <v-col>
                        <v-card-title>利用規約</v-card-title>
                        <v-card-text>この利用規約（以下，「本規約」といいます。）は，ニモチ（以下，「当社」といいます。）
                            がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。 
                            登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                            </v-card-text>

                    </v-col>
                    <!-- 表示ボタン -->
                    <v-row justify="center" v-if="open == true">
                        <v-btn color="primary" v-on:click="open=!open">表示</v-btn>
                    </v-row>
                    <!-- ここからelse文 -->
                    <v-row v-else>
                        <v-col>
                            <v-card-title>第1条</v-card-title>
                            <v-card-text>1.本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。

                                        2.当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。

                                        3.本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                            </v-card-text>
                            <!-- 閉じるボタン -->
                            <v-row justify="center">
                                <v-btn color="primary" v-on:click="open=!open">閉じる</v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>   
            </v-row>
        </v-container>
        <v-card-title class="justify-center mt-12">規約制定日 2020年7月</v-card-title>


    </content>
</template>

<script>
export default{
  data() {
    return {
      open:true
    }
  },
}

</script>