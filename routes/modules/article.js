const express = require("express");
const router = express.Router();
const Articles = require("../../models/article");

const mongoObjectId = function () {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

router.get("/new/learn", (req, res) => {
  return Articles.find({ category: "learn" })
    .sort({ view: 1 })
    .lean()
    .then((data) => {
      const relatedArticle = data.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.log(error));
});

router.get("/new/share", (req, res) => {
  return Articles.find({ category: "share" })
    .sort({ view: 1 })
    .lean()
    .then((data) => {
      const relatedArticle = data.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.log(error));
});

router.get("/new/digital", (req, res) => {
  return Articles.find({ category: "digital" })
    .sort({ view: 1 })
    .lean()
    .then((data) => {
      const relatedArticle = data.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.log(error));
});

router.get("/new/food", (req, res) => {
  return Articles.find({ category: "food" })
    .sort({ view: 1 })
    .lean()
    .then((data) => {
      const relatedArticle = data.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.log(error));
});

router.get("/new/decoration", (req, res) => {
  return Articles.find({ category: "decoration" })
    .sort({ view: 1 })
    .lean()
    .then((data) => {
      const relatedArticle = data.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.log(error));
});

router.get("/new/outfit", (req, res) => {
  return Articles.find({ category: "outfit" })
    .sort({ view: 1 })
    .lean()
    .then((data) => {
      const relatedArticle = data.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.log(error));
});

router.get("/new/health", (req, res) => {
  return Articles.find({ category: "health" })
    .sort({ view: 1 })
    .lean()
    .then((data) => {
      const relatedArticle = data.map((article) => {
        let result = { ...article };
        result.introduce = article.introduce.slice(0, 30);
        return result;
      });
      res.render("index", { relatedArticle });
    })
    .catch((error) => console.log(error));
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  const data = req.body;
  const {
    id = mongoObjectId(),
    title,
    time = new Date(),
    category,
    view = 0,
    coverImage,
    introduce,
    author,
    subtitle1,
    paragraph1,
    image1,
    subtitle2,
    paragraph2,
    image2,
    subtitle3,
    paragraph3,
    image3,
    subtitle4,
    paragraph4,
    image4,
    subtitle5,
    paragraph5,
    image5,
    subtitle6,
    paragraph6,
    image6,
    subtitle7,
    paragraph7,
    image7,
    subtitle8,
    paragraph8,
    image8,
    label,
    label2,
    label3,
  } = data;

  return Articles.create({
    id,
    title,
    time,
    category,
    view,
    coverImage,
    introduce,
    author,
    subtitle1,
    paragraph1,
    image1,
    subtitle2,
    paragraph2,
    image2,
    subtitle3,
    paragraph3,
    image3,
    subtitle4,
    paragraph4,
    image4,
    subtitle5,
    paragraph5,
    image5,
    subtitle6,
    paragraph6,
    image6,
    subtitle7,
    paragraph7,
    image7,
    subtitle8,
    paragraph8,
    image8,
    label,
    label2,
    label3,
  })
    .then(() => res.redirect("/articles/new/admin-list")) // 新增完成後導回首頁
    .catch((error) => console.log(error));
});

router.get("/new/admin-list", (req, res) => {
  Articles.find()
    .lean()
    .then((articles) => {
      res.render("admin", { articles });
    })
    .catch((error) => console.error(error));
});

router.delete("/:id/delete", (req, res) => {
  const id = req.params.id;
  return Articles.findById(id)
    .then((article) => article.remove())
    .then(() => res.redirect("/articles/new/admin-list"))
    .catch((error) => console.log(error));
});

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  return Articles.findById(id)
    .lean()
    .then((article) => {
      res.render("edit", { article });
    })
    .catch((error) => console.log(error));
});

router.put("/:id/edit", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  return Articles.findById(id)
    .then((article) => {
      article.title = data.title;
      article.introduce = data.introduce;
      article.category = data.category;
      article.coverImage = data.coverImage;
      article.introduce = data.introduce;
      article.author = data.author;
      article.subtitle1 = data.subtitle1;
      article.paragraph1 = data.paragraph1;
      article.image1 = data.image1;
      article.subtitle2 = data.subtitle2;
      article.paragraph2 = data.paragraph2;
      article.image2 = data.image2;
      article.subtitle3 = data.subtitle3;
      article.paragraph3 = data.paragraph3;
      article.image3 = data.image3;
      article.subtitle4 = data.subtitle4;
      article.paragraph4 = data.paragraph4;
      article.image4 = data.image4;
      article.subtitle5 = data.subtitle5;
      article.paragraph5 = data.paragraph5;
      article.image5 = data.image5;
      article.subtitle6 = data.subtitle6;
      article.paragraph6 = data.paragraph6;
      article.image6 = data.image6;
      article.subtitle7 = data.subtitle7;
      article.paragraph7 = data.paragraph7;
      article.image7 = data.image7;
      article.subtitle8 = data.subtitle8;
      article.paragraph8 = data.paragraph8;
      article.image8 = data.image8;
      article.label = data.label;
      article.label2 = data.label2;
      article.label3 = data.label3;
      return article.save();
    })
    .then(() => res.redirect(`/articles/new/${id}`))
    .catch((error) => console.log(error));
});

router.get("/new/:id", (req, res) => {
  const id = req.params.id;
  return Articles.findById(id)
    .lean()
    .then((Article) => {
      Articles.find({ category: Article.category })
        .sort({ view: 1 })
        .lean()
        .then((data) => {
          const relatedArticle = data.map((article) => {
            let result = { ...article };
            result.introduce = article.introduce.slice(0, 30);
            return result;
          });
          res.render("article", { Article, relatedArticle });
        });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
