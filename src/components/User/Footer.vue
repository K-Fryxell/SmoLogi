<template>
	<v-content class="ma-0 pb-12 darken-2" style="background-color: #83B590">
		<v-footer class="ma-0 pa-0 pt-12 darken-2" style="background-color: #83B590"  min-height="auto">
			<v-row class="ma-0 pa-0" justify="center">
				<v-col class="ma-0 pa-0" lg="8" cols="12">
					<v-row class="ma-0 pa-0" justify="center">
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn  to="/terms" height="27" width="20"
									class="overline lighten-1" :elevation="0" color="white" text>
									利用規約
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn to="#" height="27" width="40"  class="overline lighten-1" :elevation="0" color="white" text>
									運営情報
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn to="/inquery" height="27" width="40"  class="overline lighten-1" :elevation="0" color="white" text>
									ヘルプ
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn to="#" height="27" width="40" class="overline lighten-1" :elevation="0" color="white" text>
									お問い合わせ
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 pa-0">
							<v-row justify="center">
								<v-btn to="/part_top" height="27" width="40" class="overline lighten-1" :elevation="0" color="white" text>
									パートへ
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="text-center py-2 overline" cols="12">
							copylight &copy; nimoti
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
			size:'title',
			items:	[
				{
					name:'配達者TOP',
					display:'/part_top'
				},
				{
					name:'運営情報',
					display:'#'
				},
				{
					name:'ヘルプ',
					display:'#'
				},
				{
					name:'お問い合わせ',
					display:'#'
				},
				{
					name:'利用規約',
					display:'/terms'
				},
				{
					name:'よくある質問',
					display:'/inquery'
				},
			]
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
			this.size = 'subtitle-2'
			}
			else
			{
			this.size = 'title'
			}
		}
	}
}
</script>
