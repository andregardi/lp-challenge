const Property = require('../../models/Property');

// Search by neighborhood, city, or a ZIP code
async function getSearchedProperties(root, { searchParam }) {
  return Property.search(searchParam);
}

module.exports = getSearchedProperties;
