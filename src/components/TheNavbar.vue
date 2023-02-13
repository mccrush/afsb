<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-end" href="#">
        <img
          src="/images/logo/logo.svg"
          alt="Logo"
          width="32"
          height="32"
          class="d-inline-block"
          @click="amountClicks"
        />
        <span class="ms-2">Слава Бот</span>
      </a>

      <div>
        <BtnLogout v-if="currentUserId" class="" @click="logOut" />
        <BtnAbout v-else data-bs-toggle="modal" data-bs-target="#modalAbout" />
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
      </div>

      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div> -->
    </div>
    <TheModalAbout id="modalAbout" />
  </nav>
</template>

<script>
import BtnLogout from './../ui/buttons/BtnLogout.vue'
import BtnAbout from './../ui/buttons/BtnAbout.vue'

import TheModalAbout from './TheModalAbout.vue'

export default {
  components: {
    BtnLogout,
    BtnAbout,
    TheModalAbout
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    }
  },
  methods: {
    async logOut() {
      await this.$store.dispatch('logOut')
    },
    amountClicks() {
      this.$store.commit('setCountLogoClick')
    }
  }
}
</script>