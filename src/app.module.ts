import { usersResolver } from "./modules/users/resolvers/users.resolver";
import { genresResolver } from './modules/genres/resolvers/genres.resolver';
import { artistsResolver } from './modules/artists/resolvers/artists.resolver';
import {bandsResolver} from "./modules/bands/resolvers/bands.resolver";
import {tracksResolver} from "./modules/tracks/resolvers/tracks.resolver";
import {albumsResolver} from "./modules/albums/resolvers/albums.resolver";
import {favouritesResolver} from "./modules/favourites/resolvers/favourites.resolver";

const resolvers = [
  usersResolver,
  genresResolver,
  artistsResolver,
  bandsResolver,
  tracksResolver,
  albumsResolver,
  favouritesResolver
]

export { resolvers }
