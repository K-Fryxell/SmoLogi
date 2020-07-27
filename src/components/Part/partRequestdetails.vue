<template>
    <v-content class="ma-0 pa-0">

        <v-container>
            <v-layout wrap>
                <v-flex xs12 sm6 lg12>
                    <div>
                        <v-card elevation="0">
                            <v-card-title class="justify-center grey--text">
                                <h1>依頼詳細</h1>
                            </v-card-title>
                        </v-card>
                        <v-card>
                            {{message1}}:{{place}}m<br/>
                            <v-img
                                v-resize='onResize' :height='size_card'
                                :src="item.illust"
                                class="my-3"
                                contain
                                />
                            {{message2}}:{{time}}分<br/>
                            {{message3}}:{{weight}}kg
                        </v-card>
                        <v-card>
                            <v-row justify="space-around">
                                <v-avatar color="blue light5" size="164">
                                    <span class="white--text headline">ここは画像です</span>
                                </v-avatar>
                            </v-row>
                            <v-card-text class="text-center black--text subtitle-1">○○ ○○さん</v-card-text>
                            <v-card-text class="text-center black--text subtitle-1">依頼場所まで：○○ ㎞</v-card-text>
                            <v-card-text class="text-center black--text subtitle-1">配達希望時間：○ h ○ m</v-card-text>
                            <v-card-text class="text-center black--text subtitle-1">荷物の重量：{{weight}} kg</v-card-text>
                            <v-row align="center">
                                <v-col class="text-center" cols="12" sm="12">
                                    <div class="my-1">
                                        <v-btn>この依頼を受ける<v-icon>mdi-thumb-up</v-icon></v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-card>
                            <v-card-text class="text-center black--text title">本日の依頼重量：{{sumweight}} kg</v-card-text>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>