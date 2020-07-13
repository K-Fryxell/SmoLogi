<template>
    <div>
        <content class="ma-0 pa-0">
            <Header/>
            <v-container fluid class="ma-0 pa-0 pt-3">
                <v-layout>
                    <v-flex lg12 xs12>
                        <v-card elevation="0" class="ma-0 mt-6 pa-0">
                            <v-row justify="center">
                                <v-col lg="8" cols="11">
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
                                                    
                                                </v-col>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-btn class="white--text" color="green">変更</v-btn>
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
