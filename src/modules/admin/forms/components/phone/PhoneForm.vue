<template>
  <div class="row">
    <div class="col-12">
      <input
        type="text"
        class="form-control form-control-sm"
        id="inputPhoneTitle"
        placeholder="Отдел"
        v-model="item.title"
        @blur="$emit('save-phone')"
      />
    </div>

    <div class="col-12 mt-1">
      <input
        type="text"
        class="form-control form-control-sm"
        id="inputPhoneNumber"
        placeholder="Номер телефона"
        v-model.trim="item.phone"
        @blur="$emit('save-phone')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  emits: ['save-phone']
}
</script>