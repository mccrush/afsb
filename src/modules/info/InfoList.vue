<template>
  <ol class="list-group mt-3">
    <li
      v-for="item in arrayItems"
      :key="item.id"
      class="
        cursor-pointer
        list-group-item list-group-item-action
        lh-1
        pt-3
        pb-3
      "
      @click="$emit('set-item', { item })"
    >
      {{ item.title }}
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    arrayItems: { type: Array, default: [] }
  },
  emits: ['set-item']
}
</script>