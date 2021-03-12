import { provide, ComponentPublicInstance } from 'vue'
import block from 'bem-css-modules'

block.setSettings({
  modifierDelimiter: '--',
})

export const BemCssModuleCn = Symbol('BemCssModuleCn')

type CssModuleType =
  | {
      [key: string]: string
    }
  | {
      readonly [key: string]: string
    }

interface ModsType {
  [key: string]: boolean | string | number | undefined
}
interface StatesType {
  [key: string]: boolean | undefined
}

type CnFunction<T, ReturnType> = (
  element?: T,
  mods?: ModsType | StatesType | null,
  states?: StatesType | null,
) => ReturnType

/**
 *
 * @param style
 */
export const useBemPropBindings = <T extends string>(
  ...[cssModule, name]: Parameters<typeof block>
) => {
  const cn: CnFunction<T, string> = block(cssModule, name)
  const cnFn: CnFunction<T, { class: ReturnType<typeof cn> }> = (
    element,
    mods,
    states,
  ) => ({
    class: cn(element, mods, states),
  })
  return cnFn
}

/**
 *
 * @param cssModule
 * @param name
 */
export const useBem = <T extends string>(
  cssModule: CssModuleType,
  name?: T,
): CnFunction<string, string> => {
  return block(cssModule, name)
}

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
    app.provide(BemCssModuleCn, block)
    provide(BemCssModuleCn, block)

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
