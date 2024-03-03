const { Menu, Category } = require("../models");

class MenuController {
  static findAll(req, res, next) {

    Menu.findAll({
      include: [
        Category
      ]
    })
      .then((menus) => {
        res.status(200).json(menus);
      })
      .catch(next);
  }
}

module.exports = MenuController;
