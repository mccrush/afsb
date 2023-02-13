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
          "
        >
          Стать спонсором
        </button>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  computed: {
    sponsors() {
      return this.$store.getters.sponsor
    }
  }
}
</script>