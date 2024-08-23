

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

    union SearchResult = Word | Translation
    
    type Query {
        me: String!
        words: [Word]
        translations: [Translation]
        search(input:String!): [SearchResult]!
    }
    
    input CreateWordInput {
        id: ID!
        text: String!
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
        tense: String
        example: String
    }
    
    input UpdateTranslationInput {
        id: ID!
        text: String!
        language: String!
        wordId: String!
    }

    
    type Mutation {
        createWord(input: CreateWordInput): Word!
        createTranslation(input: CreateTranslationInput): Translation!

        updateWord(input: UpdateWordInput): Word!
        updateTranslation(input: UpdateTranslationInput): Translation!


        deleteWord(id: ID!): Word!
        deleteTranslation(id: ID!): Translation!

    }
`

export default schema;