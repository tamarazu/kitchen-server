const express = require("express");
const MenuCategoryController = require("../controllers/menu-category");
const router = express.Router();

router.post("/menu-category", MenuCategoryController.create);
router.get("/menu-category", MenuCategoryController.findAll );

module.exports = router;
