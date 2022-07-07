const artistsResolver = {
  Query: {
    artists: (_, { pagination }, { dataSources }) => {
      return dataSources.artistsService.getArtists(pagination.limit, pagination.offset);
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
