<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="inputTitle"
          placeholder="Название"
        />
        <label for="inputTitle">Название</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <select class="form-select" id="inputStatus">
          <option value="active" selected>Active</option>
          <option value="archive">Archive</option>
        </select>
        <label for="inputStatus">Статус</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="inputPosition"
          placeholder="Позиция"
          step="1"
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
        ></textarea>
        <label for="inputDescription">Описание</label>
      </div>
    </div>
  </div>
</template>