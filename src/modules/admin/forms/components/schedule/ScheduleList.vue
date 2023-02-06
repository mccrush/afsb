<template>
  <ol class="list-group">
    <li
      v-for="item in arrayItems"
      :key="item.id"
      @click="$emit('set-schedule', { type, item })"
      class="
        cursor-pointer
        list-group-item list-group-item-action
        lh-1
        ps-1
        pe-2
      "
    >
      <small class="ms-0">{{ item.title }}</small>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    arrayItems: {
      type: Array,
      default: []
    },
    type: String
  },
  emits: ['set-schedule']
}
</script>