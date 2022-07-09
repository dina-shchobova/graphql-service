const artistsResolver = {
  Query: {
    artists: (_, {pagination}, {dataSources}) => {
      if (pagination && pagination.limit && (pagination.offset || pagination.offset === 0)) {
        return dataSources.artistsService.getArtists(pagination.limit, pagination.offset);
      } else {
        return dataSources.artistsService.getArtists();
      }
    },
    artist: (_, {id}, {dataSources}) => {
      return dataSources.artistsService.getArtist(id);
    }
  },

  Artist: {
    id: (parent) => parent._id,
    bands: ({bandsIds}, _, {dataSources}) => {
      const bands = [];
      bandsIds.forEach((id) => {
        bands.push(dataSources.bandsService.getBand(id));
      })
      return bands;
    }
  },

  Mutation: {
    createArtist: (_, {createArtistInput}, {dataSources}) => {
      try {
        return dataSources.artistsService.createArtist(createArtistInput);
      } catch (e) {
        return null;
      }
    },

    deleteArtist: (_, {id}, {dataSources}) => {
      try {
        return dataSources.artistsService.deleteArtist(id);
      } catch (e) {
        return null;
      }
    },

    updateArtist: (_, {id, updateArtistInput}, {dataSources}) => {
      try {
        return dataSources.artistsService.updateArtist(id, updateArtistInput);
      } catch (e) {
        return null;
      }
    },
  }
}

export {artistsResolver};
