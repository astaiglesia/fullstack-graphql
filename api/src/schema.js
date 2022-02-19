const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  
  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img: String
  }
  
  input PetInput {
    name: String
    type: String
  }
  
  type Query {
    findUser: User!
    findPets(input: PetInput): [Pet]!
  }
  
  input NewUserInput {
    username: String!
  }
  
  input NewPetInput {
    name: String!
    type: String!
    img: String
  }
  type Mutation {
    addUser(input: NewUserInput!): User!
    addPet(input: NewPetInput!): Pet!
  }
  
`;
 // Pet > img is a computed property here
 // Arguments must be Scalars or Input Types

module.exports = typeDefs
