
import { gql} from '@apollo/client';

const SEARCH_QUERY = gql`
    query Search($input: String!, $limit: Int, $offset: Int) {
        search(input: $input, limit: $limit, offset: $offset) {
            id
            text
            pronunciation
            type
            tense
            example
            translations {
            id
            language
            text
            wordId
            }
        }
    }
`;

export default SEARCH_QUERY;