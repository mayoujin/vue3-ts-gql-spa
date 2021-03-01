const { default: jsxVuePlugin } = require('@vue/babel-plugin-jsx')
const identifiersToImport = [
  '_createVNode',
  '_createTextVNode',
  '_resolveComponent',
  '_mergeProps',
]

const __static__ = '__static__'

const identifiersWhichRender = ['_createVNode']

const hasStaticAttr = ({ type, properties }) => {
  return (
    type === 'ObjectExpression' &&
    properties.some(({ type, key }) => {
      return type === 'ObjectProperty' && key.value === __static__
    })
  )
}

const hasStaticClass = (nodeArguments) => {
  return nodeArguments.some((item) => {
    const { type, arguments: args } = item
    return (
      type === 'NullLiteral' ||
      hasStaticAttr(item) ||
      (type === 'CallExpression' && args.some(hasStaticAttr))
    )
  })
}

const areAllAttributesStatic = (attributes) => {
  return attributes.every((attribute) => {
    const attr = attribute.value
    return (
      (attr && attr.type === 'StringLiteral') ||
      (attr.expression && attr.expression.type === 'StringLiteral')
    )
  })
}

const createJSXElementVisitor = (babel) => {
  return jsxVuePlugin(babel).visitor.JSXElement.exit[0]
}

exports.identifiersToImport = identifiersToImport
exports.identifiersWhichRender = identifiersWhichRender
exports.hasStaticClass = hasStaticClass
exports.createJSXElementVisitor = createJSXElementVisitor
exports.areAllAttributesStatic = areAllAttributesStatic
exports.__static__ = __static__
