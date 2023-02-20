<template>
  <div class="row pt-3 pb-3">
    <div class="col-12"></div>
    <div class="col-12 col-sm-4 col-md-2 pe-sm-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Группа</p>
        <BtnAddItem @click="addItem({ type: 'group' })" />
      </div>
      <AdminList :arrayItems="groups" @set-item="setItem" />
    </div>

    <div class="col-12 col-sm-4 col-md-2 mt-4 mt-sm-0 pe-sm-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Подгруппа</p>
        <BtnAddItem
          @click="addItem({ type: 'undergroup' })"
          :disabled="!groupId"
        />
      </div>
      <AdminList :arrayItems="filteredUndergroups" @set-item="setItem" />
    </div>

    <div class="col-12 col-sm-4 col-md-2 mt-4 mt-sm-0 pe-md-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Организация</p>
        <BtnAddItem
          @click="addItem({ type: 'org' })"
          :disabled="!undergroupId"
        />
      </div>
      <AdminList :arrayItems="filteredOrgs" @set-item="setItem" />
    </div>
    <div class="col-12 col-md-6 mt-4 mt-md-0">
      <AdminFormMain v-if="item" :item="item" @remove-item="removeItem" />
    </div>
  </div>
</template>

<script>
//import sortMethod from './../../methods/sortMethod'
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
      item: JSON.parse(localStorage.getItem('sb-item')) || null,
      groupId: localStorage.getItem('sb-groupId') || '',
      undergroupId: localStorage.getItem('sb-undergroupId') || ''
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
    },
    filteredUndergroups() {
      return this.undergroups.filter(item => item.groupId === this.groupId)
    },
    filteredOrgs() {
      return this.orgs.filter(item => item.undergroupId === this.undergroupId)
    }
  },
  methods: {
    setItem({ item }) {
      this.item = item

      if (item.type === 'group') {
        this.groupId = item.id
        this.undergroupId = ''
      } else if (item.type === 'undergroup') {
        this.undergroupId = item.id
      }

      localStorage.setItem('sb-item', JSON.stringify(this.item))
      localStorage.setItem('sb-groupId', this.groupId)
      localStorage.setItem('sb-undergroupId', this.undergroupId)
    },
    addItem({ type }) {
      this.item = createItem({
        type,
        groupId: this.groupId,
        undergroupId: this.undergroupId
      })
      this.$store.dispatch('addItem', { item: this.item })
    },
    removeItem({ item }) {
      this.$store.dispatch('removeItem', { item })
      this.item = null
    }
  }
}
</script>