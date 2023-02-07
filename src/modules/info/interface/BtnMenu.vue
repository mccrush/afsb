<template>
  <button class="btn w-100" :title="title">
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