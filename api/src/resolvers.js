/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    findUser(_, __, { models }) {
      const user = models.User.findOne();
      console.log(user);
      return {
        id: user.id,
        username: user.username
      }
    },

    // includes optional query filter input
    findPets(_, { input }, { models }) {
      return models.Pet.findMany().filter( pet => (pet.name === input.name) || (pet.type === input.type))
    }
  },

  Mutation: {
    addUser(_, { input }, { models, db }){
      return models.User.create(input);
    },
    addPet(_, { input }, { models, db }){
      console.log(input)
      return models.Pet.create(input);
    }
  },

  // Resolves the Pet Type
  Pet: {
    // secondary resolver - i.e. resolves after the top level Query resolvers
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },

  // Resolves the User Type
  // User: {
    
  // }
}
