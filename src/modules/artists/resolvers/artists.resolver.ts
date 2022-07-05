const artistsResolver = {
  Query: {
    artists: (_, __, { dataSources }) => {
      return dataSources.artistsService.getArtists();
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
