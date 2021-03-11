import { ref, Ref } from 'vue'

type ComponentMetadata = Record<string | symbol, any>

export const useMetadata = () => {
  const metadataRef: Ref<ComponentMetadata> = ref({})

  const onMetadataEmitted = (metadata: ComponentMetadata) => {
    metadataRef.value = metadata
  }

  return {
    metadataRef,
    onMetadataEmitted,
  }
}
