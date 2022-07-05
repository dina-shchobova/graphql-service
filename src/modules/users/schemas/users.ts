import { gql } from 'apollo-server';

const typeDefs = gql`

type JWT {
    jwt: String!
}    
    
type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
}

extend type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): JWT
}

input RegisterUserInput {
    firstName: String
    lastName: String
    password: String
    email: String!
}

type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
}

type Mutation {
    registerUser(registerUserInput: RegisterUserInput): User!
}

`;

export { typeDefs };
