<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title">О приложении</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Слава Бот - это бесплатное приложение-справочник содержащее
            информацию о городе Славгороде и районе.
          </p>
          <p>
            Наша миссия - обеспечить доступ к необходимой информации максимально
            простым и удобным способом. Все в одном месте, и всегда под рукой!
          </p>
          <p>
            Вы можете принять участие в развитии Бота, прислав актуальную,
            точную информацию нам в
            <a
              href="https://vk.com/slavgorod_bot"
              target="_blank"
              title="Открыть группу Вконтакте"
              >группу во Вконтакте.</a
            >
            Или
            <a
              href="https://boosty.to/slavgorod_bot"
              target="_blank"
              title="Поддержать на Boosty"
              >поддержать материально на Boosty</a
            >
            (полученные средства идут на оплату сервера и кофе для программиста)
          </p>
          <p class="mb-0">
            <code class="text-muted small"
              >Версия: {{ version }}, дата релиза: {{ dateUpdate }}</code
            >
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-warning m-auto"
            data-bs-dismiss="modal"
          >
            Мне все понятно. Спасибо за информацию
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { version, dateUpdate } from './../../package.json'

export default {
  data() {
    return {
      version,
      dateUpdate
    }
  }
}
</script>