'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mealPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mealPlan.init({
    protein: DataTypes.STRING,
    starch: DataTypes.STRING,
    vegetable: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mealPlan',
  });
  return mealPlan;
};