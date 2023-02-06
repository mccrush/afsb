<template>
  <div class="row">
    <div class="col-12">
      <input
        type="text"
        class="form-control form-control-sm"
        id="inputPhoneTitle"
        placeholder="День недели"
        v-model="item.title"
        @blur="$emit('save-schedule')"
      />
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