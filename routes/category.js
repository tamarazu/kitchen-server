const express = require("express");
const CategoriesController = require("../controllers/categories");
const router = express.Router();

router.post('/category', CategoriesController.create)
router.get("/categories", CategoriesController.findAll);

module.exports = router;
