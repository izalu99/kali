

const schema = `
    interface User {
        id: ID!
        email: String!
    }
    
    type Translation {
        id: ID!
        language: String!
        text: String!
        wordId: String
    }

    type Word {
        id: ID!
        text: String!
        translations: [Translation]
        type: String
        tense: String
        example: String
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

    type GetWordAndTranslation {
        word: Word
        translations: Translation
    }


    type Query {
        me: String!
        users(email:String!): [User]
        admins: [Admin]!
        words: [Word]
        translations: [Translation]
        example: [Example]
        GetWordAndTranslation(wordId: ID!): GetWordAndTranslation
    }
    
    type Mutation {
        createUser(id:ID!, email: String!): User!
        createAdmin(id:ID!, email: String!): Admin!
        createWord(id:ID!, text: String!, translation: String!, type: String, tense: String, example: String): Word!
        createTranslation(id: ID!, language: String!, text: String!): Translation!

        updateUser(email: String!): User!
        updateAdmin(email: String!): Admin!
        updateWord(text: String!, translation: String!, type: String, tense: String, example: String): Word!
        updateTranslation(language: String!, text: String!): Translation!

        deleteUser(email: String!): User!
        deleteAdmin(email: String!): Admin!
        deleteWord(text: String!): Word!
        deleteTranslation(text: String!): Translation!

    }
`

export default schema;