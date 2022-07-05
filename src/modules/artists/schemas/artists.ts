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
    bands: [Band]
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

`;

export { typeDefs };
