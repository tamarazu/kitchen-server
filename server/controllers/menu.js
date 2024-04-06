const { Menu, Category } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
          Menu.create(req.body).then(() => {
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
    Menu.findAll()
      .then((menus) => {
        res.status(200).json({
          status: 200,
          data: menus,
        });
      })
      .catch(next);
  }

  static findOne(req, res, next) {
    Menu.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Category,
          as: "Categories",
          attributes: ["id", "name"],
        },
      ],
    })
      .then((menu) => {
        const categories = []
        
        res.status(200).json({
          status: 200,
          data: menu,
        });
      })
      .catch(next);
  }

  static findByName(req, res, next) {
    Menu.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.name + "%" } || "",
      },
    })
      .then((menus) => {
        res.status(200).json({
          status: 200,
          data: menus,
        });
      })
      .catch(next);
  }
}

module.exports = MenuController;
