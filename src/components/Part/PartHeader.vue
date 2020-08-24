<template>
    <v-card style="background-color: #F6F6F6" tile elevation="0" height="85">
        <v-toolbar dense flat style="background-color: #F6F6F6" class="pt-2">
            <v-toolbar-title>
                <router-link to="/part_top">
                    <img height="55" src="@/assets/nimochi.png">
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
                                :src="part_image"
                                style="border-radius: 8em;
                                width:100px;
                                height:50px;"
                            />
                        </v-list-item-action>
                        <!-- ユーザの名前 -->
                        <v-list-item-title>{{ name }}</v-list-item-title>
                        <v-divider insert/>
                    </v-list-item>
                    <v-list-item to='/part_mypage'>
                        マイページへ
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
        return{}
    },
    computed:{
        name(){
            return this.$store.getters.part_fname
        },
        part_image(){
            return this.$store.getters.part_image
        }
    },
    methods:{
        logout:function(){
            this.$store.commit('part_logout')
        }
    }
}
</script>
