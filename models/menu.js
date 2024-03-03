"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Menu extends Model {
    static associate(models) {
      Menu.belongsTo(models.Category);
    }
  }
  Menu.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
    }
  );
  return Menu;
};
