const jsonData = require("./data.json");
const Property = require("../models/Property");

const associationOptions = {
  include: [
    { association: Property.overview },
    { association: Property.facts },
    { association: Property.others },
    { association: Property.visits }
  ]
};

async function importData() {
  console.info("Importing data from data.json into database");
  const promises = jsonData.map((jsonProperty) =>
    Property.create(jsonProperty, associationOptions)
  );
  await Promise.all(promises);
}

module.exports = importData;
