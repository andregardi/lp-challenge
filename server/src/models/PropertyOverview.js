const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class PropertyOverview extends Model {}

PropertyOverview.init(
  {
    price: DataTypes.STRING,
    beds: DataTypes.INTEGER,
    baths: DataTypes.FLOAT,
    neighborhood: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: 'overview',
  }
);

module.exports = PropertyOverview;
