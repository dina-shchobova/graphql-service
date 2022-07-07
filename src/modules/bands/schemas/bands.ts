import { gql } from 'apollo-server';

const typeDefs = gql`

type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

type Member {
    artist: String
    instrument: String
    years: String
}

extend type Query {
    bands(pagination: PaginationInput): [Band],
    band(id: ID!): Band,
}

input MemberInput {
    artist: String
    instrument: String
    years: String
}

input CreateBandInput {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
}

type DeletedArtist {
    acknowledged: Boolean
    deletedCount: Int
}

extend type Mutation {
    createBand(createBandInput: CreateBandInput): Band
    deleteBand(id: ID!): DeletedArtist
}

`;

export { typeDefs };
