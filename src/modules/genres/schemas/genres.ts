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
    
    type ResponseDeleteMutation {
        acknowledged: Boolean
        deletedCount: Int
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

    extend type Mutation {
        createGenre(genresInput: GenresInput): Genre
        deleteGenre(id: ID!): ResponseDeleteMutation
        updateGenre(id: ID!, genresInput: GenresInput): Genre
    }

`;

export {typeDefs};
