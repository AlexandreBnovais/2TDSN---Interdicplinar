'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
      },
      senha_hash: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createAt: {
        type: Sequelize.DATE
      },
      updataAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('usuario', ['email']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
