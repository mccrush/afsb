<template>
  <ul class="list-group mt-3">
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
      <div><strong>Адрес</strong></div>
      <div class="d-flex align-items-center">
        <div class="me-2">{{ item.coordinates }}</div>
        <BtnMap :href="getLink(item.coordinates)" />
        <BtnCopy @click="$emit('copy-in-bufer', { text: item.coordinates })" />
      </div>
    </li>
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
      <div>{{ item.address }}</div>
      <div>
        <BtnCopy @click="$emit('copy-in-bufer', { text: item.address })" />
      </div>
    </li>
  </ul>
</template>

<script>
import BtnMap from './../interface/BtnMap.vue'
import BtnCopy from './../interface/BtnCopy.vue'

export default {
  components: {
    BtnMap,
    BtnCopy
  },
  props: {
    item: Object
  },
  emits: ['copy-in-bufer'],
  methods: {
    getLink(coordinates) {
      const coor1 = coordinates.split(',')[0]
      const coor2 = coordinates.split(',')[1]
      const link =
        'https://yandex.ru/maps/11252/slavgorod/?ll=' +
        coor2 +
        '%2C' +
        coor1 +
        '&mode=whatshere&whatshere%5Bpoint%5D=' +
        coor2 +
        '%2C' +
        coor1 +
        '&whatshere%5Bzoom%5D=18&z=18'

      return link
    }
  }
}
</script>