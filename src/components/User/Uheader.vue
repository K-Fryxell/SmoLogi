<template>
    <v-card tile elevation="0" height="85">
        <v-toolbar dense flat>
            <v-toolbar-title>
                <router-link to="/user_mypage">
                    <!--ロゴ <img> -->
                    <img height="55"  src="@/assets/logo_Sample.jpg">
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- ログアウト -->
            <v-btn
                text
                dark
                style="background-color: #57bd7d"
            >
                ログアウト
            </v-btn>
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="black"
                        dark
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
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
                        <v-list-content>
                            <!-- ユーザの名前 -->
                            <v-list-item-title>{{ name }}</v-list-item-title>
                            <v-divider insert/>
                        </v-list-content>
                    </v-list-item>

                    <v-list-item
                        v-for="menu in menus"
                        :key="menu.title"
                        :to="menu.to"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ menu.title }}</v-list-item-title>
                        </v-list-item-content>
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
            name:'田中昭雄',
            menus: [
                { title: 'マイページ',to:'user_mypage'},
                { title: '詳細変更',to:'user_change'},
            ],
        }
    },
    components:{
    }
}
</script>
