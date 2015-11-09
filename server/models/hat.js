'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hat = sequelize.define('Hat', {
    price: DataTypes.INTEGER,
    popular: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Hat.belongsTo(models.Brand);
      }
    }
  });
  return Hat;
};
