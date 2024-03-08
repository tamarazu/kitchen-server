const { Category } = require("../models");

class CategoryController {
  static create(req, res, next) {
    const { name } = req.body;
    console.log(name.length);
    Category.findAll({
      where: {
        name: name.toLowerCase(),
      },
    })
      .then((categories) => {
        if (categories.length > 0) {
          next({
            status:409,
            message: "The resource you are trying to create already exists. Please update the existing resource or choose a different identifier."
          })
        } else if (name.length == 0) {
          next({
            status: 400,
            message: "Name length data must bigger than 0",
          });
        } else {
          Category.create({
            name: name.toLowerCase(),
          }).then((category) => {
            res.status(201).json({
              status: 201,
              message: "Success create new category",
            });
          });
        }
      })
      .catch(next);
  }

  static findAll(req, res, next) {
    Category.findAll()
      .then((categories) => {
        res.status(200).json({
          status: 200,
          data: categories,
        });
      })
      .catch(next);
  }
}

module.exports = CategoryController;
