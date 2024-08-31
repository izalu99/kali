
import { gql} from '@apollo/client';

const DELETETRANSLATIONANDWORD_MUTATION = gql`
    mutation DeleteTranslationAndWord($input: DeleteTranslationInput) {
        deleteTranslationAndWord(input: $input) {
            deletedTranslation {
            id
            language
            text
            wordId
            }
            deletedWord {
            id
            text
            type
            tense
            }
        }
    }
`;

export default DELETETRANSLATIONANDWORD_MUTATION;