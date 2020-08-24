<template>
    <v-toolbar dense elevation="0">
        <v-toolbar-title class="mt-3">
            <router-link to="/">
            <!-- img -->
                <img height="50" src="../../assets/nimochi.png">
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- ログイン・新規登録 -->
        <Sign/>
    </v-toolbar>
</template>
<script>
import Sign from '../../components/User/Sign'
export default {
    components:{
        Sign
    }
}
</script>
