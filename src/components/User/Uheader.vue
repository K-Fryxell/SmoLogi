<template>
  <v-card tile elevation="0" height="85">
    <v-toolbar dense>
        <v-toolbar-title>
            <router-link to="/user_mypage">
              <!--ロゴ <img> -->
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    components:{
    }
}
</script>
