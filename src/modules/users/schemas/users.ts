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

#extend type Mutation {
#    
#}

`;

export { typeDefs };
