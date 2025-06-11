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

  Candidaturas.associate = (models) => {
    Candidaturas.belongsTo(models.Users, {
      foreignKey: {
        name: 'UserId',
        type: DataTypes.INTEGER
      }
    });
    
    Candidaturas.belongsTo(models.Vagas, {
      foreignKey: {
        name: 'VagaId',
        type: DataTypes.INTEGER
      }
    });
  };
  return Candidaturas;
};