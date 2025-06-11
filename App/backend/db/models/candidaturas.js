'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidaturas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidaturas.init({
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Candidaturas',
  });
  return Candidaturas;
};