const express = require("express");
const router = express.Router();
const article = require("./modules/article");
const home = require("./modules/home");

router.use("/articles", article);
router.use("/", home);

module.exports = router;
