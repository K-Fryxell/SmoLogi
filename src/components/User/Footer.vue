<template>
	<v-content class="ma-0 pb-12 darken-2" style="background-color: #83B590">
		<v-footer class="ma-0 pa-0 pt-12 darken-2" style="background-color: #83B590"  min-height="auto">
			<v-row class="ma-0 pa-0" justify="center">
				<v-col class="ma-0 pa-0" lg="8" cols="12">
					<v-row class="ma-0 pa-0" justify="center">
						<v-col class="ma-0 pa-0">
							<v-row justify="center" c>
								<v-toolbar-items v-for="item in items" :key="item.displayName">
									<v-btn text class="px-5 title" color="white" :to="item.display" v-resize='onResize' :class='size'>
										{{item.name}}
									</v-btn>
									<v-divider vertical></v-divider>
								</v-toolbar-items>
							</v-row>
						</v-col>
						<v-col class="text-center py-12 overline" cols="12">
							&copy;2020 nimoti
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
