<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputTitle"
          placeholder="Название"
          v-model="item.title"
          @blur="saveItem"
        />
        <label for="inputTitle">Название</label>
      </div>
    </div>

    <div class="col-12 mt-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputAddress"
          placeholder="Название"
          v-model="item.address"
          @blur="saveItem"
        />
        <label for="inputAddress">Адрес</label>
      </div>
    </div>

    <div class="col-12 mt-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputCoordinates"
          placeholder="Название"
          v-model="item.coordinates"
          @blur="saveItem"
        />
        <label for="inputCoordinates">Координаты</label>
      </div>
    </div>

    <div class="col-12 mt-2">
      <PhoneMain
        :phone="item.phone"
        @add-phone="addPhone"
        @remove-phone="removePhone"
        @save-phone="savePhone"
      />
    </div>

    <div class="col-12 mt-2">
      <HoursMain
        :hours="item.hours"
        @add-hours="addHours"
        @remove-hours="removeHours"
        @save-hours="saveHours"
      />
    </div>

    <div class="col-12 mt-2">
      <ScheduleMain
        :schedule="item.schedule"
        @add-schedule="addSchedule"
        @remove-schedule="removeSchedule"
        @save-schedule="saveSchedule"
        @remove-schedule-time="removeScheduleTime"
      />
    </div>

    <div class="col-12 mt-2">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputGroupId"
          v-model="item.groupId"
          @change="saveItem"
        >
          <option v-for="group in groups" :key="group.id" :value="group.id">
            {{ group.title }}
          </option>
        </select>
        <label for="inputGroupId">Группа</label>
      </div>
    </div>

    <div class="col-12 mt-2">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputUndergroupId"
          :disabled="!this.item.groupId || !undergroups.length"
          v-model="item.undergroupId"
          @change="saveItem"
        >
          <option
            v-for="undergroup in undergroups"
            :key="undergroup.id"
            :value="undergroup.id"
          >
            {{ undergroup.title }}
          </option>
        </select>
        <label for="inputUndergroupId">Подгруппа</label>
      </div>
    </div>

    <div class="col-12 mt-2">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputStatus"
          v-model="item.status"
          @change="saveItem"
        >
          <option value="active">Active</option>
          <option value="archive">Archive</option>
        </select>
        <label for="inputStatus">Статус</label>
      </div>
    </div>

    <div class="col-12 mt-2">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPosition"
          placeholder="Позиция"
          step="1"
          v-model="item.position"
          @blur="saveItem"
        />
        <label for="inputPosition">Позиция</label>
      </div>
    </div>

    <div class="col-12 mt-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputPhotoname"
          placeholder="Имя фото"
          v-model="item.photo"
          @blur="saveItem"
        />
        <label for="inputPhotoname">Имя фото</label>
      </div>
    </div>

    <div class="col-12 mt-2">
      <div class="form-floating">
        <textarea
          class="form-control form-control-sm"
          placeholder="Описание"
          id="inputDescription"
          v-model="item.description"
          @blur="saveItem"
        ></textarea>
        <label for="inputDescription">Описание</label>
      </div>
    </div>
  </div>
</template>

<script>
import getDateNow from './../../../methods/getDateNow'

import PhoneMain from './components/phone/PhoneMain.vue'
import HoursMain from './components/hours/HoursMain.vue'
import ScheduleMain from './components/schedule/ScheduleMain.vue'

export default {
  components: {
    PhoneMain,
    HoursMain,
    ScheduleMain
  },
  props: {
    item: Object
  },
  computed: {
    groups() {
      return this.$store.getters.group
    },
    undergroups() {
      return this.$store.getters.undergroup.filter(
        item => item.groupId === this.item.groupId
      )
    },
    currentUserId() {
      return this.$store.getters.currentUserId
    }
  },
  methods: {
    saveItem() {
      this.item.dateUpdate = getDateNow()
      this.item.authorUpdateId = this.currentUserId
      localStorage.setItem('sb-item', JSON.stringify(this.item))
      this.$store.dispatch('updateItem', { item: this.item })
    },
    addPhone() {
      const phone = { id: String(Date.now()), title: 'New Phone', phone: '' }

      if (!this.item.phone) {
        this.item.phone = []
      }
      this.item.phone.push(phone)
      this.saveItem()
    },
    removePhone({ id }) {
      this.item.phone = this.item.phone.filter(phone => phone.id != id)
      this.saveItem()
    },
    savePhone() {
      this.saveItem()
    },

    addHours() {
      const hours = {
        id: String(Date.now()),
        title: 'New Hours',
        tstart: '',
        tend: ''
      }

      if (!this.item.hours) {
        this.item.hours = []
      }

      this.item.hours.push(hours)
      this.saveItem()
    },
    removeHours({ id }) {
      this.item.hours = this.item.hours.filter(hours => hours.id != id)
      this.saveItem()
    },
    saveHours() {
      this.saveItem()
    },

    addSchedule() {
      const schedule = {
        id: String(Date.now()),
        title: 'New Day',
        schedule: [
          {
            id: String(Date.now() + 1),
            title: 'New Time',
            tstart: '',
            tend: ''
          }
        ]
      }

      if (!this.item.schedule) {
        this.item.schedule = []
      }

      this.item.schedule.push(schedule)
      this.saveItem()
    },
    removeSchedule({ id }) {
      this.item.schedule = this.item.schedule.filter(
        schedule => schedule.id != id
      )
      this.saveItem()
    },
    removeScheduleTime({ id, filteredSсhedule }) {
      const index = this.item.schedule.findIndex(item => item.id === id)

      this.item.schedule[index].schedule = filteredSсhedule
      this.saveItem()
    },
    saveSchedule() {
      this.saveItem()
    }
  }
}
</script>