import { computed, watch, ref } from '@vue/composition-api';
import { typeMatcher } from '#gql/apollo/utils';
import { useEventHook } from '@vue/apollo-composable/dist/util/useEventHook';
import { isNil, unless } from 'ramda';
export function useMatchResult(result, defaultValue = null, targetPattern, failPattern) {
    const resultTypeMatcher = typeMatcher(targetPattern, failPattern);
    const data = computed(() => {
        return result.value === null
            ? defaultValue
            : resultTypeMatcher(result.value)
                // @ts-ignore
                .orDefault(defaultValue !== null && defaultValue !== void 0 ? defaultValue : null);
    });
    const error = computed(() => {
        return result.value === null
            ? null
            : resultTypeMatcher(result.value).leftOrDefault(null);
    });
    return { data, error };
}
export function useEitherResult(result, targetPattern, failPattern) {
    const resultTypeMatcher = typeMatcher(targetPattern, failPattern);
    const right = ref(null);
    const left = ref(null);
    const matchEvent = useEventHook();
    const leftEvent = useEventHook();
    const rightEvent = useEventHook();
    const matchResult = (value) => {
        const either = resultTypeMatcher(value)
            .ifLeft((value) => {
            left.value = value;
            leftEvent.trigger(value);
        })
            .ifRight((value) => {
            right.value = value;
            rightEvent.trigger(value);
        });
        matchEvent.trigger(either);
    };
    watch(result, unless(isNil, matchResult));
    return {
        left: computed(() => left.value),
        right: computed(() => right.value),
        onMatch: matchEvent.on,
        // @ts-ignore
        ifLeft: (fn) => leftEvent.on(fn),
        ifRight: (fn) => 
        // @ts-ignore
        rightEvent.on(fn),
    };
}
// export const useMutationResult = <A extends () => void, B, C>(onDone: A, defaultValue: B, extractor: C) =>  {
//   onDone((result?: FetchResult<A>) => {
//     data.value = result?.data ?? null
//   })
//
//
//   const target = useResult<Maybe<A>>(data, defaultValue, extractor)
//
// }
//# sourceMappingURL=useMatchResult.js.map