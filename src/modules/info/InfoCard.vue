<template>
  <div class="card border-0 mt-3 mb-3">
    <div class="card-body p-0">
      <h5 class="card-title">{{ item.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        <pre>{{ item.description }}</pre>
      </h6>

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
      <CardSchedule
        v-if="item.schedule && item.schedule.length"
        :item="item"
        @copy-in-bufer="copyInBufer"
      />
      <CardPhoto v-if="item.photo" :photoName="item.photo" />
    </div>
    <div class="card-footer rounded-3 border-0 mt-2">
      <small class="text-muted"
        >Обновлено: {{ getLocaleDateFromDate(item.dateUpdate) }}</small
      >
    </div>
    <div class="toast-container position-fixed top-0 end-0 p-3">
      <ToastCopy id="liveToast" data-bs-config='{"delay":2000}' />
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'

import { getLocaleDateFromDate } from './../../methods/getLocaleDateFromDate'
import { copyTextInBufer } from './../../methods/copyTextInBufer'

import CardAddress from './components/card/CardAddress.vue'
import CardPhone from './components/card/CardPhone.vue'
import CardHours from './components/card/CardHours.vue'
import CardSchedule from './components/card/CardSchedule.vue'
import CardPhoto from './components/card/CardPhoto.vue'

import ToastCopy from './components/interface/ToastCopy.vue'

export default {
  components: {
    CardAddress,
    CardPhone,
    CardHours,
    CardSchedule,
    CardPhoto,
    ToastCopy
  },
  props: {
    item: Object
  },
  methods: {
    getLocaleDateFromDate,
    copyInBufer({ text }) {
      copyTextInBufer(text)
      this.showToast()
    },
    showToast() {
      const toastLiveExample = document.getElementById('liveToast')
      const toast = new Toast(toastLiveExample)

      toast.show()
    }
  }
}
</script>