import {gql} from 'apollo-server';

const typeDefs = gql`

    type Genre {
        id: ID!,
        name: String,
        description: String,
        country: String,
        year: Int,
    }

    input PaginationInput {
        limit: Int
        offset: Int
    }

    extend type Query {
        genres(pagination: PaginationInput): [Genre],
        genre(id: ID!): Genre,
    }

    input GenresInput {
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
        createGenre(genresInput: GenresInput): CreateGenreResponse!
    }

`;

export {typeDefs};
