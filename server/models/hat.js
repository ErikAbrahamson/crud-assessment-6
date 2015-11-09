'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hat = sequelize.define('Hat', {
    price: DataTypes.STRING,
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
