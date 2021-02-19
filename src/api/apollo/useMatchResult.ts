import { Maybe } from '#gql/types/auth'

import { Ref, computed, watch, ref } from '@vue/composition-api'
import { typeMatcher } from '#gql/apollo/utils'
import { Pattern } from 'typescript-pattern-matching'
import { useEventHook } from '@vue/apollo-composable/dist/util/useEventHook'
import { isNil, unless } from 'ramda'

export function useMatchResult<
  TResult,
  TDefaultValue,
  TTargetValue,
  TFailValue = unknown
>(
  result: Ref<TResult>,
  defaultValue: Maybe<TDefaultValue> = null,
  targetPattern?: Maybe<Pattern<TTargetValue>>,
  failPattern?: Maybe<Pattern<TFailValue>>,
) {
  const resultTypeMatcher = typeMatcher<
    TResult,
    Maybe<TTargetValue>,
    Maybe<TFailValue>
  >(targetPattern, failPattern)

  const data = computed(() => {
    return result.value === null
      ? defaultValue
      : resultTypeMatcher(result.value)
          // @ts-ignore
          .orDefault(defaultValue ?? null)
  })
  const error = computed(() => {
    return result.value === null
      ? null
      : resultTypeMatcher(result.value).leftOrDefault(null)
  })

  return { data, error }
}

export function useEitherResult<TResult, TTargetValue, TFailValue = unknown>(
  result: Ref<TResult>,
  targetPattern?: Maybe<Pattern<TTargetValue>>,
  failPattern?: Maybe<Pattern<TFailValue>>,
) {
  const resultTypeMatcher = typeMatcher<TResult, TTargetValue, TFailValue>(
    targetPattern,
    failPattern,
  )

  const right: Ref<Maybe<TTargetValue>> = ref(null)
  const left: Ref<Maybe<TFailValue>> = ref(null)

  const matchEvent = useEventHook<ReturnType<typeof resultTypeMatcher>>()
  const leftEvent = useEventHook<NonNullable<TFailValue>>()
  const rightEvent = useEventHook<NonNullable<TTargetValue>>()

  const matchResult = (value: TResult) => {
    const either = resultTypeMatcher(value)
      .ifLeft((value) => {
        left.value = value
        leftEvent.trigger(value)
      })
      .ifRight((value) => {
        right.value = value
        rightEvent.trigger(value)
      })

    matchEvent.trigger(either)
  }

  watch<TResult>(result, unless(isNil, matchResult))

  return {
    left: computed(() => left.value),
    right: computed(() => right.value),
    onMatch: matchEvent.on,
    // @ts-ignore
    ifLeft: (fn: (param: NonNullable<TFailValue>) => void) => leftEvent.on(fn),
    ifRight: (fn: (param: NonNullable<TTargetValue>) => void) =>
      // @ts-ignore
      rightEvent.on(fn),
  }
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
