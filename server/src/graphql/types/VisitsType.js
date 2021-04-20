const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const VisitsType = new GraphQLObjectType({
  name: 'visits',
  fields: () => ({
    total: { type: GraphQLInt },
    lastVisited: { type: GraphQLString },
  }),
});

module.exports = VisitsType;
