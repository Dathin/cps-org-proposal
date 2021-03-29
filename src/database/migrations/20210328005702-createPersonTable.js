'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('pedro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        underscore: true
      },
      name: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      isBetaMember: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('pedro')
  }
};
