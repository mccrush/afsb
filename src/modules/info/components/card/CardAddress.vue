<template>
  <ul class="list-group mt-3">
    <li
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
      <div><strong>Адрес</strong></div>
      <div>{{ item.coordinates }}</div>
      <div>
        <BtnCopy @click="$emit('copy-in-bufer', { text: item.coordinates })" />
      </div>
    </li>
    <li
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
      <div>{{ item.address }}</div>
      <div>
        <BtnCopy @click="$emit('copy-in-bufer', { text: item.address })" />
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