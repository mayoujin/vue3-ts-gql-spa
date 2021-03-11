export const TestPlugin = Symbol('TestPlugin')

const TEST_ATTR = 'data-test'
const DIRECTIVE_NAME = 'test'

/**
 *
 * @param identifierObject
 */
const getSelector = (identifierObject) => {
  if (typeof identifierObject === 'string') {
    return `[${TEST_ATTR}="${identifierObject}"]`
  }
  if (identifierObject.name) {
    return `[${TEST_ATTR}="${identifierObject.name}"]`
  }

  return `[${TEST_ATTR}="${identifierObject}"]`
}

/**
 *
 * @param component
 */
export const useTest = (component?: any) => {
  return {
    getSelector,
  }
}

/**
 *
 */
export const directive = {
  beforeMount(el, binding) {
    const { instance, arg: name } = binding

    const testName = name ?? instance.$options.name

    el.setAttribute(TEST_ATTR, testName)
  },
}

/**
 *
 */
const plugin = {
  install: (app) => {
    app.directive(DIRECTIVE_NAME, directive)
  },
}

export const apply = ({ app }) => {
  app.use(plugin)
}

export default plugin
