const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class PropertyVisits extends Model {}

PropertyVisits.init(
  {
    total: DataTypes.INTEGER,
    lastVisited: {
      type: DataTypes.DATE,
      get() {
        return this.getDataValue('lastVisited').toISOString();
      },
    },
  },
  {
    sequelize,
    modelName: 'visits',
    name: {
      singular: 'visits',
    },
  },
);

module.exports = PropertyVisits;
