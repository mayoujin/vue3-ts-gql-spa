import { useQuery, useResult } from '@vue/apollo-composable';
import CharactersDocument from './queries/CharactersList.query.graphql';
export const useFetchData = () => {
    const { result, loading } = useQuery(CharactersDocument);
    const characters = useResult(result, [], ({ characters: { results } }) => results);
    return {
        loading,
        characters,
    };
};
export const setup = () => {
    return useFetchData();
};
export default {
    setup,
};
//# sourceMappingURL=setup.js.map