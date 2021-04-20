const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
} = require('graphql');

const OverviewType = new GraphQLObjectType({
  name: 'overview',
  fields: () => ({
    price: { type: GraphQLString },
    beds: { type: GraphQLInt },
    baths: { type: GraphQLFloat },
    neighborhood: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    zipcode: { type: GraphQLInt },
    available: { type: GraphQLBoolean },
  }),
});

module.exports = OverviewType;
