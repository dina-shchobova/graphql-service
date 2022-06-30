import { gql } from 'apollo-server';

const typeDefs = gql`

type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
}

# TODO: only for logged in user
extend type Query {
    favourites: Favourites
}

`;

export { typeDefs };
