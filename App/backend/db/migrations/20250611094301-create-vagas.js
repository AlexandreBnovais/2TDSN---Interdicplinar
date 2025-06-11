'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tituto: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      descricao: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      localizacao: {
        type: Sequelize.STRING(100)
      },
      data_inicio: {
        type: Sequelize.DATE
      },
      data_fim: {
        type: Sequelize.DATE
      },
      requisitos: {
        type: Sequelize.TEXT
      },
      OngId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ongs',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vagas');
  }
};