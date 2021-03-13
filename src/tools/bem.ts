import bemOriginal from 'bem-css-modules'

export const bem = bemOriginal

bem.setSettings({
  modifierDelimiter: '--',
})

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
  ...[cssModule, name]: Parameters<typeof bem>
) => {
  const cn: CnFunction<T, string> = bem(cssModule, name)
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
  return bem(cssModule, name)
}
