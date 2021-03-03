import { watch, computed, ref, ComputedRef } from 'vue'
import { ComponentProps } from './PageHeader'

export const PageHeaderDataSymbol = Symbol('PageHeaderDataSymbol')

/**
 *
 * @param metadataRef
 */
export const usePageHeaderMetadataReceiver = (
  metadataRef,
): ComputedRef<ComponentProps> => {
  const titleRef = ref('')
  const subtitleRef = ref('')

  const props = computed(() => ({
    title: titleRef.value,
    'sub-title': subtitleRef.value,
  }))

  const onMetadataReceived = (metadata) => {
    const { [PageHeaderDataSymbol]: data } = metadata
    const { title, 'sub-title': subtitle } = data
    subtitleRef.value = subtitle
    titleRef.value = title
  }

  watch(metadataRef, onMetadataReceived)

  return props
}
