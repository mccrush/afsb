<template>
  <div>
    <div class="row pt-3">
      <div class="col-4"><BtnMenu title="Группа" @click="showGroups" /></div>
      <div class="col-4 ps-0"><BtnMenu title="Подгруппа" /></div>
      <div class="col-4 ps-0"><BtnMenu title="Организация" /></div>
    </div>

    <transition name="fade" mode="out-in" appear>
      <component
        :is="infoList"
        :arrayItems="infoArray"
        @set-item="setItem"
        :item="orgItem"
      />
    </transition>
  </div>
</template>

<script>
import InfoListGroup from './InfoListGroup.vue'
import InfoListUndergroup from './InfoListUndergroup.vue'
import InfoListOrg from './InfoListOrg.vue'
import InfoList from './InfoList.vue'
import InfoShowCard from './InfoShowCard.vue'

import BtnMenu from './interface/BtnMenu.vue'

export default {
  components: {
    InfoListGroup,
    InfoListUndergroup,
    InfoListOrg,
    InfoList,
    InfoShowCard,
    BtnMenu
  },
  data() {
    return {
      groupId: localStorage.getItem('sb-groupId') || '',
      undergroupId: localStorage.getItem('sb-undergroupId') || '',
      orgId: localStorage.getItem('sb-orgId') || '',
      orgItem: null
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
    infoList() {
      if (this.orgId) {
        return 'InfoShowCard'
      } else {
        return 'InfoList'
      }
    },
    infoArray() {
      if (this.undergroupId) {
        return this.filteredOrgs
      } else if (this.groupId) {
        return this.filteredUndergroups
      } else {
        return this.groups
      }
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

      localStorage.setItem('sb-groupId', this.groupId)
      localStorage.setItem('sb-undergroupId', this.undergroupId)
      localStorage.setItem('sb-orgId', this.orgId)
    }
  }
}
</script>