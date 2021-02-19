import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
export var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope || (CacheControlScope = {}));
export const CharactersDocument = gql `
  query Characters {
    characters {
      results {
        id
        name
        location {
          name
        }
        species
        type
        image
      }
    }
  }
`;
/**
 * __useCharactersQuery__
 *
 * To run a query within a Vue component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCharactersQuery(
 *   {
 *   }
 * );
 */
export function useCharactersQuery(options = {}) {
    return VueApolloComposable.useQuery(CharactersDocument, undefined, options);
}
//# sourceMappingURL=index.js.map