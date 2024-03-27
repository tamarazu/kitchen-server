"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Menu, { through: models.Menu_Category });
    }
  }

  Category.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Category;
};
