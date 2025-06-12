'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Candidaturas, {
        foreignKey: {
          name: 'userId',
          type: DataTypes.INTEGER
        }
      })
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    senha_hash: {
      allowNull: false,
      type: DataTypes.STRING
    },
    telefone: {
      type: DataTypes.STRING,
      validate: {
        is: '^[0-9()+-]{8,20}$'
      }
    }
    
  }, 
  {
    sequelize,
    modelName: 'User',

    indexes: [{ 
      name: 'idx_usuario_email',
      unique: true,
      fields: ['email']
    }]
    
  });

  return User;
};