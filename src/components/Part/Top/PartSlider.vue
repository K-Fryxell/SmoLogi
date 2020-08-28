<template>
	<v-card class="pb-6 pt-5" style="background-color: #E5ECE6" elevation="0">
		<v-card-title class="justify-center font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
			サイト利用の流れ
		</v-card-title>
		<v-carousel
			cycle
			hide-delimiter-background
			hide-delimiters
			show-arrows-on-hover
			class="ma-0 pa-0"
			v-resize='onResize' :height='carousel_height'
		>
		<v-row class="ma-0 pa-0" justify="center">
			<v-carousel-item
				v-for="item in items"
				:key="item.slides"
				class="ma-0 pa-0"
				v-resize='onResize'
			>
				<v-row class="ma-0 pa-0" justify="center">
					<v-sheet
						class="ma-0 pa-0"
						style="background-color:#A1ACB1;"
						v-resize='onResize' :height='sheet1_height' :width='sheet1_width' 
					>
						<v-row class="fill-height" align="center" justify="center">
							<img 
								v-resize='onResize' :height='img_height' :width='img_width' 
								:src="item.img"
								alt="スライド画像">
						</v-row>
					</v-sheet>
					<v-sheet
						class="ma-0 pa-0 green"
						v-resize='onResize' :height='sheet2_height' :width='sheet2_width'
					>
						<v-row class="ma-0 pa-0" align="center" justify="center">
							<v-card-title elevation="0" width="100%" align="center" class="ma-1 ma-lg-3 pa-0" v-resize='onResize' :class='size_title'>{{item.text}}</v-card-title>
							<v-card-text elevation="0" justify="center" class="ma-0 pa-0 text-center" v-resize='onResize' :class='size_subtitle'>{{item.texts}}</v-card-text>
						</v-row>
					</v-sheet>
				</v-row>
			</v-carousel-item>
		</v-row>
		</v-carousel>
	</v-card>
</template>
<script>
export default {
	data () {
		return {
			x:window.innerWidth,
			y:window.innerHeight,
			carousel_height:400,//全体の縦幅
			item_width:700,//全体の横幅
			sheet1_height:300,//画像エリア縦
			sheet1_width:700,//画像エリア横
			sheet2_height:100,//文字エリア縦
			sheet2_width:700,//文字エリア横
			img_height:300,//画像縦
			img_width:700,//画像横

			size_display:'display-1',
			size_headline:'headline',
			size_title:'title',
			size_subtitle:'subtitle-1',
			size_body:'body-1',
			items:[
				{color:'green',slides:'First',text:'1.ログイン',texts:'マイページでは色々な情報を見ることができます。',img:require('@/assets/partTop/slider01.png')},
				{color:'green',slides:'Second',text:'2.依頼を選ぶ',texts:'マイページから依頼一覧ページを選び、自分に合った依頼を探しましょう！',img:require('@/assets/partTop/slider02.png')},
				{color:'green',slides:'Third',text:'3.荷物を受け取りに向かう',texts:'素早く安全に荷物を受け取りに行きましょう！',img:require('@/assets/partTop/slider03.png')},
				{color:'green',slides:'Fourth',text:'4.荷物を届ける',texts:'指定の時間内に荷物をお客様の元へ届けます！',img:require('@/assets/partTop/slider04.png')}
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
				this.carousel_height=300,//全体の縦幅
				this.item_width=375,//全体の横幅
				this.sheet1_height=220,//画像エリア縦
				this.sheet1_width=375,//画像エリア横
				this.sheet2_height=80,//文字エリア縦
				this.sheet2_width=375,//文字エリア横
				this.img_height=220,//画像縦
				this.img_width=513,//画像横
				this.size_display = 'headline',
				this.size_headline = 'subtitle-1',
				this.size_title = 'subtitle-1',
				this.size_subtitle = 'body-2',
				this.size_body = 'body-1'//まだ
			}
			else
			{
				this.carousel_height=400,//全体の縦幅
				this.carousel_width=1,//効かねぇ
				// this.item_height=1,//効かねぇ
				this.item_width=700,//全体の横幅
				this.sheet1_height=300,//画像エリア縦
				this.sheet1_width=700,//画像エリア横
				this.sheet2_height=100,//文字エリア縦
				this.sheet2_width=700,//文字エリア横
				this.img_height=300,//画像縦
				this.img_width=700,//画像横
				this.size_display = 'display-1',
				this.size_headline = 'headline',
				this.size_title = 'title',
				this.size_subtitle = 'subtitle-1',
				this.size_body = 'body-1'
			}
		}
	}
}
</script>
