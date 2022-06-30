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
    instruments: String
}

type Query {
    artists: [Artist]
    artist(id: ID!): Artist
}

`;

module.exports = typeDefs;
