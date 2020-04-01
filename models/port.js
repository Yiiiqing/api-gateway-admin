'use strict';
module.exports = (sequelize, DataTypes) => {
  const Port = sequelize.define('Port', {
    name: DataTypes.STRING,
    host: DataTypes.STRING,
    route:DataTypes.STRING
  }, {});
  Port.associate = function(models) {
    // associations can be defined here
  };
  return Port;
};