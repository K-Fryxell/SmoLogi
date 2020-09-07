<template>
    <v-card class="ma-0 pa-0 pt-6 pt-lg-0 pt-md-0 pt-sm-0" style="background-color: #83B590" elevation="0" tile v-resize='onResize' :height='size_header'>
        <v-toolbar class="ma-0 pa-0" style="background-color: #83B590" dense flat elevation="0">
            <v-toolbar-title class="ma-0 pa-0 pt-3">
                <router-link to="/">
                <!-- img -->
                    <img height="50" src="../../assets/header_logo.png">
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
            x:window.innerWidth,
			y:window.innerHeight ,
			size_header:50,
        }
    },
    mounted () {
		this.onResize
	},
    components:{
        Sign
    },
    methods:{
        onResize () {
			this.x = window.innerWidth
			this.y = window.innerHeight
		},
    },
    watch:{
		x:function(){
			if(this.x<600)
			{
				this.size_header = 80
			}
			else
			{
				this.size_header = 50
            }
		}
	}
}
</script>
