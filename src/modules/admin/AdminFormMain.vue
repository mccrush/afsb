<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <h6>{{ formTytle }}</h6>
    </transition>

    <transition name="fade" mode="out-in" appear>
      <component :is="formComponent" />
    </transition>
  </div>
</template>

<script>
import FormGroup from './forms/FormGroup.vue'
export default {
  components: {
    FormGroup
  },
  props: {
    formType: String
  },
  computed: {
    formComponent() {
      if (this.formType === 'group') {
        return 'FormGroup'
      }
    },
    formTytle() {
      if (this.formType === 'group') {
        return 'Группа'
      }
    }
  }
}
</script>