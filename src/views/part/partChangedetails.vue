<template>
    <v-content class="ma-0 pa-0">

        <v-container>
            <v-layout wrap>
                <v-flex xs12 sm6 lg12>
                    <div>
                        <v-card elevation="0">
                            <v-card-title class="justify-center grey--text">
                                <h1>パートナー詳細変更ページ</h1>
                            </v-card-title>
                            <v-card-text class="text-center black--text">プロファイル変更</v-card-text>
                            <v-row justify="space-around">
                                <v-avatar color="blue light5" size="192">
                                    <span class="white--text headline">192</span>
                                </v-avatar>
                            </v-row>
                            <v-row align="center">
                                <v-col class="text-center" cols="12" sm="12">
                                    <div class="my-1">
                                        <v-btn>画像変更<v-icon>mdi-cached</v-icon></v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-textarea
                                    class="mx-2"
                                    label="姓"
                                    rows="1"
                                    prepend-icon="mdi-comment"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-textarea
                                    append-icon="mdi-comment"
                                    class="mx-2"
                                    label="名"
                                    rows="1"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-textarea
                                    prepend-inner-icon="mdi-comment"
                                    class="mx-2"
                                    label="セイ"
                                    rows="1"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-textarea
                                    append-outer-icon="mdi-comment"
                                    class="mx-2"
                                    label="メイ"
                                    rows="1"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <v-textarea
                                    label="ユーザ名"
                                    auto-grow
                                    outlined
                                    rows="1"
                                    row-height="15"
                                    ></v-textarea>

                                    <v-textarea
                                    label="メールアドレス"
                                    auto-grow
                                    outlined
                                    rows="1"
                                    row-height="15"
                                    ></v-textarea>

                                    <v-textarea
                                    label="住所"
                                    auto-grow
                                    outlined
                                    rows="1"
                                    row-height="15"
                                    ></v-textarea>

                                    <v-textarea
                                    label="電話番号"
                                    auto-grow
                                    outlined
                                    rows="1"
                                    row-height="15"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col class="text-center" cols="12" sm="12">
                                    <div class="my-1">
                                        <v-btn>更新<v-icon>mdi-cached</v-icon></v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
            
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
