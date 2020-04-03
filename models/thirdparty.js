'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThirdParty = sequelize.define('ThirdParty', {
    name: DataTypes.STRING,
    token: DataTypes.STRING,
    expire_time: DataTypes.DATE
  }, {});
  ThirdParty.associate = function(models) {
    // associations can be defined here
  };
  return ThirdParty;
};