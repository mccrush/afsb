<template>
  <div class="row">
    <div class="col-12 mt-3">
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
          :disabled="!this.item.groupId"
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
  computed: {
    groups() {
      return this.$store.getters.group
    },
    undergroups() {
      return this.$store.getters.undergroup.filter(
        item => item.groupId === this.item.groupId
      )
    }
  },
  methods: {
    saveItem() {
      this.$store.dispatch('updateItem', { item: this.item })
    }
  }
}
</script>