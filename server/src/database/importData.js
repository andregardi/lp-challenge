const jsonData = require('./data.json');
const Property = require('../models/Property');

const associationOptions = {
  include: [
    { association: Property.overview },
    { association: Property.facts },
    { association: Property.others },
    { association: Property.visits },
  ],
};

async function importData() {
  const length = await Property.count();
  if (length === 0) {
    console.log('Importing data from data.json');
    const promises = jsonData.map((jsonProperty) => Property.create(jsonProperty, associationOptions));
    Promise.all(promises);
  }
}

module.exports = importData;
