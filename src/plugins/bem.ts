/**
 * Bem plugin directive.
 */

import { provide, ComponentPublicInstance } from 'vue'
import { useBem, bem } from '@/tools/bem'
export const BemCssModuleCn = Symbol('BemCssModuleCn')

/**
 *
 * @param instance
 */
const getCnFunction = (instance: ComponentPublicInstance) => {
  const {
    $options: { $bemCn },
  } = instance
  return $bemCn
}

/**
 *
 */
export const directive = {
  beforeMount(el, binding) {
    const { instance, arg: element, value: dynamicMods } = binding
    const modifiers = dynamicMods
    const $bemCn = getCnFunction(instance)
    const bemClassNames = $bemCn(element, modifiers)
    if (bemClassNames) {
      el.classList.add(...bemClassNames.split(' '))
    }
  },
}

/**
 *
 */
const plugin = {
  install: (app) => {
    app.provide(BemCssModuleCn, bem)
    provide(BemCssModuleCn, bem)

    app.mixin({
      beforeCreate() {
        const { $options } = this
        if ($options.$bemCn || $options.$bemModule === undefined) {
          return
        }
        $options.$bemCn = useBem($options.$bemModule)
      },
    })

    app.directive('bem', directive)
  },
}

export default plugin

export const apply = ({ app }) => {
  app.use(plugin)
}
