<template>
	<content>
		<v-overlay opacity="0.1" :value="overlay">
			<v-progress-circular
				:size="70"
				:width="7"
				indeterminate
				color="green"
			></v-progress-circular>
		</v-overlay>
	</content>
</template>
<script>
import firebase from 'firebase'
export default {
	data(){
        return{
			overlay: true
        }
	},
	computed: {
		user_id(){
			return this.$store.getters.user_id
		}
	},
	mounted() {
		firebase.firestore().collection('users').doc(this.user_id).onSnapshot((doc) => {
			console.log('success')
			if(doc.data().flg == false){
				this.$router.push('/contact')
			}
        })
	},
	created() {
		this.$store.commit('onAuthStateChanged')
	},
}
</script>>
