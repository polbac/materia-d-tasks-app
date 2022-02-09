'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'deadline', {
      type: Sequelize.DataTypes.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'deadline')
  }
};
