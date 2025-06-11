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
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tituto: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    descricao: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    localizacao: {
      type: DataTypes.STRING(100)
    },
    data_inicio: {
      type: DataTypes.DATE
    },
    data_fim: {
      type: DataTypes.DATE
    },
    requisitos: DataTypes.TEXT
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Vagas',
  });

  Vagas.associate = (models) => {
    Vagas.belongsTo(models.Ongs, {
      foreignKey: {
        name: 'OngId',
        allowNull: false,
        type: DataTypes.INTEGER
      }
    });

    Vagas.hasOne(models.Candidaturas, {
      foreignKey: {
        name: 'VagaId',
        type: DataTypes.INTEGER
      }
    });
  };
  return Vagas;
};