<template>
  <ol class="list-group">
    <AdminListItem
      v-for="item in arrayItems"
      :key="item.id"
      :item="item"
      @click="$emit('set-item', { item })"
    />
  </ol>
</template>

<script>
import AdminListItem from './AdminListItem.vue'

export default {
  components: {
    AdminListItem
  },
  props: {
    arrayItems: Array
  },
  emits: ['set-item']
}
</script>