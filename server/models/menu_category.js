"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Menu_Category extends Model {
    static associate(models) {
      Menu_Category.belongToMany(models.Menu, { through: 'Menu_Category'})
      Menu_Category.belongToMany(models.Category, { through: 'Menu_Category'})
    }
  }
  Menu_Category.init(
    {
      id: DataTypes.INTEGER,
      selfGranted: DataTypes.BOOLEAN,
      Category_Id: DataTypes.INTEGER,
      Menu_Id: DataTypes.INTEGER
    },
    {
      sequelize,
    }
  );
  return Menu_Category;
};
