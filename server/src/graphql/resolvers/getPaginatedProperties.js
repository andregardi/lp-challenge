const Property = require('../../models/Property');

async function getPaginatedProperties(root, { page }) {
  const limit = 5;
  const offset = 5 * (page - 1);
  const queryOptions = {
    offset,
    limit,
    include: [
      Property.overview,
      Property.facts,
      Property.others,
      Property.visits
    ]
  };
  const { count, rows: properties } = await Property.findAndCountAll(
    queryOptions
  );
  const pages = Math.ceil(count / limit);

  return { pages, properties };
}

module.exports = getPaginatedProperties;
