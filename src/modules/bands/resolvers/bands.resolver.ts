const bandsResolver = {
  Query: {
    bands: (_, {pagination}, {dataSources}) => {
      if (pagination && pagination.limit && (pagination.offset || pagination.offset === 0)) {
        return dataSources.bandsService.getBands(pagination.limit, pagination.offset);
      } else {
        return dataSources.bandsService.getBands();
      }

    },
    band: (_, {id}, {dataSources}) => {
      return dataSources.bandsService.getBand(id);
    },
  },

  Band: {
    id: (parent) => parent._id,
    genres: ({genresIds}, _, {dataSources}) => {
      const genres = [];
      genresIds.forEach((id) => {
        genres.push(dataSources.genresService.getGenre(id));
      })
      return genres;
    },
    members: async ({members}, _, {dataSources}) => {
      return (await Promise.all(members.map(async member => {
        return dataSources.artistsService.getArtist(member.artist);
      }))).map((artist, index) => ({
        artist: members[index].artist,
        firstName: artist.firstName,
        secondName: artist.secondName,
        middleName: artist.middleName,
        instrument: members[index].instrument,
        years: members[index].years
      }))
    }
  },

  Mutation: {
    createBand: (_, {createBandInput}, {dataSources}) => {
      try {
        return dataSources.bandsService.createBand(createBandInput);
      } catch (e) {
        return null;
      }
    },

    deleteBand: (_, {id}, {dataSources}) => {
      try {
        return dataSources.bandsService.deleteBand(id);
      } catch (e) {
        return null;
      }
    },

    updateBand: (_, {id, updateBandInput}, {dataSources}) => {
      try {
        return dataSources.bandsService.updateBand(id, updateBandInput);
      } catch (e) {
        return null;
      }
    },
  }
}

export {bandsResolver};
