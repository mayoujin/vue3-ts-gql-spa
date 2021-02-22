import { onBeforeMount } from '@vue/runtime-core';
export const Events = {
    METADATA_EMITTED: 'metadataEmitted',
};
export const useEmitMetadata = (metadata, context) => {
    const { emit } = context;
    onBeforeMount(() => {
        emit(Events.METADATA_EMITTED, Object.assign({ __timestamp: Date.now() }, metadata));
    });
};
//# sourceMappingURL=index.js.map