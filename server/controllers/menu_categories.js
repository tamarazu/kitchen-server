const { Menu_Category } = require("../models");

class MenuCategoryController {
  static create(req, res, next) {
    console.log(req.body);
    Menu_Category.create(req.body)
      .then((group) => {
        console.log(group)
        res.status(201).json(group);
      })
      .catch(next);
  }

  static findAll (req, res, next) {
    console.log('masuk kesini');
    Menu_Category
    .findAll()
    .then(menuCategory => {
      res.status(200).json({
        message: "Success"
      })
    })
    .catch(next)
  }
}

module.exports = MenuCategoryController;
