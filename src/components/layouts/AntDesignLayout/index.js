import { defineComponent } from 'vue'
import { template } from './template'

export default defineComponent({
  setup: (props, context) => template(props, context),
})
