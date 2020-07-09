<template>
  <v-card tile>
    <v-toolbar dense>
        <v-toolbar-title>
            <router-link to="/part_mypage">
                <img width="100" src="../../assets/partTop_header/logokari.png">
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