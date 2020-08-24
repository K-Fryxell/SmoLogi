<template>
	<content class="ma-0 pa-0">
		<!-- ヘッダー -->
		<TopHeader/>
		<v-container class="ma-0 pa-0" fluid>
			<v-layout class="ma-0 pa-0" column>
				<v-card class="ma-0 pa-0" style="background-color: #E5ECE6" elevation="0">
					<!-- PCレイアウト -->
					<v-row class="ma-0 mb-5 pa-0 hidden-sm-and-down" justify="center">
						<v-col class="ma-0 mt-12 pa-0" lg="4" md="4">
							<v-card-title class="font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
								ニモチ配達パートナー
							</v-card-title>
							<v-card-text class="mt-5" v-resize='onResize' :class='size_subtitle'>
								自転車やバイクなど、様々な手段を使っていち早くお客様のところへ駆けつけ、お荷物を目的地まで運びます。<br>
								ログインするだけで好きな時間に好きなだけ働くことができます。
							</v-card-text>
							<v-row class="ma-0 pa-0 pr-6 mt-6 mb-6" justify="center">
								<v-btn class="white--text" height="45" width="180" v-resize='onResize' to="part_regist" :class='size_headline' style="background-color: #83B590">
									今すぐ登録
								</v-btn>
							</v-row>
						</v-col>
						<v-col class="ma-0 mt-6 pa-0 mb-6" lg="5" md="5">
							<v-img
								src="@/assets/partTop/Top画像.jpg"
								class="ma-0 pa-0"
							/>
						</v-col>
					</v-row>
					<!-- 携帯レイアウト -->
					<v-row class="ma-0 pa-0 hidden-md-and-up" justify="center">
						<v-col class="ma-0 pa-0 mb-6" cols="12">
							<v-img
								src="@/assets/partTop/Top画像.jpg"
								class="ma-0 pa-0"
							/>
						</v-col>
						<v-col class="ma-0 pa-0 pl-0" cols="12">
							<v-card-title class="font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
								ニモチ配達パートナー
							</v-card-title>
							<v-card-text class="mt-3" v-resize='onResize' :class='size_subtitle'>
								自転車やバイクなど、様々な手段を使っていち早くお客様のところへ駆けつけ、お荷物を目的地まで運びます。<br>
								ログインするだけで好きな時間に好きなだけ働くことができます。
							</v-card-text>
							<v-row class="ma-0 pa-0 mb-6" justify="center">
								<v-btn to="part_regist" class="white--text" style="background-color: #83B590">
									今すぐ登録
								</v-btn>
							</v-row>
						</v-col>
					</v-row>
				</v-card>
			</v-layout>
		</v-container>
		<hr
			size="3"
			color="#C1C6C2"
			elevation="2"
			noshade
		/>
		<!-- 配達パートナーのメリット -->
		<v-container class="ma-0 pa-0" fluid>
			<v-layout class="ma-0 pa-0" wrap>
				<v-card class="ma-lg-0 pt-lg-12 pb-lg-12 ma-0 pa-5" style="background-color: #E5ECE6" elevation="0">
					<v-row class="ma-0 pa-0 pt-lg-5" justify="center">
						<v-col class="ma-0 pa-0" lg="9" md="9" cols="12">
							<v-card-title class="font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
								配達パートナーのメリット
							</v-card-title>
						</v-col>
					</v-row>
					<v-row class="ma-0 mt-lg-5 mb-5 pa-0 pb-5" justify="center">
						<v-col class="ma-0 ml-lg-6 pa-0" lg="3" md="3" cols="12">
							<v-card-text class="mt-5 ma-0 pa-0 pb-2" v-resize='onResize' :class='size_title'>
								1.自由な働き方
							</v-card-text>
							<v-card-text class="mt-3 ma-0 pa-0" v-resize='onResize' :class='size_subtitle'>
								時間、場所を問わない為、自分のペースで働くことができます。
							</v-card-text>
						</v-col>
						<v-col class="ma-0 ml-lg-6 pa-0" lg="3" md="3" cols="12">
							<v-card-text class="mt-5 ma-0 pa-0 pb-2" v-resize='onResize' :class='size_title'>
								2.町の魅力を発見
							</v-card-text>
							<v-card-text class="mt-3 ma-0 pa-0" v-resize='onResize' :class='size_subtitle'>
								普段行かない場所へ訪れる事も多く、新たな魅力を発見できるでしょう。
							</v-card-text>
						</v-col>
						<v-col class="ma-0 ml-lg-6 pa-0" lg="3" md="3" cols="12">
							<v-card-text class="mt-5 ma-0 pa-0 pb-2" v-resize='onResize' :class='size_title'>
								3.運動不足の解消
							</v-card-text>
							<v-card-text class="mt-3 ma-0 pa-0" v-resize='onResize' :class='size_subtitle'>
								普段運動の時間が取れない方も、働きながら運動ができる為、健康に近づきます。
							</v-card-text>
						</v-col>
					</v-row>
				</v-card>
			</v-layout>
		</v-container>

		<hr
			size="3"
			color="#C1C6C2"
			elevation="2"
			noshade
		/>
		<!-- スライダー -->
		<Slider/>
		<hr
			size="3"
			color="#C1C6C2"
			elevation="2"
			noshade
		/>

		<!-- 利用車種例 -->
		<v-container class="ma-0 pt-lg-12 pb-12" style="background-color: #E5ECE6" fluid>
			<v-layout column>
				<v-card-title class="mt-5 mb-lg-12 justify-center font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
					利用車種の例
				</v-card-title>
				<!-- PCレイアウト -->
				<v-row class="px-6 pt-5 hidden-sm-and-down" justify="space-around">
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
							<p v-resize='onResize' :class='size_subtitle'>
							{{item.name}}
							</p>
							</v-card-text>
						</v-col>
					</v-card>
				</v-row>
				<!-- 携帯レイアウト -->
				<v-sheet class="mx-auto hidden-md-and-up" max-width="300">
					<v-slide-group>
						<!-- multiple show-arrows -->
						<v-slide-item
							v-for="item in items"
							:key="item.name"
							v-slot:default="{ active, toggle }"
							style="border:solid 2px grey"
							class="ma-0 pa-0"
						>
						<!-- <v-slide-item
							v-for="n in 25"
							:key="n"
							v-slot:default="{ active, toggle }"
						> -->
							<!-- <v-btn
								class="mx-2"
								:input-value="active"
								active-class="purple white--text"
								depressed
								rounded
								@click="toggle"
								>
								Options {{ n }}
							</v-btn> -->
							<v-card-text
								class="ma-0 pa-0 pt-4 pl-5 pr-5 text-center"
								:input-value="active"
								active-class="purple white--text"
								depressed
								rounded
								@click="toggle">
								<img :src="item.img" width="70" height="55" class="ma-0 pa-0"
							/>
								<p>{{item.name}}</p>
							</v-card-text>
						</v-slide-item>
					</v-slide-group>
				</v-sheet>
			</v-layout>
		</v-container>
		<hr
			size="3"
			color="#C1C6C2"
			elevation="2"
			noshade
		/>
		<v-container class="ma-0 pa-0" fluid>
			<v-layout class="ma-0 pa-0" column>
				<v-card class="pt-lg-9 pb-lg-12 ma-0 pa-0" style="background-color: #E5ECE6" elevation="0">
					<v-row class="ma-0 pa-0 mt-10 mb-10" justify="center">
						<v-col class="ma-0 pa-0" lg="5" md="5" cols="12">
							<v-card-title class="ma-0 pa-2 font-weight-bold" style="color: #83B590" v-resize='onResize' :class='size_headline'>
								登録について
							</v-card-title>
							<v-card-text class="ma-0 pa-2 mt-3" v-resize='onResize' :class='size_title'>
								ニモチは面接不要。必要項目を入力するだけで働き始めることができます。
							</v-card-text>
							<v-card-text class="ma-0 pa-2 mt-lg-3 font-weight-bold" v-resize='onResize' :class='size_subtitle'>
								※バイク・自動車での配達を行うためには新規登録の際に運転免許証の写真を添付していただく必要があります。
							</v-card-text>
						</v-col>
						<v-col class="ma-0 pa-0 pt-lg-12" lg="4" md="4" cols="4">
							<v-row class="ma-0 mt-12 pa-0" justify="center" align="end">
								<v-btn class="white--text pa-3" height="50" style="background-color: #83B590" v-resize='onResize' to="part_regist" :class='size_headline'>
									今すぐ登録して配達を始める
								</v-btn>
							</v-row>
						</v-col>
					</v-row>
				</v-card>
			</v-layout>
		</v-container>
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
				{img:require('@/assets/partTop/bike2.jpg'),name:'自動二輪車'},
				{img:require('@/assets/partTop/car1.jpg'),name:'軽自動車'},
				{img:require('@/assets/partTop/car2.jpg'),name:'普通自動車'}
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
				this.size_headline = 'subtitle-1',
				this.size_title = 'subtitle-1',
				this.size_subtitle = 'caption',
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
