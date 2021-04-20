const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql');
const PropertyType = require('./PropertyType');

const PropertiesWithPagesType = new GraphQLObjectType({
  name: 'propertiesWithPagesType',
  fields: () => ({
    properties: { type: new GraphQLList(PropertyType) },
    pages: { type: GraphQLInt },
  }),
});

module.exports = PropertiesWithPagesType;
