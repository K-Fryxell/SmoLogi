import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyCpCsMLL85xc3lQjoXJ94dH1jTfdkjXNck",
    authDomain: "smologi-85055.firebaseapp.com",
    databaseURL: "https://smologi-85055.firebaseio.com",
    projectId: "smologi-85055",
    storageBucket: "smologi-85055.appspot.com",
    messagingSenderId: "18383419959",
    appId: "1:18383419959:web:ee5320551ab9da5848ddb2",
    measurementId: "G-10BNJ2MBJP"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')