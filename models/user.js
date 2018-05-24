'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userId: DataTypes.NUMBER,
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Cars, {
      through: models.Rentals
    })
    // associations can be defined here
  };
  return User;
};
