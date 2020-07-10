<template>
    <div>
        <content class="ma-0 pa-0">
            <Header/>
            <v-container fluid class="ma-0 pa-0 pt-3">
                <v-layout>
                    <v-flex lg12 xs12>
                        <v-card elevation="0" class="ma-0 pa-0">
                            <v-row justify="center">
                                <v-col lg="8" cols="11">
                                    <!-- <v-flex lg8> -->
                                    <v-tabs color="grey">
                                        <v-row dense justify="start">
                                            <v-col class="yellow" lg="2" cols="4">
                                                <v-tab>パスワード変更</v-tab>
                                            </v-col>
                                            <v-col class="yellow" lg="2" cols="4">
                                                <v-tab>クレジットカード情報変更</v-tab>
                                            </v-col>
                                        </v-row>

                                            <!-- パスワード変更 -->
                                        <v-tab-item class="red pt-6 pb-10">
                                            <v-row justify="center">
                                                <v-col lg="12" cols="12">



                                                    <v-row justify="center">
            <v-card-title class="mt-12 mb-4 display-1">
                決済情報の更新
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <!-- 変更 -->
                            <v-row>
                                <v-col>
                                    <v-simple-table height="200px">
                                        <thead color="grey--text">
                                            <tr>
                                                <th class="text-left title">受講プラン</th>
                                                <th class="text-left title">金額(月額)</th>
                                                <th class="text-left title">有効期限</th>
                                            </tr>
                                        </thead>
                                        <tbody color="grey--text">
                                            <tr v-for="item in items" :key="item.name">
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.price }}円</td>
                                                <td>{{ item.isdate }}円</td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-col>
                            </v-row>
                            <!-- 停止 -->
                            <v-row justify="center">
                                <h2 class="display-1 mt-6 mb-5">受講プランの停止</h2>
                            </v-row>
                            <v-row>
                                <v-card width="430" elevation="0" class="ml-4 py-2 px-6" tile outlined="">
                                    このボタンを選択し確定を行うと<br/>
                                    現在表示されている有効期限までの利用後、更新されなくなります
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mt-10">
                        <v-col cols="auto" style="width:430px;">
                            <v-row justify="space-between">
                                <v-col cols="auto" class="ml-1">
                                    <v-btn to="/spica/account_setting">
                                        戻る
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto" class="mr-n7">
                                    <v-btn>
                                        プランの変更を確定する
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-row>


                                                </v-col>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-btn class="white--text" x-large="12" color="green">変更</v-btn>
                                            </v-row>
                                        </v-tab-item>
                                        

                                        <!-- クレジットカード情報変更 -->
                                        <v-tab-item class="red">
                                            クレジットカード情報変更
                                        </v-tab-item>
                                    </v-tabs>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <Footer/>
        </content>
    </div>
</template>
<script>
import Header from '../../components/Part/Header'
import Footer from '../../components/Part/Footer'
export default {
    data() {
        return {
        }
    },
    components:{
        Header,
        Footer
    },
    computed: {
        
    },
    methods:{
    }
}
</script>
