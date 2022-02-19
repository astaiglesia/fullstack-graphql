const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')

const server = new ApolloServer({
  // context makes models and db available in the resolvers
  context() {
    return {models, db}
  },
  typeDefs,
  resolvers
})

server.listen(4000)
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
