<template>
  <v-card elevation="0" outlined tile>
    <v-toolbar dense elevation="0">
        <v-toolbar-title>
            <router-link to="/part_top">
                <img height="55" src="@/assets/partTop_header/logokari.png">
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- ログイン・新規登録 -->
        <PartSign/>
    </v-toolbar>
  </v-card>
</template>

<script>
import PartSign from '@/components/Part/Top/PartSign'
export default {
    components:{
        PartSign
    }
}
</script>