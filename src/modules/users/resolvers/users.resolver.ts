const usersResolver = {
  Query: {
    user: (_, {id}, {dataSources}) => {
      return dataSources.usersService.getUser(id);
    },
    jwt: (_, {email, password}, {dataSources}) => {
      return dataSources.usersService.getJWT(email, password);
    }
  },

  User: {
    id: (parent) => parent._id,
    secondName: (parent) => parent.lastName,
  },

  Mutation: {
    registerUser: (_, registerUserInput, {dataSources}) => {
      try {
        return dataSources.usersService.registerUser(registerUserInput);
      } catch (e) {
        console.log(e);
      }
    }
  }

}

export {usersResolver};
