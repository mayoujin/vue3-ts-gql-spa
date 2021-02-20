const { createVNode, createTextVNode, mergeProps } = require('vue')
const jsxVuePlugin = require('@vue/babel-plugin-transform-vue-jsx')
const identifiersToImport = [
  'h',
]

const identifiersWhichRender = [
  'h',
];

const __static__ = '__static__';

const hasStaticAttr = ({ type, properties }) => {
  return type === 'ObjectExpression'
    && properties.some(({ type, key }) => {
      return type === 'ObjectProperty'
        && key.value === _core.KEYS.__static__;
    })
};

const hasStaticClass = (nodeArguments) => {
  return nodeArguments.some((item) => {
    const { type, arguments: args } = item;
    return type === 'NullLiteral'
      || hasStaticAttr(item)
      || type === 'CallExpression'
      && args.some(hasStaticAttr)
  });
}

const areAllAttributesStatic = (attributes) => {
  return attributes.every((attribute) => {
    const attr = attribute.value;
    return (attr && attr.type === 'StringLiteral')
      || (attr.expression && attr.expression.type === 'StringLiteral');
  });
}

const createJSXElementVisitor = (babel) => {
  return jsxVuePlugin(babel).visitor.JSXElement.exit;
}

exports = {
  _createVNode: createVNode,
  _createTextVNode: createTextVNode,
  _mergeProps: mergeProps,
  identifiersToImport,
  identifiersWhichRender,
  hasStaticClass,
  createJSXElementVisitor,
  areAllAttributesStatic,
  __static__
}
