import { usersResolver } from "./modules/users/resolvers/users.resolver";
import { genresResolver } from './modules/genres/resolvers/genres.resolver';
import { artistsResolver } from './modules/artists/resolvers/artists.resolver';

const resolvers = [
  usersResolver,
  genresResolver,
  artistsResolver
]

export { resolvers }
