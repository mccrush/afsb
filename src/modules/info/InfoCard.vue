<template>
  <div class="card bg-light bg-gradient shadow border-0 mt-3 mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ item.description }}</h6>

      <CardAddress
        v-if="item.address"
        :item="item"
        @copy-in-bufer="copyInBufer"
      />
      <CardPhone
        v-if="item.phone && item.phone.length"
        :item="item"
        @copy-in-bufer="copyInBufer"
      />
      <CardHours
        v-if="item.hours && item.hours.length"
        :item="item"
        @copy-in-bufer="copyInBufer"
      />
    </div>
    <div class="card-footer">
      <code class="text-muted"
        >Дата обновления: {{ getLocaleDateFromDate(item.dateUpdate) }}</code
      >
    </div>
  </div>
</template>

<script>
import { getLocaleDateFromDate } from './../../methods/getLocaleDateFromDate'
import { copyTextInBufer } from './../../methods/copyTextInBufer'

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
  },
  methods: {
    getLocaleDateFromDate,
    copyInBufer({ text }) {
      copyTextInBufer(text)
    }
  }
}
</script>