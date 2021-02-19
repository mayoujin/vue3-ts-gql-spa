import block from 'bem-css-modules'
import { inject, provide } from '@vue/runtime-core'

block.setSettings({
  modifierDelimiter: '--',
})

export const BemCssModuleCn = Symbol('BemCssModuleCn')

/**
 *
 * @param style
 */
export const useBem = (style) => {
  return block(style)
}

/**
 *
 * @param style
 */
export const useBemClassnameBindings = (style) => {
  const cn = block(style)
  return function (...args) {
    return {
      class: cn(...args),
    }
  }
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$bem = block
    app.provide(BemCssModuleCn, block)
    provide(BemCssModuleCn, block)

    app.mixin({
      beforeCreate() {
        const $style = this.$style || this.$options.$style
        if ($style) {
          this.cn = this.$bem($style)
        }
      },
    })
  },
}
