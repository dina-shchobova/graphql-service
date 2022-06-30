import { gql } from 'apollo-server';
import { typeDefs as Users } from './modules/users/schemas/users';
import { typeDefs as Albums } from './modules/albums/schemas/albums';
import { typeDefs as Artists } from './modules/artists/schemas/artists';
import { typeDefs as Bands } from './modules/bands/schemas/bands';
import { typeDefs as Favourites } from './modules/favourites/schemas/favourites';
import { typeDefs as Genres } from './modules/genres/schemas/genres';
import { typeDefs as Tracks } from './modules/tracks/schemas/tracks';

const Query = gql`
    type Query
#    type Mutation
`;

const  typeDefs = [Query, Users, Albums, Artists, Bands, Favourites, Genres, Tracks];

export default typeDefs;
