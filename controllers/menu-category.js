const { json } = require("sequelize");
const { MenuCategories, Category, Menu } = require("../models");

class MenuController {
  static create(req, res, next) {
    MenuCategories.create(req.body)
      .then(() => {
        res.status(201).json({
          status: 201,
          message: "Success create new menu categories",
        });
      })
      .catch(next);
  }

  static findAll(req, res, next) {
    MenuCategories.findAll({
      where: {
        CategoryId: req.query.category_id || 1,
      },
      attributes: ["id"],
      include: [
        {
          model: Menu,
          as: "Menu",
          attributes: ["id", "name", "price", "image"],
        },
      ],
    })
      .then(value => {
        const menus = [];
        value.map(menu => {
          menus.push(menu.Menu)
        })
        res.status(200).json({
          status: 200,
          data: menus,
        });
      })
      .catch(next);
  }
}

module.exports = MenuController;
