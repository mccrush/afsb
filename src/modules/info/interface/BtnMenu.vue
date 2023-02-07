<template>
  <button class="btn w-100" :title="title">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>