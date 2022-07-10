import {gql} from 'apollo-server';

const typeDefs = gql`

    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: [String]
    }

    extend type Query {
        artists(pagination: PaginationInput): [Artist],
        artist(id: ID!): Artist,
    }

    input CreateArtistInput {
        firstName: String!
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID]
        instruments: [String]
    }

    input UpdateArtistInput {
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID]
        instruments: [String]
    }

    extend type Mutation {
        createArtist(createArtistInput: CreateArtistInput): Artist
        deleteArtist(id: ID!): ResponseDeleteMutation
        updateArtist(id: ID!, updateArtistInput: UpdateArtistInput): Artist
    }

`;

export {typeDefs};
