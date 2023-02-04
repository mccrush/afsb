<template>
  <li
    class="
      list-group-item list-group-item-action
      d-flex
      justify-content-between
      align-items-start
    "
  >
    <div class="ms-2 me-auto">{{ item.title }}</div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>