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
      Candidaturas.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          type: DataTypes.INTEGER
        },
        as: 'User'
      });

      Candidaturas.belongsTo(models.Vagas, {
        foreignKey: {
          name: 'VagaId',
          type: DataTypes.INTEGER
        },
        as: 'Vagas'
      })
    }
  }
  Candidaturas.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    data_candidatura: {
      type: DataTypes.DATE,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    status: {
      type: DataTypes.ENUM('Pedente', 'Aceita', 'Recusada'),
      defaultValue: 'Pendente'
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Candidaturas',
  });
  return Candidaturas;
};