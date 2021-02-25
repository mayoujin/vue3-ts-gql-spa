const DIRECTIVE_NAME = 'styled'
const PROP_VALUE_SEPARATOR = '_'
const MODIFIER_SEPARATOR = '--'

const createAddClassList = (el) => (classListString) => {
  el?.classList?.add(...classListString.split(' '))
}

export const apply = (app) => {
  app.directive(DIRECTIVE_NAME, {
    beforeMount (el, binding) {
      const {
        instance: { $style },
        arg: tagMatcher,
        value,
      } = binding

      if (!$style) {
        return
      }
      const addClassList = createAddClassList(el)

      const { [tagMatcher]: classNamesBase } = $style
      if (classNamesBase) {
        addClassList(classNamesBase)
      }

      if (!value) {
        return
      }
      const modifiersList = Object.entries(value).map(([k, v]) =>
        [k, v].join(PROP_VALUE_SEPARATOR),
      )
      const matcherModified = [tagMatcher, ...modifiersList].join(
        MODIFIER_SEPARATOR,
      )
      const { [matcherModified]: classNamesModified } = $style

      if (classNamesModified) {
        addClassList(classNamesModified)
      }
    },
  })
}
