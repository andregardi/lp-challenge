const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const query = require('./query');

const schema = new GraphQLSchema({
  query,
});

const graphqlConfig = {
  schema,
  graphiql: true,
  pretty: true,
};

module.exports = graphqlHTTP(graphqlConfig);
