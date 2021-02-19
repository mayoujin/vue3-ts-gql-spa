import { always, ifElse, invoker, pipe, view } from 'ramda';
import { match } from 'typescript-pattern-matching';
import { Left, Right } from 'purify-ts';
export { useQuery, useMutation, useResult } from '@vue/apollo-composable';
export const createLensViewer = (lens) => view(lens);
const ErrorMessageAwareInterfacePattern = {
    errorMessage: String,
};
/**
 *
 * @param targetPattern
 * @param failPattern
 */
export const typeMatcher = (targetPattern, failPattern = ErrorMessageAwareInterfacePattern) => {
    const resultMatcher = (r) => [match(r), r];
    const failPatternMatcher = ([matcher, result]) => matcher
        .with(failPattern, (fail) => Left(fail))
        .otherwise(() => Right(result));
    const targetPatternMatcher = ([matcher, result]) => matcher
        .with(targetPattern, (target) => Right(target))
        .otherwise(() => Left(result));
    const final = pipe(resultMatcher, ifElse(always(failPattern !== null), failPatternMatcher, targetPatternMatcher), invoker(0, 'run'));
    return final;
};
export const __typename = (__typename) => ({
    __typename,
});
//# sourceMappingURL=index.js.map