import {
  GqlTypeNamePartialOf,
  GqlTypeNamePartial,
} from '#gql/apollo/utils/index.d'
import { ErrorMessageAwareInterface } from '#gql/types/auth'

import { always, ifElse, invoker, Lens, pipe, view } from 'ramda'

import { match, Pattern } from 'typescript-pattern-matching'

import { Either, Left, Right } from 'purify-ts'

export { useQuery, useMutation, useResult } from '@vue/apollo-composable'

export const createLensViewer = <T, U>(lens: Lens) => view<T, U>(lens)

const ErrorMessageAwareInterfacePattern: Pattern<ErrorMessageAwareInterface> = {
  errorMessage: String,
}

/**
 *
 * @param targetPattern
 * @param failPattern
 */
export const typeMatcher = <
  TResult extends TTarget | TFail | ErrorMessageAwareInterface,
  TTarget extends GqlTypeNamePartial,
  TFail extends GqlTypeNamePartial
>(
  targetPattern?: GqlTypeNamePartialOf<TTarget>,
  failPattern:
    | Pattern<ErrorMessageAwareInterface>
    | GqlTypeNamePartialOf<TFail> = ErrorMessageAwareInterfacePattern,
) => {
  type EitherResult = Either<NonNullable<TFail>, NonNullable<TTarget>>

  const resultMatcher = (r: TResult) => [match<TResult, EitherResult>(r), r]

  type TResultMatcherReturn = ReturnType<typeof resultMatcher>

  const failPatternMatcher = ([matcher, result]: TResultMatcherReturn) =>
    matcher
      .with(failPattern, (fail: NonNullable<TFail>) => Left(fail))
      .otherwise(() => Right(result))

  const targetPatternMatcher = ([matcher, result]: TResultMatcherReturn) =>
    matcher
      .with(targetPattern, (target: NonNullable<TTarget>) => Right(target))
      .otherwise(() => Left(result))

  const final: (result: TResult) => EitherResult = pipe(
    resultMatcher,
    ifElse(
      always(failPattern !== null),
      failPatternMatcher,
      targetPatternMatcher,
    ),
    invoker(0, 'run'),
  )

  return final
}

export const __typename = <T extends GqlTypeNamePartial>(
  __typename: Required<T>['__typename'],
): GqlTypeNamePartial<Required<T>['__typename']> => ({
  __typename,
})
