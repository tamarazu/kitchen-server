const express = require("express");
const router = express.Router();
const menus = require("./menu");

router.get("/", (req, res) => {
  res.send("masuk kesini");
});
router.use(menus);

module.exports = router;
