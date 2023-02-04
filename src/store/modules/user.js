import fireApp from './../../firebase'
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'

const auth = getAuth(fireApp)
auth.languageCode = 'ru'

export default {
  state: {
    currentUserId: ''
  },
  mutations: {
    setCurrentUserId(state, value) {
      state.currentUserId = value
    }
  },
  actions: {
    async logIn({ commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (err) {
        console.error('store user.js logIn(): Ошибка при входе в систему, err:', err)
        throw err
      }
    },

    async logOut({ commit }) {
      try {
        await signOut(auth)
      } catch (err) {
        console.error('store user.js logOut(): Ошибка при выходе из системы, err:', err)
      }
    },

    resetPass({ commit }, { email }) {
      try {
        console.log(`user.js resetPass() email: ${email}`)
        sendPasswordResetEmail(auth, email)
        alert(`Ссылка для сброса пароля отправленна на email: ${email}`)
      } catch (err) {
        console.error('user.js resetPass(): Ошибка при сбросе пароля, err:', err)
      }
    }
  },
  getters: {
    currentUserId: state => state.currentUserId
  }

}