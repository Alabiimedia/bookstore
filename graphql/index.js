const { makeExecutableSchema } = require('graphql-tools');

// Local packages
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
