const { Menu, Category } = require("../models");

class MenuController {
  static create(req, res, next) {
    Menu.create(req.body)
      .then((menu) => {
        res.status(201).json({
          status: 201,
          message: "Success created",
        });
      })
      .catch(next);
  }

  static findAll(req, res, next) {
    Menu.findAll({
      include: [Category],
    })
      .then((menus) => {
        res.status(200).json(menus);
      })
      .catch(next);
  }
}

module.exports = MenuController;
