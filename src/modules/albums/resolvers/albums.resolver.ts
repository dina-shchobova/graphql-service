const albumsResolver = {
  Query: {
    albums: (_, { pagination }, { dataSources }) => {
      return dataSources.albumsService.getAlbums(pagination.limit, pagination.offset);
    },
    album: ( _, {id}, {dataSources}) => {
      return dataSources.albumsService.getAlbum(id);
    }
  },

  Album: {
    id: (parent) => parent._id,
    artists: ({ artistsIds }, _, { dataSources }) => {
      const artists = [];
      artistsIds.forEach((id) => {
        artists.push(dataSources.artistsService.getArtist(id));
      })
      return artists;
    },
    bands: ({ bandsIds }, _, { dataSources }) => {
      const bands = [];
      bandsIds.forEach((id) => {
        bands.push(dataSources.bandsService.getBand(id));
      })
      return bands;
    },
    genres: ({ genresIds }, _, { dataSources }) => {
      const genres = [];
      genresIds.forEach((id) => {
        genres.push(dataSources.genresService.getGenre(id));
      })
      return genres;
    },
    tracks: ({ trackIds }, _, { dataSources }) => {
      const tracks = [];
      trackIds.forEach((id) => {
        tracks.push(dataSources.tracksService.getTrack(id));
      })
      return tracks;
    }
  },
}

export { albumsResolver };
