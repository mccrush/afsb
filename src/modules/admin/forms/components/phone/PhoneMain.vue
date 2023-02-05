<template>
  <div class="row">
    <div class="col-6">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Номера</p>
        <BtnAddItem @click="$emit('add-phone')" />
      </div>
      <PhoneList :arrayItems="phone" @set-phone="setPhone" />
    </div>
    <div class="col-6 ps-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <div></div>
        <BtnRemoveItem v-if="item" @click="removePhone" />
      </div>
      <PhoneForm v-if="item" :item="item" />
    </div>
  </div>
</template>

<script>
import PhoneList from './PhoneList.vue'
import PhoneForm from './PhoneForm.vue'

import BtnAddItem from './../../../../../ui/buttons/BtnAddItem.vue'
import BtnRemoveItem from './../../../../../ui/buttons/BtnRemoveItem.vue'

export default {
  components: {
    PhoneList,
    PhoneForm,
    BtnAddItem,
    BtnRemoveItem
  },
  props: {
    phone: Array
  },
  emits: ['add-phone', 'remove-phone'],
  data() {
    return {
      item: null
    }
  },
  methods: {
    setPhone({ item }) {
      this.item = item
    },
    removePhone() {
      this.$emit('remove-phone', { id: this.item.id })
      this.item = null
    }
  }
}
</script>