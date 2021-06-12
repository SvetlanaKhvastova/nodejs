const { Book } = require("../models/books.model");

const createBook = async (req, res) => {
  try {
    const body = req.body;

    const result = await Book.create(body);

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const findAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createBook, findAllBooks };
