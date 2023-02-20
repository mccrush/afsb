import { createStore } from 'vuex'
import user from './modules/user'
import admin from './modules/admin'
import loginMessage from './modules/loginMessage'
import showMod from './modules/showMod'

export default createStore({
  modules: {
    user,
    admin,
    loginMessage,
    showMod
  }
}) 