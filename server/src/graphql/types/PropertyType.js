const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require('graphql');
const FactsType = require('./FactsType');
const OthersType = require('./OthersType');
const OverviewType = require('./OverviewType');
const VisitsType = require('./VisitsType');

const PropertyType = new GraphQLObjectType({
  name: 'property',
  fields: () => ({
    id: { type: GraphQLInt },
    homeImage: { type: GraphQLString },
    overview: { type: OverviewType },
    facts: { type: FactsType },
    others: { type: OthersType },
    visits: { type: VisitsType },
    images: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = PropertyType;
