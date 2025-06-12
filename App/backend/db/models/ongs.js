'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ongs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ongs.hasMany(models.Vagas,{
      foreignKey: {
        name: 'OngId',
        type: DataTypes.INTEGER
      }
    });
    }
  }
  Ongs.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    telefone: {
      type: DataTypes.STRING,
      validate: {
        is: '^[0-9()+-]{8,20}$'  
      }
    },
    cnpj: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Ongs',
  });
  return Ongs;
};