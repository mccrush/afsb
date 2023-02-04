<template>
  <ol class="list-group list-group-numbered">
    <AdminListItem v-for="item in arrayItems" :key="item.id" :item="item" />
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
  }
}
</script>