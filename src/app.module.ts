import { usersResolver } from "./modules/users/resolvers/users.resolver";
import { genresResolver } from './modules/genres/resolvers/genres.resolver';
import { artistsResolver } from './modules/artists/resolvers/artists.resolver';
import {bandsResolver} from "./modules/bands/resolvers/bands.resolver";
import {tracksResolver} from "./modules/tracks/resolvers/tracks.resolver";
import {albumsResolver} from "./modules/albums/resolvers/albums.resolver";

const resolvers = [
  usersResolver,
  genresResolver,
  artistsResolver,
  bandsResolver,
  tracksResolver,
  albumsResolver,
]

export { resolvers }
