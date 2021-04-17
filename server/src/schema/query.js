const { GraphQLObjectType, GraphQLList } = require('graphql');
const getProperties = require('./resolvers/getProperties');
const PropertyType = require('./properties/PropertyType');

const properties = {
  type: new GraphQLList(PropertyType),
  resolve: getProperties,
};

const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    properties,
  }),
});

module.exports = query;
