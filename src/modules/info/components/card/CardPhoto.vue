<template>
  <img
    :src="'/images/photo/' + photoName"
    class="cursor-pointer img-fluid img-thumbnail mt-2"
    alt="Расписание"
    data-fancybox
  />
</template>

<script>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

export default {
  props: {
    photoName: String
  }
}
</script>