import { onMounted } from '@vue/runtime-core'

export const Events = {
  METADATA_EMITTED: 'metadataEmitted',
}

export const useEmitMetadata = (metadata, context) => {
  const { emit } = context
  onMounted(() => {
    emit(Events.METADATA_EMITTED, {
      __timestamp: Date.now(),
      ...metadata,
    })
  })
}
