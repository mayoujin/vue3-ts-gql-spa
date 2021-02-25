import { ToRefs } from '@vue/reactivity'
/* eslint-disable */
import { defineComponent } from 'vue'
import { setup } from './setup'
import { VueComponentProps, RawBindings, ComponentProps } from './types/props'
// @ts-ignore
import { render } from './template.vue?vue&type=template'
// @ts-ignore
import {
  components,
  props,
  // $style,
  // @ts-ignore
} from './template.vue?vue&type=script&lang=ts'
// @ts-ignore
import $style from './styles.module.pcss'

export default defineComponent<ComponentProps, ToRefs<RawBindings>>({
  setup,
  render,
  $style,
  components,
  props,
})
