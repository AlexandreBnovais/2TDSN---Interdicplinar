'use strict';

const { TimeoutError } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nome: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },

      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      telefone: Sequelize.DataTypes.STRING,
      createdAt: Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
