const express = require("express");
const MenuController = require("../controllers/menu");
const CategoryController = require("../controllers/categories");
const router = express.Router();

router.post("/menu", MenuController.create);
router.get("/menu", MenuController.findAll);

module.exports = router;
