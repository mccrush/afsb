<template>
  <button class="h-53 btn w-100 lh-sm pt-2 pb-2" :title="title">
    <div class="small">{{ title }}</div>
  </button>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.h-53 {
  height: 53px;
}
</style>