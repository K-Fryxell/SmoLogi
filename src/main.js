import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.VUE_APP_MAP,
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)

      //// If you want to set the version, you can do so:
      // v: '3.26',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
  })
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
