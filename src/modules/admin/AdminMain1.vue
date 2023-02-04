<template>
  <div class="row pt-3">
    <div class="col-12"></div>
    <div class="col-2 pe-0">
      <p class="text-center">Группа</p>
      <AdminList :arrayItems="groups" @set-item="setItem" />
    </div>
    <div class="col-2 pe-0">
      <p class="text-center">Подгруппа</p>
      <AdminList :arrayItems="undergroups" @set-item="setItem" />
    </div>
    <div class="col-2 pe-0">
      <p class="text-center">Организация</p>
      <AdminList :arrayItems="orgs" @set-item="setItem" />
    </div>
    <div class="col-6">
      <AdminFormMain v-if="item" :item="item" />
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
  data() {
    return {
      item: null
    }
  },
  computed: {
    groups() {
      return this.$store.getters.group
    },
    undergroups() {
      return this.$store.getters.undergroup
    },
    orgs() {
      return this.$store.getters.org
    }
  },
  methods: {
    setItem({ item }) {
      this.item = item
    }
  }
}
</script>