<template>
  <div class="row pt-3">
    <div class="col-12"></div>
    <div class="col-2 pe-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center">Группа</p>
        <BtnAddItem @click="addItem({ type: 'group' })" />
      </div>
      <AdminList :arrayItems="groups" @set-item="setItem" />
    </div>

    <div class="col-2 pe-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center">Подгруппа</p>
        <BtnAddItem @click="addItem({ type: 'undergroup' })" />
      </div>
      <AdminList :arrayItems="undergroups" @set-item="setItem" />
    </div>

    <div class="col-2 pe-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center">Организация</p>
        <BtnAddItem @click="addItem({ type: 'org' })" />
      </div>
      <AdminList :arrayItems="orgs" @set-item="setItem" />
    </div>
    <div class="col-6">
      <AdminFormMain v-if="item" :item="item" @remove-item="removeItem" />
    </div>
  </div>
</template>

<script>
import { createItem } from './helpers/createItem'

import AdminList from './AdminList.vue'
import AdminFormMain from './AdminFormMain.vue'

import BtnAddItem from './../../ui/buttons/BtnAddItem.vue'

export default {
  components: {
    AdminList,
    AdminFormMain,
    BtnAddItem
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
    },
    addItem({ type }) {
      this.item = createItem({ type })
      this.$store.dispatch('addItem', { item: this.item })
    },
    removeItem({ item }) {
      this.$store.dispatch('removeItem', { item })
      this.item = null
    }
  }
}
</script>