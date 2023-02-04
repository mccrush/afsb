import loginMessages from './../../modules/login/helpers/loginMessages'

export default {
  state: {
    loginMessage: { text: '', type: '' }
  },
  mutations: {
    addMessage(state, code) {
      state.loginMessage = loginMessages(code)
    }
  },
  getters: {
    loginMessage: state => state.loginMessage
  }
}