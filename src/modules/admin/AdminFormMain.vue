<template>
  <div>
    <div class="d-flex justify-content-between">
      <transition name="fade" mode="out-in" appear>
        <span>{{ formItem.title }}</span>
      </transition>
      <BtnRemoveItem @click="removeItem" />
    </div>

    <transition name="fade" mode="out-in" appear>
      <component :is="formItem.forma" :item="item" />
    </transition>
  </div>
</template>

<script>
import { dataTypes } from './helpers/dataTypes'
import FormGroup from './forms/FormGroup.vue'
import FormUndergroup from './forms/FormUndergroup.vue'
import FormOrg from './forms/FormOrg.vue'

import BtnRemoveItem from './../../ui/buttons/BtnRemoveItem.vue'

export default {
  components: {
    FormGroup,
    FormUndergroup,
    FormOrg,
    BtnRemoveItem
  },
  props: {
    item: Object
  },
  emits: ['remove-item'],
  data() {
    return {
      dataTypes
    }
  },
  computed: {
    formItem() {
      return this.dataTypes.find(item => item.type === this.item.type)
    }
  },
  methods: {
    removeItem() {
      if (confirm('Точно удалить?')) {
        this.$emit('remove-item', { item: this.item })
      }
    }
  }
}
</script>