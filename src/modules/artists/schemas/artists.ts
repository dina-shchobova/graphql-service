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

extend type Query {
    artists(pagination: PaginationInput): [Artist],
    artist(id: ID!): Artist,
}

`;

export { typeDefs };
