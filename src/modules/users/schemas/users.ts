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

type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): JWT
}

`;

module.exports = typeDefs;
