'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cars = sequelize.define('Car', { // Car = Model name
    carId: DataTypes.INTEGER,
    location: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});


  Cars.associate = function(models) {
    Cars.belongsToMany(models.User, {
      through: models.Rentals
    })
    // associations can be defined here
  };
  
  return Cars;
};

//
// let models = require('./models')
//
// models.Car.findOne({where: {name: "toyota"}})
