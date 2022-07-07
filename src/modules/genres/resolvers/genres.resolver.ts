const genresResolver = {
  Query: {
    genres: (_, { pagination }, { dataSources }) => {
      return dataSources.genresService.getGenres(pagination.limit, pagination.offset);
    },
    genre: ( _, {id}, {dataSources}) => {
      return dataSources.genresService.getGenre(id);
    }
  },

  Genre: {
    id: (parent) => parent._id,
  },

  Mutation: {
    createGenre: (_, genreInput, { dataSources }) => {
      try {
        const data = dataSources.genresService.createGenre(genreInput);
        console.log(data)
        return {
          code: 200,
          success: true,
          message: "Genre successfully created",
          genre: data.genre,
        }
      } catch (e) {
        return {
          code: e.extension.response.status,
          success: false,
          message: e.extension.response.body,
          genre: null,
        }
      }
    }
  }
}

export { genresResolver };
