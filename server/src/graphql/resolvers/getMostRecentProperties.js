const Property = require('../../models/Property');

const queryOptions = {
  limit: 5,
  order: [['visits', 'lastVisited', 'DESC']],
  include: [Property.overview, Property.facts, Property.others, Property.visits]
};

function getMostRecentProperties() {
  return Property.findAll(queryOptions);
}

module.exports = getMostRecentProperties;
