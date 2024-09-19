

const schema = `
    interface User {
        id: ID!
        email: String!
    }
    
    type Translation {
        id: ID!
        language: String!
        text: String!
        wordId: String!
        word: Word

    }

    type Word {
        id: ID!
        text: String!
        pronunciation: String
        type: String
        tense: String
        example: String
        translations: [Translation]
    }

    type Admin implements User {
        id: ID!
        email: String!
    }

    type Example {
        name: String!
        age: Int!
        email: String!
    }

    
    type Query {
        me: String!
        words(input:String!, limit: Int, offset: Int): [Word]
        translations: [Translation]
        search(input:String!, limit: Int, offset: Int): [Word]!
    }
    
    input CreateWordInput {
        id: ID!
        text: String!
        pronunciation: String
        type: String
        tense: String
        example: String
    }
    
    input CreateTranslationInput {
        id: ID!
        language: String!
        text: String!
        wordId: String!
    }

    input UpdateWordInput {
        id: ID!
        text: String!
        type: String
        pronunciation: String
        tense: String
        example: String
    }
    
    input UpdateTranslationInput {
        id: ID!
        text: String!
        language: String!
        wordId: String!
    }


    input DeleteTranslationInput {
        id: ID!
        text: String!
        language: String!
        wordId: String!
    }

    type DeleteTranslationAndWordPayload {
        deletedTranslation: Translation
        deletedWord: Word
    }

    
    type Mutation {
        createWord(input: CreateWordInput): Word!
        createTranslation(input: CreateTranslationInput): Translation!

        updateWord(input: UpdateWordInput): Word!
        updateTranslation(input: UpdateTranslationInput): Translation!

        deleteTranslationAndWord(input: DeleteTranslationInput): DeleteTranslationAndWordPayload!

    }
`

export default schema;