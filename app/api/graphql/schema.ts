

const schema = `
    interface User {
        id: ID!
        email: String!
        __typename: String!
    }
    
    type Translation {
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
        __typename: String!
    }


    type Query {
        users: [User]!
        admins: [Admin]!
    }

    union UserOrAdmin = User | Admin
    union SearchResult = Word | Translation
`

export default schema;