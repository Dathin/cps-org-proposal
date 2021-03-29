'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('pedro', [{
       id: 1,
       name: 'John Doe',
       isBetaMember: false
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('pedro', null, {});
  }
};
