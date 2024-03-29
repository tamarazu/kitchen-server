const { json } = require("sequelize");
const { MenuCategories, Category, Menu } = require("../models");

class MenuController {
  static create(req, res, next) {
    console.log(req.body);
    MenuCategories
      .create(req.body)
      .then(() => {
        res.status(201).json({
          status: 201,
          message: "Success create new menu categories"
        })
      })
      .catch(next)
  }

  static findAll(req, res, next) {
    MenuCategories.findAll({
      where: {
        CategoryId: req.query.category_id || 1
      },
      attributes: [
        'id'
      ],
      include: [Menu]
    })
      .then((menus) => {
        const menu = []
        if (menus.length) {
          menus.map(value => {
            // console.log(json(value));
          })
        }
        res.status(200).json({
          status: 200,
          data: menus,
        });
      })
      .catch(next);
  }
}

module.exports = MenuController;
