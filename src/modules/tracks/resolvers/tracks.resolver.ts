const tracksResolver = {
  Query: {
    tracks: (_, {pagination}, {dataSources}) => {
      if (pagination && pagination.limit && (pagination.offset || pagination.offset === 0)) {
        return dataSources.tracksService.getTracks(pagination.limit, pagination.offset);
      } else {
        return dataSources.tracksService.getTracks();
      }
    },
    track: (_, {id}, {dataSources}) => {
      return dataSources.tracksService.getTrack(id);
    }
  },

  Track: {
    id: (parent) => parent._id,
    album: ({albumId}, _, {dataSources}) => {
      return dataSources.albumsService.getAlbum(albumId);
    },
    artists: ({artistsIds}, _, {dataSources}) => {
      const artists = [];
      artistsIds.forEach((id) => {
        artists.push(dataSources.artistsService.getArtist(id));
      })
      return artists;
    },
    bands: ({bandsIds}, _, {dataSources}) => {
      const bands = [];
      bandsIds.forEach((id) => {
        bands.push(dataSources.bandsService.getBand(id));
      })
      return bands;
    },
    genres: ({genresIds}, _, {dataSources}) => {
      const genres = [];
      genresIds.forEach((id) => {
        genres.push(dataSources.genresService.getGenre(id));
      })
      return genres;
    }
  },

  Mutation: {
    createTrack: (_, {createTrackInput}, {dataSources}) => {
      try {
        return dataSources.tracksService.createTrack(createTrackInput);
      } catch (e) {
        return null;
      }
    },

    deleteTrack: (_, {id}, {dataSources}) => {
      try {
        return dataSources.tracksService.deleteTrack(id);
      } catch (e) {
        return null;
      }
    },

    updateTrack: (_, {id, updateTrackInput}, {dataSources}) => {
      try {
        return dataSources.tracksService.updateTrack(id, updateTrackInput);
      } catch (e) {
        return null;
      }
    },
  }
}

export {tracksResolver};
