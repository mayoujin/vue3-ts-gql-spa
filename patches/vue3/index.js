'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
Object.defineProperty(exports, 'css', {
  enumerable: true,
  get: function get() {
    return _core.css
  },
})
Object.defineProperty(exports, 'create', {
  enumerable: true,
  get: function get() {
    return _core.create
  },
})
Object.defineProperty(exports, 'set', {
  enumerable: true,
  get: function get() {
    return _core.set
  },
})
Object.defineProperty(exports, '__css__', {
  enumerable: true,
  get: function get() {
    return _core.__css__
  },
})
exports['default'] = exports.map = exports.use = void 0

var _core = _interopRequireWildcard(require('@reshadow/core'))

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {}
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }
    }
    newObj['default'] = obj
    return newObj
  }
}

_core.KEYS.__classProp__ = 'class'
exports.KEYS = _core.KEYS

var map = function map(element, data) {
  return _core.map(element, data)
}

exports.map = map

var use = function use(obj) {
  return {
    [_core.KEYS.__use__]: obj,
  }
}

exports.use = use
var _default = _core['default']
exports['default'] = _default

var _vue = require('vue')
var _vueCore = require('@vue/runtime-core')

exports._createVNode = _vue.createVNode
exports._createTextVNode = _vue.createTextVNode
exports._mergeProps = _vue.mergeProps
exports._resolveComponent = _vueCore.resolveComponent
