<template>
  <div class="card bg-light bg-gradient shadow border-0 mt-3 mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ item.description }}</h6>

      <CardAddress :item="item" />
      <CardPhone :item="item" />
      <CardHours :item="item" />
    </div>
    <div class="card-footer">
      <code class="text-muted">Дата обновления: {{ item.dateUpdate }}</code>
    </div>
  </div>
</template>

<script>
import CardAddress from './components/card/CardAddress.vue'
import CardPhone from './components/card/CardPhone.vue'
import CardHours from './components/card/CardHours.vue'

export default {
  components: {
    CardAddress,
    CardPhone,
    CardHours
  },
  props: {
    item: Object
  }
}
</script>