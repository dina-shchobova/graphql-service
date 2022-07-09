import {gql} from 'apollo-server';

const typeDefs = gql`

    type Favourites {
        id: ID!
        userId: ID
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }

    extend type Query {
        favourites: Favourites,
    }

    input AddFavouriteInput {
        type: String!,
        id: ID!
    }

    input RemoveFavouriteInput {
        type: String!,
        id: ID!
    }

    extend type Mutation {
        addArtistToFavourites(addFavouriteInput: AddFavouriteInput): Favourites,
        addBandToFavourites(addFavouriteInput: AddFavouriteInput): Favourites,
        addGenreToFavourites(addFavouriteInput: AddFavouriteInput): Favourites,
        addTrackToFavourites(addFavouriteInput: AddFavouriteInput): Favourites,
        removeFromFavourites(removeFavouriteInput: RemoveFavouriteInput): Favourites,
    }

`;

export {typeDefs};
