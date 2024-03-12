const express = require("express");
const router = express.Router();
const menus = require("./menu");
const categories = require("./category");

router.get("/", (req, res) => {
  res.send("Kitchens API");
});
router.use(menus);
router.use(categories);

module.exports = router;
