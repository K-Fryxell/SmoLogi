<template>
    <v-card class="pb-12" min-height="700" elevation="0">
        <v-row justify="center">
            <v-col cols="8">
                <v-row justify="center" class="mb-12 mt-12 ma-0 pa-0">
                    <v-card-title class="font-weight-bold display-1">
                        よくある質問
                </v-card-title>
                </v-row>
                <v-row justify="center">
                    <v-expansion-panels accordion multiple>
                        <v-expansion-panel
                            v-for="item in items"
                            :key="item.title"
                            class="mb-4"
                        >
                            <v-expansion-panel-header class="body-1 lighten-1 white--text" style="background-color: #83B590">
                                {{item.title}}
                                <template v-slot:actions>
                                    <v-icon color="white">mdi-apple-keyboard-control</v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="px-3 pt-5">
                                    {{item.answer}}
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
                <v-row justify="center" class="mt-8">
                    <v-col class="auto">
                        <v-row justify="center">
                            <v-col cols="auto">
                                お困りの内容が一覧にない場合
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col class="auto">
                        <v-row justify="center">
                            <v-btn outlined to="#" style="color: #83B590">お問い合わせページへ</v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            items:[
                {title:'Q.パスワードを忘れた場合どうすればいいの？',answer:'A.お問い合わせのアカウント情報変更まで送信ください。'},
                {title:'Q.ページがうまく表示されない！',answer:'A.インターネットの接続をもう一度ご確認いただきください。　　　　　　　　　　　　　　　　　　　　　　　　　　　　それでも直らない場合はネットワークの環境管理者にお問い合わせください。'},
                {title:'Q.退会したいんだけどどうすればいいの？',answer:'A.アカウント設定に飛んでいただき、アカウントをされる場合はこちらにアクセスしてください。'},
                {title:'Q.アカウント連携認証できないんだけど？', answer:'A.まだ実装されていないのでご了承ください'},
                {title:'Q.コースってどうやったら見れるの？', answer:'A.マイページに飛んでいただき、一覧を見るを押していただければコース一覧が見られます。'}
            ]
        }
    },
}
</script>
