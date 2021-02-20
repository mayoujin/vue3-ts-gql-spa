/**
 * Global JS Libs, Vue Utils, Helpers, Plugins
 */
import { computed, ref } from '@vue/reactivity'

/**
 * Global UI
 */
import { PageHeader } from 'ant-design-vue'
import { onBeforeMount, onMounted, watch } from '@vue/runtime-core'

/**
 * Component-level stuff
 */

/**
 * Service and helpers builds, inits
 */

const Component = ({ title, 'sub-title': subtitle }) => {
  return <PageHeader title={title} sub-title={subtitle} />
}

export const PageHeaderDataSymbol = Symbol('PageHeaderDataSymbol')

export const usePageHeaderMetadataReceiver = (metadataRef) => {
  const titleRef = ref('')
  const subtitleRef = ref('')
  const props = computed(() => {
    return {
      title: titleRef.value,
      'sub-title': subtitleRef.value,
    }
  })

  const onMetadataReceived = (metadata) => {
    const { [PageHeaderDataSymbol]: data } = metadata
    const { title, subtitle } = data
    subtitleRef.value = title
    titleRef.value = subtitle
  }

  watch(metadataRef, onMetadataReceived)

  return {
    props,
  }
}

export default Component
