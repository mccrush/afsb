<template>
  <div class="row mt-5 pb-3">
    <div class="col-12">
      <h6 class="text-center text-muted mb-2">Наши спонсоры</h6>
      <div class="list-group list-group-horizontal">
        <a
          v-for="sponsor in sponsors"
          :key="sponsor.id"
          class="
            list-group-item list-group-item-action
            text-center
            border-0
            w-25
            p-1
          "
          :href="sponsor.link"
          target="_blank"
          :title="sponsor.title"
        >
          <img
            :src="'/images/sponsors/' + sponsor.image + '.png'"
            :alt="sponsor.title"
            height="64"
            width="64"
          />
        </a>
        <button
          type="button"
          class="
            list-group-item list-group-item-action
            border
            rounded
            text-center text-muted
            small
            lh-1
            w-25
            p-0 p-sm-1
          "
          data-bs-toggle="modal"
          data-bs-target="#modalSponsor"
        >
          Стать спонсором
        </button>
      </div>
    </div>
    <TheModalSponsor id="modalSponsor" />
  </div>
</template>

<script>
//import sortMethod from './../methods/sortMethod'
import TheModalSponsor from './TheModalSponsor.vue'

export default {
  components: {
    TheModalSponsor
  },
  computed: {
    sponsors() {
      return this.$store.getters.sponsor
    }
    // sortedSponsors() {
    //   return sortMethod(this.sponsors, 'asc', 'position')
    // }
  }
}
</script>