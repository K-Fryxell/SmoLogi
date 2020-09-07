<template>
    <v-card class="ma-0 pa-0 pt-6 pt-lg-0 pt-md-0 pt-sm-0" elevation="0" tile v-resize='onResize' :height='size_header'>
        <v-toolbar class="ma-0 pa-0" dense flat elevation="0">
            <v-toolbar-title class="ma-0 pa-0">
                <router-link to="/part_top">
                    <img height="50" src="@/assets/nimochi.png">
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
        PartSign
    },
    methods:{
        onResize () {
			this.x = window.innerWidth
			this.y = window.innerHeight
		},
        logout:function(){
            this.$store.commit('part_logout')
        }
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
