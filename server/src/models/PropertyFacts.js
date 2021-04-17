const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class PropertyFacts extends Model {}

PropertyFacts.init({
  type: DataTypes.STRING,
  yearBuilt: DataTypes.INTEGER,
  heating: DataTypes.STRING,
  parking: DataTypes.STRING,
  lot: DataTypes.STRING,
  stories: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'facts',
  name: {
    singular: 'facts',
  },
});

module.exports = PropertyFacts;
