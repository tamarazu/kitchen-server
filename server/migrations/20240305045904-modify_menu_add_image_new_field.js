"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Menus", "image", {
        type: DataTypes.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.removeColumn('Menus', 'image')
   ])
  },
};
