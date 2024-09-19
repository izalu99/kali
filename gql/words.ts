
import { gql} from '@apollo/client';

const WORDS_QUERY = gql`
    query Words($input:String!, $limit: Int, $offset: Int) {
    words (input: $input, limit: $limit, offset: $offset) {
        id
        text
        pronunciation
        tense
        type
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

export default WORDS_QUERY;