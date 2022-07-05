import {ApolloServer} from "apollo-server";
import {typeDefs} from "./graphql";
import {resolvers} from "./app.module";
import "dotenv/config";
import {UsersService} from "./modules/users/services/users.service";
import {GenresService} from "./modules/genres/services/genres.service";
import {ArtistsService} from "./modules/artists/services/artists.service";

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersService: new UsersService(),
      genresService: new GenresService(),
      artistsService: new ArtistsService(),
    }
  },
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    console.log(token);
    return token;
  },
});

server.listen({port: PORT})
  .then(() => console.log(`Server is running on port ${PORT}`))
