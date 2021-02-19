import { defineComponent } from 'vue'
import { setup } from './setup'
import { RawBindings } from './types/template-bindings'
// @ts-ignore
import { render } from './template.vue?vue&type=template&lang=htm'
// @ts-ignore
import { components } from './template.vue?vue&type=script&lang=ts'
// @ts-ignore
import $style from './styles.module.pcss'

export default defineComponent<{}, RawBindings>({
  setup,
  render,
  components,
  $style,
})
