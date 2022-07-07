const artistsResolver = {
  Query: {
    artists: (_, { pagination }, { dataSources }) => {
      if (pagination && pagination.limit && (pagination.offset || pagination.offset === 0)) {
        return dataSources.artistsService.getArtists(pagination.limit, pagination.offset);
      } else {
        return dataSources.artistsService.getArtists();
      }
    },
    artist: ( _, {id}, {dataSources}) => {
      return dataSources.artistsService.getArtist(id);
    }
  },

  Artist: {
    id: (parent) => parent._id,
    bands: ({ bandsIds }, _, { dataSources }) => {
        const bands = [];
        bandsIds.forEach((id) => {
          bands.push(dataSources.bandsService.getBand(id));
        })
        return bands;
    }
  },
}

export { artistsResolver };
