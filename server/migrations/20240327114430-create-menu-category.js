'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Menu_Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Category_Id: Sequelize.INTEGER,
      Menu_Id: Sequelize.INTEGER
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menu_Categories');
  }
};