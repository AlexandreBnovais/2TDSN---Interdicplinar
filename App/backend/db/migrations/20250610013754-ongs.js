'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ongs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(20),
        validate: {
          is: /^[0-9()+\-]{8,20}$/i
        }
      },
      cnpj: {
        type: Sequelize.STRING(18),
        unique: true
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ongs');
  }
};
