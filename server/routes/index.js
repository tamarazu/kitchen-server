const express = require("express");
const router = express.Router();
const menus = require("./menu");
const categories = require("./category");
const menuCategories = require('./menu_category')

router.get("/", (req, res) => {
  res.send("Kitchens API");
});
router.use('/menu', menus);
router.use('/menu-category', menuCategories)
router.use(categories);

module.exports = router;
