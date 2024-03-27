const express = require("express");
const router = express.Router();
const MenuCategoryController = require("../controllers/menu_categories");

router.post("/", MenuCategoryController.create);
router.get("/", MenuCategoryController.findAll);
module.exports = router;
