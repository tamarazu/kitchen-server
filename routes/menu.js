const express = require("express");
const MenuController = require("../controllers/menu");
const router = express.Router();

router.get("/menu", MenuController.findAll);

module.exports = router;
