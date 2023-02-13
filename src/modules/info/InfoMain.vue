<template>
  <div class="my-container m-auto">
    <div class="row pt-3">
      <div class="col-4">
        <BtnMenu
          class="btn-outline-warning"
          :title="groupTitle"
          :class="{
            active: !groupId
          }"
          @click="showGroups"
        />
      </div>
      <div class="col-4 ps-0">
        <BtnMenu
          :title="undergroupTitle"
          @click="showUndergroups"
          :class="{
            'btn-outline-secondary': !groupId,
            'btn-outline-warning active': groupId && !undergroupId,
            'btn-outline-warning': undergroupId
          }"
          :disabled="!groupId"
        />
      </div>
      <div class="col-4 ps-0">
        <BtnMenu
          title="Организации"
          @click="showOrgs"
          :class="{
            'btn-outline-secondary': !undergroupId,
            'btn-outline-warning active': undergroupId && !orgId,
            'btn-outline-warning': orgId
          }"
          :disabled="!undergroupId"
        />
      </div>
    </div>

    <transition name="fade" mode="out-in" appear>
      <InfoCard v-if="orgId" :item="orgItem" />
      <InfoList v-else :arrayItems="sortArray" @set-item="setItem" />
    </transition>

    <TheSponsors v-if="!groupId" />
  </div>
</template>

<script>
import sortMethod from './../../methods/sortMethod'

import InfoList from './InfoList.vue'
import InfoCard from './InfoCard.vue'

import BtnMenu from './interface/BtnMenu.vue'
import TheSponsors from './../../components/TheSponsors.vue'

export default {
  components: {
    InfoList,
    InfoCard,
    BtnMenu,
    TheSponsors
  },
  data() {
    return {
      groupId: localStorage.getItem('sb-groupId') || '',
      undergroupId: localStorage.getItem('sb-undergroupId') || '',
      orgId: localStorage.getItem('sb-orgId') || '',
      orgItem: JSON.parse(localStorage.getItem('sb-orgItem')) || null
    }
  },
  computed: {
    groups() {
      return this.$store.getters.group
    },
    undergroups() {
      return this.$store.getters.undergroup
    },
    orgs() {
      return this.$store.getters.org
    },

    filteredUndergroups() {
      return this.undergroups.filter(item => item.groupId === this.groupId)
    },
    filteredOrgs() {
      return this.orgs.filter(item => item.undergroupId === this.undergroupId)
    },
    infoArray() {
      if (this.undergroupId) {
        return this.filteredOrgs
      } else if (this.groupId) {
        return this.filteredUndergroups
      } else {
        return this.groups
      }
    },
    sortArray() {
      return sortMethod(this.infoArray, 'asc', 'position')
    },
    groupTitle() {
      if (this.groupId) {
        return this.groups.find(item => item.id === this.groupId).title
      }
      return 'Группы'
    },
    undergroupTitle() {
      if (this.undergroupId) {
        return this.filteredUndergroups.find(
          item => item.id === this.undergroupId
        ).title
      }
      return 'Подгруппы'
    }
  },
  methods: {
    setItem({ item }) {
      if (item.type === 'group') {
        this.groupId = item.id
        this.undergroupId = ''
        this.orgId = ''
      } else if (item.type === 'undergroup') {
        this.undergroupId = item.id
        this.orgId = ''
      } else if (item.type === 'org') {
        this.orgItem = item
        this.orgId = item.id
      }
    },
    showGroups() {
      this.groupId = ''
      this.undergroupId = ''
      this.orgId = ''
      this.orgItem = null

      localStorage.setItem('sb-groupId', this.groupId)
      localStorage.setItem('sb-undergroupId', this.undergroupId)
      localStorage.setItem('sb-orgId', this.orgId)
      localStorage.setItem('sb-orgItem', JSON.stringify(this.orgItem))
    },
    showUndergroups() {
      this.undergroupId = ''
      this.orgId = ''
      this.orgItem = null

      localStorage.setItem('sb-undergroupId', this.undergroupId)
      localStorage.setItem('sb-orgId', this.orgId)
      localStorage.setItem('sb-orgItem', JSON.stringify(this.orgItem))
    },
    showOrgs() {
      this.orgId = ''
      this.orgItem = null

      localStorage.setItem('sb-orgId', this.orgId)
      localStorage.setItem('sb-orgItem', JSON.stringify(this.orgItem))
    }
  }
}
</script>

<style scoped>
.my-container {
  max-width: 420px;
}
</style>