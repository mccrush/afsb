import 'bootstrap/dist/css/bootstrap.min.css'
import { Offcanvas } from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import fireApp from './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(fireApp)

let app

onAuthStateChanged(auth, (user) => {

  if (!app) {
    app = createApp(App).use(store).mount('#app')
  }

  if (user) {
    console.log('main.js : Пользователь авторизован')
    store.commit('setCurrentUserId', user.uid)
  } else {
    console.log('main.js : Пользователь НЕ авторизован')
    store.commit('setCurrentUserId', '')
  }

  store.dispatch('getItems', { type: 'group' })
  store.dispatch('getItems', { type: 'undergroup' })
  store.dispatch('getItems', { type: 'org' })

})