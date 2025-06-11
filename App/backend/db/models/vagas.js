'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vagas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vagas.init({
    tituto: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    localizacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vagas',
  });
  return Vagas;
};