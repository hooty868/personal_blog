const mongoose = require("mongoose");
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
module.exports = db;
