const express = require("express");
const MenuController = require("../controllers/menu");
const router = express.Router();

router.post("/menu", MenuController.create);
router.get("/menu", MenuController.findAll);
router.get("/menu/:id", MenuController.findByCategoryId);

module.exports = router;
