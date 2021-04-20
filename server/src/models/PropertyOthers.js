const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class PropertyOthers extends Model {}

PropertyOthers.init(
  {
    anualTax: DataTypes.FLOAT,
    hasGarage: DataTypes.BOOLEAN,
    pool: DataTypes.BOOLEAN,
    virtualTourLink: DataTypes.STRING,
    parcelNumber: DataTypes.INTEGER,
    lastSold: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'others',
    name: {
      singular: 'others',
    },
  }
);

module.exports = PropertyOthers;
