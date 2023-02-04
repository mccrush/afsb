<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <h6>{{ formItem.title }}</h6>
    </transition>

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

export default {
  components: {
    FormGroup,
    FormUndergroup,
    FormOrg
  },
  props: {
    item: Object
  },
  data() {
    return {
      dataTypes
    }
  },
  computed: {
    formItem() {
      return this.dataTypes.find(item => item.type === this.item.type)
    }
  }
}
</script>