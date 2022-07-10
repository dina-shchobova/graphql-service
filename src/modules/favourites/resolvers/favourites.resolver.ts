const favouritesResolver = {
  Query: {
    favourites: (_, __, {dataSources}) => {
      return dataSources.favouritesService.getFavourites();
    },
  },

  Favourites: {
    id: (parent) => parent._id,
    bands: ({bandsIds}, _, {dataSources}) => {
      const favoriteBands = [];
      bandsIds.forEach((id) => {
        favoriteBands.push(dataSources.bandsService.getBand(id));
      })
      return favoriteBands;
    },

    genres: ({genresIds}, _, {dataSources}) => {
      const favouriteGenres = [];
      genresIds.forEach((id) => {
        favouriteGenres.push(dataSources.genresService.getGenre(id));
      })
      return favouriteGenres;
    },

    artists: ({artistsIds}, _, {dataSources}) => {
      const favouriteArtists = [];
      artistsIds.forEach((id) => {
        favouriteArtists.push(dataSources.artistsService.getArtist(id));
      })
      return favouriteArtists;
    },

    tracks: ({tracksIds}, _, {dataSources}) => {
      const favouriteTracks = [];
      tracksIds.forEach((id) => {
        favouriteTracks.push(dataSources.tracksService.getTrack(id));
      })
      return favouriteTracks;
    },
  },

  Mutation: {
    addArtistToFavourites: (_, {addFavouriteInput}, {dataSources}) => {
      try {
        return dataSources.favouritesService.addToFavourites(addFavouriteInput);
      } catch (e) {
        return null;
      }
    },

    addBandToFavourites: (_, {addFavouriteInput}, {dataSources}) => {
      try {
        return dataSources.favouritesService.addToFavourites(addFavouriteInput);
      } catch (e) {
        return null;
      }
    },

    addGenreToFavourites: (_, {addFavouriteInput}, {dataSources}) => {
      try {
        return dataSources.favouritesService.addToFavourites(addFavouriteInput);
      } catch (e) {
        return null;
      }
    },

    addTrackToFavourites: (_, {addFavouriteInput}, {dataSources}) => {
      try {
        return dataSources.favouritesService.addToFavourites(addFavouriteInput);
      } catch (e) {
        return null;
      }
    },

    removeFromFavourites: (_, {removeFavouriteInput}, {dataSources}) => {
      try {
        return dataSources.favouritesService.removeFromFavourites(removeFavouriteInput);
      } catch (e) {
        return null;
      }
    },
  }
}

export {favouritesResolver};
