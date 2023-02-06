<template>
  <div class="row border border-success rounded-2 ms-0 me-0 pt-2 pb-2">
    <div class="col-6">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Режим работы</p>
        <BtnAddItem @click="addHours" />
      </div>
      <HoursList :arrayItems="hours" @set-hours="setHours" />
    </div>

    <div class="col-6 ps-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <div></div>
        <BtnRemoveItem v-if="item" @click="removeHours" />
      </div>
      <HoursForm v-if="item" :item="item" @save-hours="saveHours" />
    </div>
  </div>
</template>

<script>
import HoursList from './HoursList.vue'
import HoursForm from './HoursForm.vue'

import BtnAddItem from './../../../../../ui/buttons/BtnAddItem.vue'
import BtnRemoveItem from './../../../../../ui/buttons/BtnRemoveItem.vue'

export default {
  components: {
    HoursList,
    HoursForm,
    BtnAddItem,
    BtnRemoveItem
  },
  props: {
    hours: Array
  },
  emits: ['add-hours', 'remove-hours', 'save-hours'],
  data() {
    return {
      item: null
    }
  },
  methods: {
    setHours({ item }) {
      this.item = item
    },
    addHours() {
      this.$emit('add-hours')
      this.item = null
    },
    removeHours() {
      this.$emit('remove-hours', { id: this.item.id })
      this.item = null
    },
    saveHours() {
      this.$emit('save-hours')
    }
  },
  watch: {
    hours() {
      this.item = null
    }
  }
}
</script>