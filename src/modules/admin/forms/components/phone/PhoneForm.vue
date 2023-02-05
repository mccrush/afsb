<template>
  <div class="row">
    <div class="col-12">
      <input
        type="text"
        class="form-control form-control-sm"
        id="inputPhoneTitle"
        placeholder="Отдел"
        v-model="item.title"
      />
    </div>

    <div class="col-12 mt-1">
      <input
        type="text"
        class="form-control form-control-sm"
        id="inputPhoneNumber"
        placeholder="Номер телефона"
        v-model="item.phone"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>