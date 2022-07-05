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
    bands: (parent) => parent.bandsId,
  },

  Mutation: {
    createArtist: (_, createArtistInput, { dataSources }) => {
      try {
        const data = dataSources.artistsService.createArtist(createArtistInput);
        console.log(data)
        return {
          code: 200,
          success: true,
          message: "Artist successfully created",
          artists: data.artists,
        }
      } catch (e) {
        return {
          code: e.extension.response.status,
          success: false,
          message: e.extension.response.body,
          artists: null,
        }
      }
    }
  }
}

export { artistsResolver };
