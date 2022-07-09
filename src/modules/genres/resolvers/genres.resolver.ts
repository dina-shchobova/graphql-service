const genresResolver = {
  Query: {
    genres: (_, {pagination}, {dataSources}) => {
      if (pagination && pagination.limit && (pagination.offset || pagination.offset === 0)) {
        return dataSources.genresService.getGenres(pagination.limit, pagination.offset);
      } else {
        return dataSources.genresService.getGenres();
      }

    },
    genre: (_, {id}, {dataSources}) => {
      return dataSources.genresService.getGenre(id);
    }
  },

  Genre: {
    id: (parent) => parent._id,
  },

  Mutation: {
    createGenre: (_, {genresInput}, {dataSources}) => {
      try {
        return dataSources.genresService.createGenre(genresInput);
      } catch (e) {
        return null;
      }
    },

    deleteGenre: (_, {id}, {dataSources}) => {
      try {
        return dataSources.genresService.deleteGenre(id);
      } catch (e) {
        return null;
      }
    },

    updateGenre: (_, {id, genresInput}, {dataSources}) => {
      try {
        return dataSources.genresService.updateGenre(id, genresInput);
      } catch (e) {
        return null;
      }
    },
  }
}

export {genresResolver};
