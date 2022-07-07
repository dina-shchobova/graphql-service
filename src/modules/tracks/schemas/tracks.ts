import { gql } from 'apollo-server';

const typeDefs = gql`

    type Track {
        id: ID!
        title: String!
        album: Album
        artists: [Artist]
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }

    extend type Query {
        tracks(pagination: PaginationInput): [Track],
        track(id: ID!): Track,
    }

`;

export { typeDefs };

