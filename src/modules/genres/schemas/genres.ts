import { gql } from 'apollo-server';

const typeDefs = gql`

type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

type Query {
    genres: [Genre]
    genre(id: ID!): Genre
}

`;

module.exports = typeDefs;
