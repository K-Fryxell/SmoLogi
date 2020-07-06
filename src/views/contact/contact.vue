<template>
    <v-layout>
        <v-flex xs=12 sm=6 md=6 >
            <v-row class="ma-0 pa-0 mx-12">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="9" class="ma-0 pa-0">
                            <v-card class="red pa-5" elevation="0" height="700" tile>
                                <v-card class="green" elevation="0" height="650" tile >
                                    配達者の位置情報を表示
                                </v-card>
                            </v-card>
                        </v-col>
                        <v-col cols="3" class="ma-0 pa-0">
                            <v-card class="blue pa-3" height="200" elevation="0" tile>
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-col class="ma-0 pa-0" cols="auto">
                                        <v-avatar color="indigo" size="180" class="ma-0 pa-0">
                                            <span class="white--text headline">配達者の顔</span>
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card  class="orange display-1 py-12" height="400" elevation="0" tile>
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-col  class="ma-0 pa-0" cols="auto">
                                        ニックネーム
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 pa-0 my-12" justify="center">
                                    <v-col  class="ma-0 pa-0" cols="auto">
                                        到着予定時間
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 pa-0" justify="center">
                                    <v-col class="ma-0 pa-0" cols="auto">
                                        <v-btn width="290" height="150" class="display-1" fab elevation="0">
                                            配達者と話す
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card  class="purple" height="100" elevation="0" tile>
                                <v-row class="ma-0 pa-0" justify="center" style="height:100px;" align="center">
                                    <v-col class="ma-0 pa-0" cols="auto">
                                        <v-btn width="290" height="70" class="display-1" elevation="0">
                                            配達者と話す
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    
}
</script>