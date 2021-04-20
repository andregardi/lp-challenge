const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} = require('graphql');

const OthersType = new GraphQLObjectType({
  name: 'others',
  fields: () => ({
    anualTax: { type: GraphQLFloat },
    hasGarage: { type: GraphQLBoolean },
    pool: { type: GraphQLBoolean },
    virtualTourLink: { type: GraphQLString },
    parcelNumber: { type: GraphQLInt },
    lastSold: { type: GraphQLString },
  }),
});

module.exports = OthersType;
