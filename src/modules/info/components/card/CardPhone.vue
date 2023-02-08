<template>
  <ul class="list-group mt-3">
    <li
      class="
        list-group-item
        d-flex
        justify-content-between
        align-items-center
        lh-1
        ps-3
      "
    >
      <div><strong>Телефон</strong></div>
    </li>
    <li
      v-for="phone in item.phone"
      :key="phone.phone"
      class="
        list-group-item
        d-flex
        justify-content-between
        align-items-center
        lh-1
        p-0
        ps-3
      "
    >
      <div class="w-30">{{ phone.title }}</div>
      <div class="d-flex align-items-center">
        <div class="me-2">{{ phone.phone }}</div>
        <BtnCall :href="'tel:+' + phone.phone" />
        <BtnCopy @click="$emit('copy-in-bufer', { text: phone.phone })" />
      </div>
    </li>
  </ul>
</template>

<script>
import BtnCall from './../interface/BtnCall.vue'
import BtnCopy from './../interface/BtnCopy.vue'

export default {
  components: {
    BtnCall,
    BtnCopy
  },
  props: {
    item: Object
  },
  emits: ['copy-in-bufer']
}
</script>

<style scoped>
.w-30 {
  width: 30%;
}
</style>