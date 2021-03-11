import { config } from '@vue/test-utils'
import { directive as test } from '@/plugins/jest'
import { directive as bem } from '@/plugins/bem'

config.global = Object.assign(config.global, {
  mocks: {
    $t: (text) => text,
  },
  directives: {
    test,
    bem,
  },
})
