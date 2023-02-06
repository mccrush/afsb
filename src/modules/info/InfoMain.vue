<template>
  <div>
    <div class="row pt-3">
      <div class="col-4"><BtnMenu title="Группа" @click="showGroups" /></div>
      <div class="col-4 ps-0"><BtnMenu title="Подгруппа" /></div>
      <div class="col-4 ps-0"><BtnMenu title="Организация" /></div>
    </div>

    <transition name="fade" mode="out-in" appear>
      <component :is="infoList" />
    </transition>
  </div>
</template>

<script>
import InfoListGroup from './InfoListGroup.vue'
import InfoListUndergroup from './InfoListUndergroup.vue'
import InfoListOrg from './InfoListOrg.vue'
import InfoShowCard from './InfoShowCard.vue'

import BtnMenu from './interface/BtnMenu.vue'

export default {
  components: {
    InfoListGroup,
    InfoListUndergroup,
    InfoListOrg,
    InfoShowCard,
    BtnMenu
  },
  data() {
    return {
      groupId: localStorage.getItem('sb-groupId') || '',
      undergroupId: localStorage.getItem('sb-undergroupId') || '',
      orgId: localStorage.getItem('sb-orgId') || ''
    }
  },
  computed: {
    infoList() {
      if (this.orgId) {
        return 'InfoShowCard'
      } else if (this.undergroupId) {
        return 'InfoListOrg'
      } else if (this.groupId) {
        return 'InfoListUndergroup'
      }
      return 'InfoListGroup'
    }
  },
  methods: {
    showGroups() {
      this.orgId = ''
      this.undergroupId = ''
      this.groupId = ''

      localStorage.setItem('sb-groupId', this.groupId)
      localStorage.setItem('sb-undergroupId', this.undergroupId)
      localStorage.setItem('sb-orgId', this.orgId)
    }
  }
}
</script>