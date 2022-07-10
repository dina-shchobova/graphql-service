import {ApolloServer} from "apollo-server";
import {typeDefs} from "./graphql";
import {resolvers} from "./app.module";
import "dotenv/config";
import {UsersService} from "./modules/users/services/users.service";
import {GenresService} from "./modules/genres/services/genres.service";
import {ArtistsService} from "./modules/artists/services/artists.service";
import {BandsService} from "./modules/bands/services/bands.service";
import {TracksService} from "./modules/tracks/services/tracks.service";
import {AlbumsService} from "./modules/albums/services/albums.service";
import {FavouritesService} from "./modules/favourites/services/favourites.service";

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersService: new UsersService(),
      genresService: new GenresService(),
      artistsService: new ArtistsService(),
      bandsService: new BandsService(),
      tracksService: new TracksService(),
      albumsService: new AlbumsService(),
      favouritesService: new FavouritesService(),
    }
  },
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
});

server.listen({port: PORT})
  .then(() => console.log(`Server is running on port ${PORT}`))
