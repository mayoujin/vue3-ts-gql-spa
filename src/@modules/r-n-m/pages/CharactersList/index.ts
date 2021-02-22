import { defineComponent } from 'vue'
import { setup } from './setup'
// import component from './setup'
import { RawBindings } from './types/template-bindings'
// @ts-ignore
import { render } from './template.vue?vue&type=template'
// @ts-ignore
import { components } from './template.vue?vue&type=script&lang=ts'
// @ts-ignore
import $style from './styles.module.pcss'

// @ts-ignore
// export default defineComponent<{}, RawBindings>(component)
export default defineComponent<{}, RawBindings>({
  components,
  // setup: (props, context) => template(setup(props, context) as RawBindings),
  setup,
  render,
  $style,
})
