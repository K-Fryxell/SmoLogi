<template>
    <v-toolbar dense>
        <v-toolbar-title>
            <router-link to="/">
            <!-- img -->
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
    data(){
        return{

        }
    },
    components:{
        Sign
    }
}
</script>
