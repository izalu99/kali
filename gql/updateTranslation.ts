
import { gql} from '@apollo/client';

const UPDATETRANSLATION_MUTATION = gql`
    mutation UpdateTranslation($input: UpdateTranslationInput) {
        updateTranslation(input: $input) {
            id
            language
            text
            wordId
        }
    }
`;

export default UPDATETRANSLATION_MUTATION;