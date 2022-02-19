const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    avatar: String!
    friends: [User]!
  }
  
  type Query {
    me: User!     
  }
`;
// the me type Query enforces that me Query evaluations return data of type User (with an email, avatar and friends list)

// resolver is an object of methods defining the various Queries and Mutations to expose to the client
const resolvers = {
  Query: {
    me() {
      return {
        name: 'George Foreman',
        email: 'derfus@maximus.com',
        avatar: 'http://espn.go.com',
        friends: [{
          name: 'Janine Janus',
          email: 'ultra@maximus.com',
          avatar: 'http://mlb.mets.com',
          friends: []
        }]
      }
    }
  }
};

// instantiate your Apollo server, passing in your typeDefs and resolver
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// spin up the server!
server.listen(4000)
  .then(() => console.log('Apollo server is live and listening on port 4000'));