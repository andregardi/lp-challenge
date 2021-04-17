const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');
const PropertyFacts = require('./PropertyFacts');
const PropertyOthers = require('./PropertyOthers');
const PropertyOverview = require('./PropertyOverview');
const PropertyVisits = require('./PropertyVisits');

class Property extends Model {}

Property.init({
  homeImage: DataTypes.STRING,
  images: DataTypes.JSON,
}, {
  sequelize,
  modelName: 'property',
});

Property.overview = Property.hasOne(PropertyOverview);
Property.facts = Property.hasOne(PropertyFacts);
Property.others = Property.hasOne(PropertyOthers);
Property.visits = Property.hasOne(PropertyVisits);

module.exports = Property;
