<template>
    <v-card style="background-color: #F6F6F6" tile elevation="0" height="85">
        <v-toolbar dense flat style="background-color: #F6F6F6">
            <v-toolbar-title>
                <router-link to="/user_mypage">
                    <!--ロゴ <img> -->
                    <img height="55" src="@/assets/logo_Sample.jpg">
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- ログアウト -->
            <!-- <v-btn
                text
                dark
                style="background-color: #57bd7d"
            >
                ログアウト
            </v-btn> -->
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="black"
                        dark
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon x-large style="color: #83B590">mdi-microsoft-xbox-controller-menu</v-icon>
                    </v-btn>
                </template>
                <v-list nav width="200px">
                    <v-list-item>
                        <v-list-item-action>
                            <!-- アイコン -->
                            <v-img
                                :src="imgurl"
                                style="border-radius: 8em;
                                width:50px;
                                height:50px;"
                            />
                        </v-list-item-action>
                            <!-- ユーザの名前 -->
                        <v-list-item-title>{{ name }}さん</v-list-item-title>
                        <v-divider insert/>
                    </v-list-item>
                    <v-list-item to='/user_mypage'>
                        マイページへ
                    </v-list-item>
                    <v-list-item to='/user_change'>
                        アカウント設定
                    </v-list-item>
                    <v-list-item @click="logout">
                        ログアウト
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
    </v-card>
</template>
<script>
export default {
    data(){
        return{
            //ユーザの選んだ写真
            imgurl:require("../../assets/people.jpg"),
            //ユーザの名前
            // menus: [
            //     { title: 'マイページ',to:'user_mypage'},
            //     { title: '詳細変更',to:'user_change'},
            // ],
        }
    },
    computed:{
        name(){
            return this.$store.getters.user_fname
        }
    },
    methods:{
        logout:function(){
            this.$store.commit('user_logout')
        },
        onAuth : function(){
            this.$store.commit('onAuthStateChanged')
        }
    },
    created:function(){
        this.onAuth()
    },
}
</script>
