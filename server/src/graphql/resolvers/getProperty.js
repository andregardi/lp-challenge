const Property = require('../../models/Property');

async function getProperty(root, { id }) {
  const queryOptions = {
    include: [
      Property.overview,
      Property.facts,
      Property.others,
      Property.visits,
    ],
  };
  const property = await Property.findByPk(id, queryOptions);
  if (!property) throw new Error(`Property ID ${id} could not be found.`);
  await property.visits.addVistNow();
  return property;
}

module.exports = getProperty;
