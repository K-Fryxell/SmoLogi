<template>
	<v-content class="ma-0 pb-12 darken-2" style="background-color: #57bd7d">
		<v-footer class="ma-0 pa-0 pt-5 darken-2" min-height="auto" style="background-color: #57bd7d">
			<v-row class="ma-0 pa-0" justify="center">
				<v-col class="ma-0 pa-0" lg="6" cols="12">
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
