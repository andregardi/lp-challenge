const Property = require('../../models/Property');

async function getProperties() {
  const associationOptions = {
    include: [
      Property.overview,
      Property.facts,
      Property.others,
      Property.visits,
    ],
  };
  return Property.findAll(associationOptions);
}

module.exports = getProperties;
