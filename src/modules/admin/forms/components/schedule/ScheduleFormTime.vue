<template>
  <div class="row">
    <div class="col-12">
      <input
        type="text"
        class="form-control form-control-sm"
        id="inputHoursTitle"
        placeholder="Сеанс"
        v-model="item.title"
        @blur="$emit('save-schedule')"
      />
    </div>

    <div class="col-12 mt-1">
      <div class="input-group">
        <input
          type="time"
          class="form-control form-control-sm"
          id="inputHoursTimeStart"
          placeholder="08:00"
          v-model="item.tstart"
          @blur="$emit('save-schedule')"
        />
        <input
          type="time"
          class="form-control form-control-sm"
          id="inputHoursTimeEnd"
          placeholder="18:30"
          v-model="item.tend"
          @blur="$emit('save-schedule')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  emits: ['save-schedule']
}
</script>