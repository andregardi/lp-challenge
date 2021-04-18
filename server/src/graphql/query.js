const {
  GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt,
} = require('graphql');
const getPaginatedProperties = require('./resolvers/getPaginatedProperties');
const PropertyType = require('./types/PropertyType');
const getMostVisitedProperties = require('./resolvers/getMostVisitedProperties');
const getMostRecentProperties = require('./resolvers/getMostRecentProperties');
const getPaginatedSearch = require('./resolvers/getPaginatedSearch');
const getProperty = require('./resolvers/getProperty');
const PropertiesWithPagesType = require('./types/PropertiesWithPagesType');

const paginatedProperties = {
  type: PropertiesWithPagesType,
  args: {
    page: { type: GraphQLInt },
  },
  resolve: getPaginatedProperties,
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
  type: PropertiesWithPagesType,
  args: {
    searchParam: { type: GraphQLString },
    page: { type: GraphQLInt },
  },
  resolve: getPaginatedSearch,
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
    paginatedProperties,
    mostVisitedProperties,
    mostRecentProperties,
    searchProperties,
  }),
});

module.exports = query;
