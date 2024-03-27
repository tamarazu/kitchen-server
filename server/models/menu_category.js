"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Menu_Category extends Model {
    static associate(models) {
      Menu_Category.belongsTo(models.Menu)
      Menu_Category.belongsTo(models.Category)
    }
  }
  Menu_Category.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      Category_Id: DataTypes.INTEGER,
      Menu_Id: DataTypes.INTEGER
    },
    {
      sequelize,
    }
  );
  return Menu_Category;
};
