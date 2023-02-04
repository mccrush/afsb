<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="inputTitle"
          placeholder="Название"
          v-model="item.title"
          @blur="saveItem"
        />
        <label for="inputTitle">Название</label>
      </div>
    </div>

    <div class="col-12">
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

    <div class="col-12 mt-3">
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

    <div class="col-12 mt-3">
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="inputPosition"
          placeholder="Позиция"
          step="1"
          v-model="item.position"
          @blur="saveItem"
        />
        <label for="inputPosition">Позиция</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <textarea
          class="form-control"
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
  computed: {
    groups() {
      this.$store.getters.group
    }
  },
  methods: {
    saveItem() {
      this.$store.dispatch('updateItem', { item: this.item })
    }
  }
}
</script>