const joi = require('joi');

const overviewSchema = joi
  .object({
    price: joi.string(),
    beds: joi.number(),
    baths: joi.number(),
    neighborhood: joi.string(),
    address: joi.string(),
    city: joi.string(),
    zipcode: joi.number(),
    available: joi.bool(),
  })
  .options({ presence: 'required' });

const factsSchema = joi
  .object({
    type: joi.string(),
    yearBuilt: joi.number(),
    heating: joi.string(),
    parking: joi.string(),
    lot: joi.string(),
    stories: joi.number(),
  })
  .options({ presence: 'required' });

const othersSchema = {
  anualTax: joi.number(),
  hasGarage: joi.bool(),
  pool: joi.bool(),
  virtualTourLink: joi.string(),
  parcelNumber: joi.number(),
  lastSold: joi.string(),
};

const visitsSchema = {
  total: joi.number(),
  lastVisited: joi.string(),
};

const propertySchema = joi
  .object({
    id: joi.number(),
    homeImage: joi.string(),
    overview: overviewSchema,
    facts: factsSchema,
    others: othersSchema,
    visits: visitsSchema,
    images: joi.array().items(joi.string()),
  })
  .options({ presence: 'required' });

const propertiesSchema = joi
  .array()
  .items(propertySchema)
  .options({ presence: 'required' });

module.exports = {
  propertySchema,
  propertiesSchema,
};
