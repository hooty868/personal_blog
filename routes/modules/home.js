const express = require("express");
const router = express.Router();
const Articles = require("../../models/article");

router.get("/", (req, res) => {
  Articles.find()
    .lean()
    .then((articles) => {
      const relatedArticle = articles.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.error(error));
});

module.exports = router;
