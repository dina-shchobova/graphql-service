const usersResolver = {
  Query: {
    user: (_, {id}, {dataSources}) => {
      return dataSources.usersService.getUser(id);
    }
  },

  User: {
    id: (parent) => parent._id,
    secondName: (parent) => parent.lastName,
  },

  Mutation: {
    registerUser: (_, registerUserInput, { dataSources }) => {
      try {
        const data = dataSources.usersService.registerUser(registerUserInput);
        return {
          code: 200,
          success: true,
          message: "User successfully registered",
          user: data,
        }
      } catch (e) {
        return {
          code: e.extension.response.status,
          success: false,
          message: e.extension.response.body,
          user: null,
        }
      }
    }
  }

}

export { usersResolver };
