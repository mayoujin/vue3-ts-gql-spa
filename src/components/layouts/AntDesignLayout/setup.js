import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'

export const setup = () => {
  const route = useRoute()
  const selectedKeys = ref()
  debugger
  return {
    selectedKeys,
  }
}

export default {
  setup,
}
