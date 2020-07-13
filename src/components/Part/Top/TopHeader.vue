<template>
  <v-card elevation="0" tile height="85">
    <v-toolbar dense>
        <v-toolbar-title>
            <router-link to="/part_top">
                <img height="55" src="../../../assets/partTop_header/logokari.png">
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- ログイン・新規登録 -->
        <Sign/>
    </v-toolbar>
  </v-card>
</template>

<script>
import Sign from '../../../components/Part/Sign'
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