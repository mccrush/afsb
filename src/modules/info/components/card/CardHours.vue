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
      <div><strong>Режим работы</strong></div>
      <div>
        <BtnCopy />
      </div>
    </li>
    <li
      v-for="hours in item.hours"
      :key="hours.title"
      class="list-group-item d-flex align-items-center lh-1 ps-3"
    >
      <div class="w-40">{{ hours.title }}</div>

      <div v-if="hours.tstart" class="d-flex align-items-center">
        <div class="text-muted">с&nbsp;</div>
        <div>{{ hours.tstart }}</div>
        <div class="text-muted">&nbsp;до&nbsp;</div>
        <div>{{ hours.tend }}</div>
      </div>
      <div v-else>выходной</div>
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
  }
}
</script>

<style scoped>
.w-40 {
  width: 40%;
}
</style>