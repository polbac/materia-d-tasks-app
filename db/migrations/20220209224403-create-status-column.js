'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'status', {
      type: Sequelize.DataTypes.ENUM('new', 'doing', 'completed', 'expired'),
      defaultValue: 'new'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'status')
  }
};
