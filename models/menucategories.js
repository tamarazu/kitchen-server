"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class MenuCategories extends Model {
    static associate(models) {
      MenuCategories.belongsTo(models.Menu);
      MenuCategories.belongsTo(models.Category);
    }
  }
  MenuCategories.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      MenuId: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
    }
  );

  return MenuCategories;
};
