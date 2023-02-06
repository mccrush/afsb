<template>
  <div class="row">
    <div class="col-12">
      <input
        type="text"
        class="form-control form-control-sm"
        id="inputHoursTitle"
        placeholder="Отдел"
        v-model="item.title"
        @blur="$emit('save-hours')"
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
          @blur="$emit('save-hours')"
        />
        <input
          type="time"
          class="form-control form-control-sm"
          id="inputHoursTimeEnd"
          placeholder="18:30"
          v-model="item.tend"
          @blur="$emit('save-hours')"
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
  emits: ['save-hours']
}
</script>