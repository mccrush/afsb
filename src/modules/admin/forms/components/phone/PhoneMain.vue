<template>
  <div class="row border border-warning rounded-2 ms-0 me-0 pt-2 pb-2">
    <div class="col-6">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Телефоны</p>
        <BtnAddItem @click="addPhone" />
      </div>
      <PhoneList :arrayItems="phone" @set-phone="setPhone" />
    </div>
    <div class="col-6 ps-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <div></div>
        <BtnRemoveItem v-if="item" @click="removePhone" />
      </div>
      <PhoneForm v-if="item" :item="item" @save-phone="savePhone" />
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
  emits: ['add-phone', 'remove-phone', 'save-phone'],
  data() {
    return {
      item: null
    }
  },
  methods: {
    setPhone({ item }) {
      this.item = item
    },
    addPhone() {
      this.$emit('add-phone')
      this.item = null
    },
    removePhone() {
      this.$emit('remove-phone', { id: this.item.id })
      this.item = null
    },
    savePhone() {
      this.$emit('save-phone')
    }
  },
  watch: {
    phone() {
      this.item = null
    }
  }
}
</script>