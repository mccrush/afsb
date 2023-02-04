import { createStore } from 'vuex'
import user from './modules/user'
import loginMessage from './modules/loginMessage'

export default createStore({
  modules: {
    user,
    loginMessage
  }
}) 