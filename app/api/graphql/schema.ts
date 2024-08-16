

const schema = `
    interface User {
        id: ID!
        email: String!
        typename: String!
    }
    
    type Translation {
        id: ID!
        language: String!
        text: String!
    }

    type Word {
        id: ID!
        word: String!
        translation: Translation!
        type: String
        tense: String
        example: String
    }

    type Admin implements User {
        id: ID!
        email: String!
        typename: String!
    }

    
    union SearchResult = Word | Translation


    input SearchInput {
        id: ID!
    }

    type Query {
        me: String!
        users: [User]!
        admins: [Admin]!
        search(input: SearchInput!): [SearchResult]!
    }
    
    type Mutation {
        createUser(email: String!): User!
        createAdmin(email: String!): Admin!
        createWord(word: String!, translation: String!, type: String, tense: String, example: String): Word!
        createTranslation(language: String!, text: String!): Translation!

        updateUser(email: String!): User!
        updateAdmin(email: String!): Admin!
        updateWord(word: String!, translation: String!, type: String, tense: String, example: String): Word!
        updateTranslation(language: String!, text: String!): Translation!

        deleteUser(email: String!): User!
        deleteAdmin(email: String!): Admin!
        deleteWord(word: String!): Word!
        deleteTranslation(text: String!): Translation!

    }
`

export default schema;