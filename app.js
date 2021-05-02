const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Articles = require("./models/article");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
mongoose.connect("mongodb://localhost/article-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error!");
});
db.once("open", () => {
  console.log("mongodb connected!");
});

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

app.get("/articles/learn", (req, res) => {
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

app.get("/articles/share", (req, res) => {
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

app.get("/articles/digital", (req, res) => {
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

app.get("/articles/food", (req, res) => {
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

app.get("/articles/decoration", (req, res) => {
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

app.get("/articles/outfit", (req, res) => {
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

app.get("/articles/health", (req, res) => {
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

app.get("/articles/:id", (req, res) => {
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

app.get("/addArticles/new", (req, res) => {
  return res.render("new");
});

app.post("/article", (req, res) => {
  const data = req.body;
  console.log(data);
  const {
    id = mongoObjectId(),
    title,
    time = new Date(),
    category,
    view = 0,
    coverImage,
    introduce,
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
  } = req.body;
  return Todo.create({
    id,
    title,
    time,
    category,
    view,
    coverImage,
    introduce,
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
  }) // 存入資料庫
    .then(() => res.redirect("/")) // 新增完成後導回首頁
    .catch((error) => console.log(error));
});

app.get("/", (req, res) => {
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

// 設定 port 3000
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
