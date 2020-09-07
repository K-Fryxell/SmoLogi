<template>
	<v-content class="ma-0 pb-12" style="background-color: #659e68">
		<v-footer class="ma-0 pa-0 pt-12" style="background-color: #659e68"  min-height="auto">
			<v-row class="ma-0 pa-0" justify="center">
				<v-col class="ma-0 pa-0" lg="8" cols="12">
					<v-row class="ma-0 pa-0" justify="center">
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn  to="/terms" class="overline lighten-1" :elevation="0" color="white" text>
									<span v-resize='onResize' :class='size'>利用規約</span>
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn to="#" class="overline lighten-1" :elevation="0" color="white" text>
									<span v-resize='onResize' :class='size'>運営情報</span>
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn to="/inquery" class="overline lighten-1" :elevation="0" color="white" text>
									<span v-resize='onResize' :class='size'>ヘルプ</span>
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn to="#" class="overline lighten-1" :elevation="0" color="white" text>
									<span v-resize='onResize' :class='size'>お問い合わせ</span>
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="text-center py-2 mt-8 overline" cols="12">
							copyright &copy; 2020
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-footer>
	</v-content>
</template>
<script>
export default {
	data(){
		return{
			x:window.innerWidth,
			y:window.innerHeight ,
			size:'subtitle-1',
		}
	},
	mounted () {
		this.onResize
	},
	methods: {
		onResize () {
			this.x = window.innerWidth
			this.y = window.innerHeight
		},
	},
	watch:{
		x:function(){
			if(this.x<600)
			{
			this.size = 'caption'
			}
			else
			{
			this.size = 'subtitle-1'
			}
		}
	}
}
</script>
