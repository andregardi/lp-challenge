const Property = require('../../models/Property');

async function getProperty(root, { id }) {
  const queryOptions = {
    include: [
      Property.overview,
      Property.facts,
      Property.others,
      Property.visits
    ]
  };
  const property = await Property.findByPk(id, queryOptions)
  await property.visits.addVistNow();
  return property;
}

module.exports = getProperty;
