import { gql } from 'apollo-server';

const typeDefs = gql`
    
type Album {
    id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}

extend type Query {
    albums: [Album]
    album(id: ID!): Album
}

`;

export { typeDefs };
