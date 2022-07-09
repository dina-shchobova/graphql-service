import {gql} from 'apollo-server';

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

    input CreateTrackInput {
        title: String!
        albumId: ID
        artistsIds: [ID]
        bandsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]
    }

    input UpdateTrackInput {
        title: String
        albumId: ID
        artistsIds: [ID]
        bandsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]
    }

    extend type Mutation {
        createTrack(createTrackInput: CreateTrackInput): Track
        deleteTrack(id: ID!): ResponseDeleteMutation
        updateTrack(id: ID!, updateTrackInput: UpdateTrackInput): Track
    }
`;

export {typeDefs};

