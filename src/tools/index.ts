import { onBeforeMount } from 'vue'

export const Events = {
  METADATA_EMITTED: 'metadataEmitted',
}

export const useEmitMetadata = (metadata, context) => {
  const { emit } = context
  onBeforeMount(() => {
    emit(Events.METADATA_EMITTED, {
      __timestamp: Date.now(),
      ...metadata,
    })
  })
}
useEmitMetadata.eventName = Events.METADATA_EMITTED
