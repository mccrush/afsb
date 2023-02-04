<template>
  <li
    class="
      list-group-item list-group-item-action
      d-flex
      justify-content-between
      align-items-start
    "
  >
    <div class="ms-2 me-auto">
      <small>{{ item.title }}</small>
    </div>
    <span class="badge bg-primary rounded-pill">{{ amountChilds }}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    amountChilds() {
      if (this.item.type === 'group') {
        return this.$store.getters.undergroup.filter(
          item => item.groupId === this.item.id
        ).length
      } else if (this.item.type === 'undergroup') {
        return this.$store.getters.org.filter(
          item => item.undergroupId === this.item.id
        ).length
      }
    }
  }
}
</script>