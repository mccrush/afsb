<template>
  <li
    class="
      cursor-pointer
      list-group-item list-group-item-action
      d-flex
      justify-content-between
      align-items-start
      lh-1
      ps-1
      pe-2
    "
  >
    <div class="ms-2 me-auto">
      <small>[{{ item.position }}] {{ item.title }}</small>
    </div>
    <span class="badge bg-warning">{{ amountChilds }}</span>
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