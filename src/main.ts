import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql";
import { resolvers } from "./app.module";
import "dotenv/config";
import { UsersAPI } from "./modules/users/services/users.service";
import { GenresService } from "./modules/genres/services/genres.service";

const PORT = process.env.PORT || 3000;

const server = new ApolloServer( {
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      userAPI: new UsersAPI(),
      genresService: new GenresService()
    }
  }
});

server.listen({ port: PORT})
.then(() => console.log(`Server is running on port ${PORT}`))
