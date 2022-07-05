import { gql } from 'apollo-server';

const typeDefs = gql`

type Genre {
    id: ID!,
    name: String,
    description: String,
    country: String,
    year: Int,
}

type GenresResult {
    items: [Genre],
    total: Int,
    limit: Int,
    offset: Int,
}

extend type Query {
genres: GenresResult,
genre(id: ID!): Genre,
}

input CreateGenreInput {
name: String,
description: String,
country: String,
year: Int,
}

type CreateGenreResponse {
    code: Int!
    success: Boolean!
    message: String!
    genre: Genre
}

extend type Mutation {
    createGenre(createGenreInput: CreateGenreInput): CreateGenreResponse!  
}

`;

export { typeDefs };
