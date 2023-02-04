<template>
  <div>
    <TheNavbar />
    <div class="container-lg">
      <PageAdmin v-if="currentUserId" />
      <PageLogin v-else />
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import PageAdmin from './pages/PageAdmin.vue'
import PageLogin from './pages/PageLogin.vue'

export default {
  components: {
    TheNavbar,
    PageAdmin,
    PageLogin
  },
  data() {
    return {}
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    }
  }
}
</script>

<style>
.btn:focus,
.btn-close:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.form-check-input:focus {
  border-color: rgba(0, 0, 0, 0.25);
  outline: 0;
  box-shadow: none;
}

.form-check-input:checked {
  background-color: #198754;
  border-color: #198754;
}

.cursor-pointer {
  cursor: pointer;
}

.my-h-100 {
  height: calc(100vh - 62px);
}

.width-960 {
  /* max-width: 960px; */
  max-width: 1200px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
