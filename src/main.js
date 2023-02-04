import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

let app

if (!app) {
  app = createApp(App).use(store).mount('#app')
}