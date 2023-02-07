<template>
  <button class="btn w-100" :title="title">
    <div>{{ title }}</div>
    <!-- <div class="mt-1">{{ subTitle }}</div> -->
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: {
      type: String,
      default: '---'
    }
  }
}
</script>