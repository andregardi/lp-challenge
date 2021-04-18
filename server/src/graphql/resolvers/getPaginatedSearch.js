const Property = require('../../models/Property');

// Search by neighborhood, city, or a ZIP code
function getPaginatedSearch(root, { searchParam, page = 1 }) {
  return Property.search(searchParam, page);
}

module.exports = getPaginatedSearch;
