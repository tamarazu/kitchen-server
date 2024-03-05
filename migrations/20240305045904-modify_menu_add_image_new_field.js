"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Menus", "image", {
        type: DataTypes.STRING,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.removeColumn('Menus', 'image')
   ])
  },
};
