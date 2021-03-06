/**
 * Jest directive to mark components parts to use in jest tests
 */
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

  return null
}

export const useTest = () => {
  return {
    getSelector,
  }
}

/**
 *
 */
export const directive = {
  beforeMount(el, binding) {
    const { instance, arg: name, value } = binding

    const testName = value ?? name ?? instance.$options.name

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

export const apply = ({ install }) => {
  install(plugin)
}

export default plugin
