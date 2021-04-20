const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const FactsType = new GraphQLObjectType({
  name: 'facts',
  fields: () => ({
    type: { type: GraphQLString },
    yearBuilt: { type: GraphQLInt },
    heating: { type: GraphQLString },
    parking: { type: GraphQLString },
    lot: { type: GraphQLString },
    stories: { type: GraphQLInt },
  }),
});

module.exports = FactsType;
