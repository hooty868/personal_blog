const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

let data = [
  {
    id: 1,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
  {
    id: 2,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
  {
    id: 3,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
  {
    id: 4,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
  {
    id: 5,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
  {
    id: 6,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
  {
    id: 7,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
  {
    id: 8,
    imgSrc:
      "https://ti2.kknews.cc/SIG=7u8lu4/ctp-vzntr/6q6855qnn6264q5p8sn74qn579o28627_s.jpg",
    title: "早安，超級浪漫的神仙句子",
    date: "2021-04-21",
    content:
      "1、遇見了溫柔的人所以想溫柔待人。2、星光落入你眼裡而你落入我心裡。3、山野萬里、你是我藏在風中的歡喜。4、山野千里、你是我藏在雲彩的浪漫。5、整個夏天也抵擋不住你眼裡的寵溺。",
  },
];
const ArticleList = data.splice(2, 0, { id: null });
app.get("/", (req, res) => {
  res.render("index", { articles: data });
});

app.get("/articles/:article_id", (req, res) => {
  const showData = data.find(
    (article) => article.id.toString() === req.params.article_id
  );
  res.render("article", { article: showData });
});

// 設定 port 3000
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
