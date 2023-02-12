<template>
  <button class="btn w-100 lh-1 pt-2 pb-2" :title="title">
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