import { ref } from '@vue/reactivity'

export const setup = () => {
  const title = ref('Title')
  const subtitle = ref('')
  const onContentMetadata = ({ subtitle: _subtitle }) => {
    title.value = _subtitle
  }

  return {
    title,
    onContentMetadata,
  }
}

export default {
  setup,
}
