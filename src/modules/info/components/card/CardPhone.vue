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
      <div class="w-40">{{ phone.title }}</div>
      <div>{{ phone.phone }}</div>
      <div>
        <BtnCopy @click="$emit('copy-in-bufer', { text: phone.phone })" />
      </div>
    </li>
  </ul>
</template>

<script>
import BtnCopy from './../interface/BtnCopy.vue'

export default {
  components: {
    BtnCopy
  },
  props: {
    item: Object
  },
  emits: ['copy-in-bufer']
}
</script>

<style scoped>
.w-40 {
  width: 40%;
}
</style>