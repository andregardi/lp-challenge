const Property = require('../../models/Property');

async function getProperties() {
  const queryOptions = {
    include: [
      Property.overview,
      Property.facts,
      Property.others,
      Property.visits,
    ],
  };
  return Property.findAll(queryOptions);
}

module.exports = getProperties;
