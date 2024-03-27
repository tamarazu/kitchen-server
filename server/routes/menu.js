const express = require("express");
const MenuController = require("../controllers/menu");
const router = express.Router();

router.post("/", MenuController.create);
router.get("/", MenuController.findAll);
router.get("/:id", MenuController.findByCategoryId);

module.exports = router;
