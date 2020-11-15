import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyAHS_-D6VDnd2THO3zd1z9ex8qiiQd8J9I",
      authDomain: "itlabs-4f361.firebaseapp.com",
      databaseURL: "https://itlabs-4f361.firebaseio.com",
      projectId: "itlabs-4f361",
      storageBucket: "itlabs-4f361.appspot.com",
      messagingSenderId: "302279606171",
      appId: "1:302279606171:web:ebaf18cf736cd51695ab3e"
    })
    firebase.auth().onAuthStateChanged(user => {
      if(user)
        this.$store.dispatch('loggedUser', user)
    })
  }
}).$mount('#app')
