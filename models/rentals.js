'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rentals = sequelize.define('Rentals', {
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER
  }, {});
  Rentals.associate = function(models) {
    // associations can be defined here
  };
  return Rentals;
};

models.Rental.findOne({
  where:{
    price: 10000
  }
})
  .then( rental => {
    rental.price
  })
