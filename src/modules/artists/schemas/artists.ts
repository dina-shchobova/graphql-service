import { gql } from 'apollo-server';

const typeDefs = gql`

type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: [String]
}

type ArtistResult {
    items: [Artist],
    limit: Int,
    offset: Int,
    total: Int,
}

extend type Query {
    artists: ArtistResult,
    artist(id: ID!): Artist,
}

input CreateArtistInput {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: [String]
}

type CreateArtistResponse {
    code: Int!
    success: Boolean!
    message: String!
    artist: Artist
}

extend type Mutation {
    createArtist(createArtistInput: CreateArtistInput): CreateArtistResponse!
}

`;

export { typeDefs };
