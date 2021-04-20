const Property = require('../../models/Property');

const queryOptions = {
  limit: 5,
  order: [['visits', 'total', 'DESC']],
  include: [
    Property.overview,
    Property.facts,
    Property.others,
    Property.visits,
  ],
};

function getMostVisitedProperties() {
  return Property.findAll(queryOptions);
}

module.exports = getMostVisitedProperties;
