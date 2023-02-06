<template>
  <div class="row border border-info rounded-2 ms-0 me-0 pt-2 pb-2">
    <div class="col-3 pe-1">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Рас.</p>
        <BtnAddItem @click="addSchedule({ type: 'day' })" />
      </div>
      <ScheduleList
        :arrayItems="schedule"
        type="day"
        @set-schedule="setSchedule"
      />
    </div>

    <div class="col-4 ps-0 pe-1">
      <div v-if="dayId" class="d-flex justify-content-between ps-1 pe-1">
        <p class="text-center mb-2">Сеанс</p>
        <BtnAddItem @click="addSchedule({ type: 'time' })" />
      </div>
      <ScheduleList
        :arrayItems="scheduleTimes"
        type="time"
        @set-schedule="setSchedule"
      />
    </div>

    <div class="col-5 ps-0">
      <div class="d-flex justify-content-between ps-1 pe-1">
        <div></div>
        <BtnRemoveItem
          v-if="item && dayId && !timeId"
          @click="removeSchedule"
        />
        <BtnRemoveItem v-if="item && timeId" @click="removeScheduleTime" />
      </div>
      <ScheduleFormDay
        v-if="item && dayId && !timeId"
        :item="item"
        @save-schedule="saveSchedule"
      />
      <ScheduleFormTime
        v-if="item && timeId"
        :item="item"
        @save-schedule="saveSchedule"
      />
    </div>
  </div>
</template>

<script>
import ScheduleList from './ScheduleList.vue'
import ScheduleFormDay from './ScheduleFormDay.vue'
import ScheduleFormTime from './ScheduleFormTime.vue'

import BtnAddItem from './../../../../../ui/buttons/BtnAddItem.vue'
import BtnRemoveItem from './../../../../../ui/buttons/BtnRemoveItem.vue'

export default {
  components: {
    ScheduleList,
    ScheduleFormDay,
    ScheduleFormTime,
    BtnAddItem,
    BtnRemoveItem
  },
  props: {
    schedule: {
      type: Array,
      default: []
    }
  },
  emits: [
    'add-schedule',
    'remove-schedule',
    'save-schedule',
    'remove-schedule-time'
  ],
  data() {
    return {
      item: null,
      dayId: '',
      timeId: ''
    }
  },
  computed: {
    scheduleTimes() {
      if (this.schedule.length && this.dayId) {
        const sche = this.schedule.find(item => item.id === this.dayId)
        return sche.schedule
      } else {
        return []
      }
    }
  },
  methods: {
    setSchedule({ type, item }) {
      this.item = item

      if (type === 'day') {
        this.dayId = item.id
        this.timeId = ''
      } else if (type === 'time') {
        this.timeId = item.id
      }
    },
    addSchedule({ type }) {
      if (type === 'day') {
        this.$emit('add-schedule')
      } else if (type === 'time') {
        let scheArray = this.schedule.find(
          item => item.id === this.dayId
        ).schedule

        const newSche = {
          id: String(Date.now()),
          title: 'New Time',
          tstart: '',
          tend: ''
        }

        scheArray.push(newSche)
        this.$emit('save-schedule')
      }

      this.item = null
    },
    removeSchedule() {
      this.$emit('remove-schedule', { id: this.item.id })
      this.item = null
    },
    removeScheduleTime() {
      const filteredSсhedule = this.scheduleTimes.filter(
        item => item.id != this.timeId
      )
      this.$emit('remove-schedule-time', { id: this.dayId, filteredSсhedule })
    },
    saveSchedule() {
      this.$emit('save-schedule')
    }
  },
  watch: {
    schedule() {
      this.item = null
    }
  }
}
</script>