<template>
  <v-card elevation="0" tile height="85">
    <v-toolbar dense>
        <v-toolbar-title>
            <router-link to="/">
              <!--ロゴ <img> -->
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- ログイン・新規登録 -->
        <Sign/>
    </v-toolbar>
  </v-card>
</template>

<script>
import Sign from '../../components/User/Sign'
export default {
    data(){
        return{

        }
    },
    components:{
        Sign
    }
}
</script>
