<template>
  <div>
    <div class="d-flex justify-content-between ps-1 pe-1">
      <transition name="fade" mode="out-in" appear>
        <p class="mb-2">{{ formItem.title }}</p>
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
import FormSponsor from './forms/FormSponsor.vue'

import BtnRemoveItem from './../../ui/buttons/BtnRemoveItem.vue'

export default {
  components: {
    FormGroup,
    FormUndergroup,
    FormOrg,
    FormSponsor,
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