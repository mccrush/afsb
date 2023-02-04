<template>
  <div class="row">
    <div class="col-12"></div>
    <div class="col-2">
      <AdminList :arrayItems="groups" />
    </div>
    <div class="col-2">
      <AdminList />
    </div>
    <div class="col-2">
      <AdminList />
    </div>
    <div class="col-6">
      <AdminFormMain />
    </div>
  </div>
</template>

<script>
import AdminList from './AdminList.vue'
import AdminFormMain from './AdminFormMain.vue'

export default {
  components: {
    AdminList,
    AdminFormMain
  },
  computed: {
    groups() {
      return this.$store.getters.group
    }
  }
}
</script>