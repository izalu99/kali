
import { gql} from '@apollo/client';

const CREATETRANSLATION_MUTATION = gql`
    mutation CreateTranslation($input: CreateTranslationInput) {
    createTranslation(input: $input) {
        id
        language
        text
        wordId
    }
    }
`;

export default CREATETRANSLATION_MUTATION;