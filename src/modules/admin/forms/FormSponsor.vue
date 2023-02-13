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

    <div class="col-12 mt-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputLink"
          placeholder="Ссылка"
          v-model="item.link"
          @blur="saveItem"
        />
        <label for="inputLink">Ссылка</label>
      </div>
    </div>

    <div class="col-12 mt-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputImage"
          placeholder="Имя файла изображения"
          v-model="item.image"
          @blur="saveItem"
        />
        <label for="inputImage">Имя файла изображения</label>
      </div>
    </div>

    <!-- Поле ссылки, imagename -->

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
        <textarea
          class="form-control form-control-sm"
          placeholder="Описание"
          id="inputDescription"
          style="height: 100px"
          v-model="item.description"
          @blur="saveItem"
        ></textarea>
        <label for="inputDescription">Описание</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    saveItem() {
      this.$store.dispatch('updateItem', { item: this.item })
    }
  }
}
</script>