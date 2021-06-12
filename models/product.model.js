const db = require("../db/connection");
const { Schema, model } = require("mongoose");

const product = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
});

const Product = model("product", product);

module.exports = { Product };
