const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  view: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  introduce: {
    type: String,
  },
  subtitle1: {
    type: String,
  },
  paragraph1: {
    type: String,
  },
  image1: {
    type: String,
  },
  subtitle2: {
    type: String,
  },
  paragraph2: {
    type: String,
  },
  image2: {
    type: String,
  },
  subtitle3: {
    type: String,
  },
  paragraph3: {
    type: String,
  },
  image3: {
    type: String,
  },
  subtitle4: {
    type: String,
  },
  paragraph4: {
    type: String,
  },
  image4: {
    type: String,
  },
  subtitle5: {
    type: String,
  },
  paragraph5: {
    type: String,
  },
  image5: {
    type: String,
  },
  subtitle6: {
    type: String,
  },
  paragraph6: {
    type: String,
  },
  image6: {
    type: String,
  },
  subtitle7: {
    type: String,
  },
  paragraph7: {
    type: String,
  },
  image7: {
    type: String,
  },
  subtitle8: {
    type: String,
  },
  paragraph8: {
    type: String,
  },
  image8: {
    type: String,
  },
  label: {
    type: String,
  },
  label2: {
    type: String,
  },
  label3: {
    type: String,
  },
});
module.exports = mongoose.model("Article", articleSchema);
