import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCyOwqD--RivcodAwNSVUuJqP44tqkeC0k',
      authDomain: 'shopmart-90d61.firebaseapp.com',
      databaseURL: 'https://shopmart-90d61.firebaseio.com',
      projectId: 'shopmart-90d61',
      storageBucket: 'shopmart-90d61.appspot.com',
      messagingSenderId: '882201654764',
      appId: '1:882201654764:web:c3e1ef51de7192aa6a3cc9'
    })
  }
}).$mount('#app')
