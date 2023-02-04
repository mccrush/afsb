<template>
  <div
    class="
      col-10 col-md-4 col-xl-4 col-xxl-2
      m-auto
      rounded-4
      bg-white
      shadow
      mt-5
      p-3
    "
  >
    <h5 class="text-center">Авторизация</h5>
    <label for="email">Email</label>
    <br />
    <input
      type="text"
      class="form-control"
      id="email"
      required
      v-model="email"
      placeholder="example@mail.ru"
    />
    <!-- -->
    <br />
    <label for="password">Password</label>
    <div class="input-group">
      <input
        :type="showPass ? 'text' : 'password'"
        class="form-control"
        id="password"
        required
        v-model="password"
        ref="pass"
        maxlength="20"
        @keyup.enter="login"
      />
      <BtnShowPass v-if="!showPass" @click="showPass = !showPass" />
      <BtnHidePass v-else @click="showPass = !showPass" />
    </div>

    <BtnLogin class="w-100 mt-3" @click="login" />
    <BtnResetPass class="w-100 mt-2" @click="resetPass" />

    <transition name="fade" mode="out-in">
      <LoginMessage
        v-if="showMessage"
        :message="loginMessage.text"
        :class="loginMessage.type"
      />
    </transition>
  </div>
</template>

<script>
import LoginMessage from './LoginFormMessage.vue'
import BtnShowPass from './../../ui/buttons/BtnShowPass.vue'
import BtnHidePass from './../../ui/buttons/BtnHidePass.vue'
import BtnLogin from './../../ui/buttons/BtnLogin.vue'
import BtnResetPass from './../../ui/buttons/BtnResetPass.vue'

export default {
  components: {
    LoginMessage,
    BtnShowPass,
    BtnHidePass,
    BtnLogin,
    BtnResetPass
  },
  data() {
    return {
      email: '',
      password: '',
      showPass: false,
      showMessage: false
    }
  },
  computed: {
    loginMessage() {
      return this.$store.getters.loginMessage || ''
    }
  },
  methods: {
    async login() {
      const formData = {
        email: this.email,
        password: this.password
      }

      if (this.email && this.password) {
        try {
          await this.$store.dispatch('logIn', formData)
        } catch (err) {
          if (err.code === 'auth/invalid-email') {
            this.$store.commit('addMessage', 'lee')
          } else if (err.code === 'auth/invalid-password') {
            this.$store.commit('addMessage', 'lpi')
          } else if (err.code === 'auth/wrong-password') {
            this.$store.commit('addMessage', 'lpw')
          } else if (err.code === 'auth/user-not-found') {
            this.$store.commit('addMessage', 'lun')
          } else if (err.code === 'auth/too-many-requests') {
            this.$store.commit('addMessage', 'tmr')
          } else {
            this.$store.commit('addMessage', 'err'),
              console.log('Ошибка:', err.code)
          }
        }
      } else {
        this.$store.commit('addMessage', 'fin')
      }
    },
    resetPass() {
      const formData = {
        email: this.email
      }
      if (this.email) {
        this.$store.dispatch('resetPass', formData)
      } else {
        this.$store.commit('addMessage', 'fin')
      }
    }
  },
  watch: {
    loginMessage() {
      if (this.loginMessage) {
        this.showMessage = true
        setTimeout(() => {
          this.showMessage = false
          this.$store.commit('addMessage', 'null')
        }, 3600)
      }
    }
  }
}
</script>