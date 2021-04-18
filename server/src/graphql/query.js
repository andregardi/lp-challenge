const {
  GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt,
} = require('graphql');
const getProperties = require('./resolvers/getProperties');
const PropertyType = require('./types/PropertyType');
const getMostVisitedProperties = require('./resolvers/getMostVisitedProperties');
const getMostRecentProperties = require('./resolvers/getMostRecentProperties');
const getSearchedProperties = require('./resolvers/getSearchedProperties');
const getProperty = require('./resolvers/getProperty');

const properties = {
  type: new GraphQLList(PropertyType),
  resolve: getProperties,
};

const mostVisitedProperties = {
  type: new GraphQLList(PropertyType),
  resolve: getMostVisitedProperties,
};

const mostRecentProperties = {
  type: new GraphQLList(PropertyType),
  resolve: getMostRecentProperties,
};

const searchProperties = {
  type: new GraphQLList(PropertyType),
  args: {
    searchParam: { type: GraphQLString },
  },
  resolve: getSearchedProperties,
};

const property = {
  type: PropertyType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getProperty,
};

const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    property,
    properties,
    mostVisitedProperties,
    mostRecentProperties,
    searchProperties,
  }),
});

module.exports = query;
