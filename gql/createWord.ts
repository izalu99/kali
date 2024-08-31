
import { gql} from '@apollo/client';

const CREATEWORD_MUTATION = gql`
    mutation CreateWord($input: CreateWordInput) {
    createWord(input: $input) {
        id
        tense
        text
        example
        type
        }
    }
`;

export default CREATEWORD_MUTATION;