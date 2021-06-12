const { db } = require("../db/connection");
const { Schema, model } = require("mongoose");

const book = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Book = model("book", book);

module.exports = { Book };
