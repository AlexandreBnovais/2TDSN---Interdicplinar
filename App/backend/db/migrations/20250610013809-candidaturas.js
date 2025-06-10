'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('candidaturas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria',
          key: 'id'
        }
      },
      vagaID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'vagas',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('Pendente', 'Aceita', 'Recusada'),
        defaultValue: Sequelize.literal('Pendente')
      },
      createAt: {
        type: Sequelize.DATE
      },
      updataAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('candidaturas');
  }
};
