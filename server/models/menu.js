"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Menu extends Model {
    static associate(models) {
      Menu.belongsToMany(models.Category, {
        through: models.MenuCategories
      })
    }
  }
  Menu.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Menu;
};
