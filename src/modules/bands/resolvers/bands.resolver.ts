const bandsResolver = {
    Query: {
        bands: (_, { pagination }, { dataSources }) => {
            if (pagination && pagination.limit && (pagination.offset || pagination.offset === 0)) {
                return dataSources.bandsService.getBands(pagination.limit, pagination.offset);
            } else {
                return dataSources.bandsService.getBands();
            }

        },
        band: ( _, { id }, {dataSources}) => {
            return dataSources.bandsService.getBand(id);
        },
    },

    Band: {
        id: (parent) => parent._id,
        genres: ({ genresIds }, _, { dataSources }) => {
            const genres = [];
            genresIds.forEach((id) => {
                genres.push(dataSources.genresService.getGenre(id));
            })
            return genres;
        }
    },

    Mutation: {
        createBand: (_, createBandInput, { dataSources }) => {
            try {
                const data = dataSources.bandsService.createBand(createBandInput);
                console.log(data)
                return {
                    code: 200,
                    success: true,
                    message: "Band successfully created",
                    band: data.band,
                }
            } catch (e) {
                return {
                    code: e.extension.response.status,
                    success: false,
                    message: e.extension.response.body,
                    band: null,
                }
            }
        }
    }
}

export { bandsResolver };
