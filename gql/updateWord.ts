
import { gql} from '@apollo/client';

const UPDATEWORD_MUTATION = gql`
    mutation UpdateWord($input: UpdateWordInput) {
        updateWord(input: $input) {
            example
            id
            tense
            text
            type
        }
    }
`;

export default UPDATEWORD_MUTATION;