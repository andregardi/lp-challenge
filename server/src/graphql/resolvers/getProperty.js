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
  return Property.findByPk(id, queryOptions);
}

module.exports = getProperty;
