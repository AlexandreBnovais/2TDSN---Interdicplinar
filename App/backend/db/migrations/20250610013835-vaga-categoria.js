'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vaga_categoria', {
      vagaID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'vagas',
            schema: 'voluntariado'
          },
          key: 'id',
        }
      },
      categoriaID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vaga_categoria')
  }
};
