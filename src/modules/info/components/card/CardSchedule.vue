<template>
  <ul class="list-group mt-3">
    <li class="list-group-item ps-3 pb-3">
      <div><strong>Расписание</strong></div>

      <ul
        v-for="block in item.schedule"
        :key="block.id"
        class="list-group mt-2"
      >
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            lh-1
            p-0
            ps-3
          "
        >
          <div>{{ block.title }}</div>
          <div>
            <BtnCopy
              @click="
                $emit('copy-in-bufer', {
                  text: formatMessage(block.schedule, block.title)
                })
              "
            />
          </div>
        </li>
        <li
          v-for="sche in block.schedule"
          :key="sche.title"
          class="list-group-item d-flex align-items-center lh-1 ps-3"
        >
          <div class="w-30">{{ sche.title }}</div>

          <div
            v-if="item.undergroupId === '1675528208968'"
            class="d-flex align-items-center"
          >
            <div>{{ sche.tstart }}</div>
            <div class="text-muted">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>{{ sche.tend }}</div>
          </div>

          <div v-else class="d-flex align-items-center">
            <div class="text-muted">с&nbsp;</div>
            <div>{{ sche.tstart }}</div>
            <div v-if="sche.tend" class="text-muted">&nbsp;до&nbsp;</div>
            <div>{{ sche.tend }}</div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import BtnCopy from './../interface/BtnCopy.vue'

export default {
  components: {
    BtnCopy
  },
  props: {
    item: Object
  },
  emits: ['copy-in-bufer'],
  methods: {
    formatMessage(hours, day) {
      let fullMsg = 'Режим работы ' + this.item.title + ' в ' + day + ':\n'
      hours.forEach(el => {
        if (el.tstart) {
          fullMsg += el.title + ' c ' + el.tstart + ' до ' + el.tend + '\n'
        } else {
          fullMsg += el.title + ' выходной'
        }
      })
      return fullMsg
    }
  }
}
</script>

<style scoped>
.w-30 {
  width: 40%;
}
</style>