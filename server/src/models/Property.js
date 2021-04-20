const { DataTypes, Model, QueryTypes } = require('sequelize');
const sequelize = require('../database/connection');
const PropertyFacts = require('./PropertyFacts');
const PropertyOthers = require('./PropertyOthers');
const PropertyOverview = require('./PropertyOverview');
const PropertyVisits = require('./PropertyVisits');

const searchSqlQuery = `
  select * from properties
  join overviews on properties.id = overviews.propertyId
  where overviews.neighborhood LIKE :search_param
  or overviews.city LIKE :search_param
  or overviews.zipcode LIKE :search_param
  limit 5
  offset :offset
`;

const countSearchSqlQuery = `
select count(*) as total from properties
join overviews on properties.id = overviews.propertyId
where overviews.neighborhood LIKE :search_param
or overviews.city LIKE :search_param
or overviews.zipcode LIKE :search_param
`;

class Property extends Model {
  // Search by neighborhood, city, or a ZIP code
  // Could have been done with the ORM, but it was
  // suggested to demonstrate acknowledge in SQL
  static async search(searchParam, page) {
    const limit = 5;
    const offset = limit * (page - 1);
    const queryOptions = {
      type: QueryTypes.SELECT,
      replacements: { search_param: `%${searchParam}%`, offset }
    };

    const selectRows = await this.sequelize.query(searchSqlQuery, queryOptions);
    const countRows = await this.sequelize.query(
      countSearchSqlQuery,
      queryOptions
    );

    const properties = selectRows.map((row) => {
      const { id, homeImage, ...overview } = row;
      return { id, homeImage, overview };
    });

    const count = countRows[0].total;

    const pages = Math.ceil(count / limit);

    return { properties, pages };
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
