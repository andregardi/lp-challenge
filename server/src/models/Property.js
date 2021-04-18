const { DataTypes, Model, QueryTypes } = require('sequelize');
const sequelize = require('../database/connection');
const PropertyFacts = require('./PropertyFacts');
const PropertyOthers = require('./PropertyOthers');
const PropertyOverview = require('./PropertyOverview');
const PropertyVisits = require('./PropertyVisits');

// Could have been done with "$or" from the ORM,
// but it was suggested to demonstrate some acknowledge in SQL
const searchSqlQuery = `
  select * from properties
  join overviews on properties.id = overviews.propertyId
  where overviews.neighborhood LIKE :search_param
  or overviews.city LIKE :search_param
  or overviews.zipcode LIKE :search_param
  limit 5
`;

class Property extends Model {
  // Search by neighborhood, city, or a ZIP code
  static async search(searchParam) {
    const queryOptions = {
      type: QueryTypes.SELECT,
      replacements: { search_param: `%${searchParam}%` }
    };

    const rows = await this.sequelize.query(searchSqlQuery, queryOptions);

    return rows.map((row) => {
      const { id, homeImage, ...overview } = row;
      return { id, homeImage, overview };
    });
  }
}

Property.init(
  {
    homeImage: DataTypes.STRING,

    images: DataTypes.JSON
  },
  {
    sequelize,
    modelName: 'property'
  }
);

Property.overview = Property.hasOne(PropertyOverview);
Property.facts = Property.hasOne(PropertyFacts);
Property.others = Property.hasOne(PropertyOthers);
Property.visits = Property.hasOne(PropertyVisits);

module.exports = Property;
