<template>
  <button class="btn w-100" :title="title">
    <div>{{ title }}</div>
  </button>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>