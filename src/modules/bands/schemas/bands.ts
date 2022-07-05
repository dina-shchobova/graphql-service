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

type BandsResult {
    items: [Band],
    total: Int,
    limit: Int,
    offset: Int,
}

extend type Query {
    bands: BandsResult,
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

type CreateBandResponse {
    code: Int!
    success: Boolean!
    message: String!
    bands: Band
}

extend type Mutation {
    createBand(createBandInput: CreateBandInput): CreateBandResponse!
}

`;

export { typeDefs };
