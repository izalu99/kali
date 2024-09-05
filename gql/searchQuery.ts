
import { gql} from '@apollo/client';

const SEARCH_QUERY = gql`
    query Search($input: String!) {
        search(input: $input) {
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