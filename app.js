const express = require("express");
const app = express();
require("./config/mongoose");

const bodyParser = require("body-parser");
const methodOverride = require("method-override");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const routes = require("./routes");

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use(routes);

// 設定 port 3000
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
