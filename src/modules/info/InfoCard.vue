<template>
  <div class="card bg-light bg-gradient shadow-sm border-0 mt-3">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">{{ item.description }}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    <div class="card-footer text-muted">
      Дата обновления {{ item.dateUpdate }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>