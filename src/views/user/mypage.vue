<template>
    <div>
        <v-card>ユーザーログイン</v-card>
        <v-btn @click="logout">ログアウト</v-btn>
    </div>
</template>
<script>
export default {
    computed: {
        user() {
        return this.$store.getters.user;
        },
        userStatus() {
        // ログインするとtrue
        return this.$store.getters.isSignedIn;
        }
    },
    methods:{
        logout:function(){
            this.$store.logout()
        }
    },
    created:function(){
        // this.$store.onAuth()
    // if(!this.$store.state.status) {
    //     this.$router.push('/regist')
    // }
    },
}
</script>