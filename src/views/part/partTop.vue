<template>
	<content class="ma-0 pa-0">
		<!-- ヘッダー -->
		<TopHeader/>
		<v-container class="ma-0 pa-0" fluid >
			<v-layout class="ma-0 pa-0" wrap  >
				<v-card class="ma-0 pa-0" elevation="0">
					<v-card-title class="justify-center mt-5" v-resize='onResize' :class='size_display'>
						ニモチの利用方法
					</v-card-title>
					<v-row class="ma-0 pa-0" justify="center">
						<v-col class="ma-0 pa-0 text-center pl-0" cols="12" lg="4">
							<v-card-title v-resize='onResize' :class='size_title'>
								「ニモチ」とは・・・
							</v-card-title>
							<v-card-text class="mt-3" v-resize='onResize' :class='size_subtitle'>
								買い物に負担を感じている年配の方などをターゲットにした荷物持ちの代行サービスです。
							</v-card-text>
						</v-col>           
						<v-col class="ma-0 pa-0 mb-6" cols="12" lg="4">
							<v-img
								src="../../assets/partTop/図1.png"
								class="mt-3 mr-n6"/>
						</v-col>
					</v-row>
				</v-card>
			</v-layout>
		</v-container>

		<hr size="8"
			color="#1B5E20"
			elevation="2"
			noshade/>
		<!-- スライダー -->
		<Slider/>
		<hr size="8"
			color="#1B5E20"
			elevation="2"
			noshade/>

		<!-- 利用車種例 -->
		<v-container class="ma-0 pt-5 pb-12" fluid>
			<v-layout column>
				<v-card-title class="justify-center" v-resize='onResize' :class='size_display'>
					利用車種の例
				</v-card-title>
				<v-row class="px-6 pt-5" justify="space-around">
					<v-card
						width="160"
						v-for="item in items"
						:key="item.name"
						class="justify-center ma-0 pa-0"
						tile
						style="border:solid 2px grey;"
						elevation="0"
					>
						<v-col>
							<v-card-text class="mt-5 text-center">
							<img :src="item.img" width="110" height="80" class="ma-0 pa-0"/>
							<p v-resize='onResize' :class='size_title'>
							{{item.name}}
							</p>
							</v-card-text>
						</v-col>
					</v-card>
				</v-row>
			</v-layout>
		</v-container>
		<hr size="8"
			color="#1B5E20"
			elevation="2"
			noshade/>
		<!-- フッター -->
		<Footer/>
	</content>
</template>
<script>
import TopHeader from '@/components/Part/Top/PartTopHeader'
import Slider from '@/components/Part/Top/PartSlider'
import Footer from '@/components/Part/PartFooter'
export default {
	data (){
		return{
			x:window.innerWidth,
			y:window.innerHeight ,
			size_display:'display-1',
			size_headline:'headline',
			size_title:'title',
			size_subtitle:'subtitle-1',
			size_body:'body-1',
			items:[
				{img:require('@/assets/partTop/bike1.jpg'),name:'自転車'},
				{img:require('@/assets/partTop/bike2.jpg'),name:'バイク'},
				{img:require('@/assets/partTop/car1.jpg'),name:'普通自動車'},
				{img:require('@/assets/partTop/car3.jpg'),name:'軽トラック'}
			],
		}
	},
	components:{
		Slider,
		TopHeader,
		Footer
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
				this.size_display = 'headline',
				this.size_headline = 'title',
				this.size_title = 'subtitle-1',
				this.size_subtitle = 'body-2',
				this.size_body = 'body-1'
			}
			else
			{
				this.size_display = 'display-1',
				this.size_headline = 'headline',
				this.size_titele = 'title',
				this.size_subtitele = 'subtitle-1',
				this.size_body = 'body-1'
			}
		}
	}
}
</script>