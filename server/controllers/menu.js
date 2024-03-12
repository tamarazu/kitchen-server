const { Menu, Category } = require("../models");

class MenuController {
  static create(req, res, next) {
    const { name, price, image } = req.body;
    Menu.findAll({
      where: {
        name: name.toLowerCase(),
      },
    })
      .then((menu) => {
        if (menu.length > 0) {
          next({
            status: 409,
            message:
              "The resource you are trying to create already exists. Please update the existing resource or choose a different identifier.",
          });
        } else if (name.length == 0) {
          next({
            status: 400,
            message: "Name length data must bigger than 0",
          });
        } else if (price == 0) {
          next({
            status: 400,
            message: "Price must bigger than 0",
          });
        } else if (image.length == 0) {
          next({
            status: 400,
            message: "Image length data must bigger than 0",
          });
        } else {
          Menu.create(req.body)
          .then(() => {
            res.status(201).json({
              status: 201,
              message: "Success created",
            });
          });
        }
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
