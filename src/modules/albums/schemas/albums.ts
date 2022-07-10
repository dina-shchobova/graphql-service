import {gql} from 'apollo-server';

const typeDefs = gql`

    type Album {
        id: ID!
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }

    extend type Query {
        albums(pagination: PaginationInput): [Album]
        album(id: ID!): Album
    }

    input AlbumInput {
        name: String!
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
        image: String
    }

    input UpdateAlbumInput {
        name: String
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
        image: String
    }


    extend type Mutation {
        createAlbum(albumInput: AlbumInput): Album
        deleteAlbum(id: ID!): ResponseDeleteMutation
        updateAlbum(id: ID!, updateAlbumInput: UpdateAlbumInput): Album
    }

`;

export {typeDefs};
