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
    findPets(_, __, { models }) {
      return models.Pet.findMany();
    }
    
  },
  // Mutation: {
    
  // },

  // Resolves the Pet Type
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },

  // Resolves the User Type
  // User: {
    
  // }
}
