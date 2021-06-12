const { Product } = require("../models/product.model");

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const result = await Product.find();
      return res.status(200).send(result);
    } catch (error) {
      return res.json(error.message);
    }
  },

  getByIdProduct: async (req, res) => {
    const id = req.params.id;

    try {
      const result = await Product.findById(id);
      return res.status(200).send(result);
    } catch (error) {
      return res.json(error.message);
    }
  },

  removeProduct: async (req, res) => {
    const id = req.params.id;

    try {
      const result = await Product.findByIdAndRemove(id);
      return res.status(204).send(result);
    } catch (error) {
      return res.json(error.message);
    }
  },

  createProduct: async (req, res) => {
    const body = req.body;

    try {
      const result = await Product.create(body);
      res.status(201).send(result);
    } catch (e) {
      return res.json(e.message);
    }
  },

  updateProduct: async (req, res) => {
    const body = req.body;

    try {
      const result = await Product.findOneAndUpdate(
        { _id: body.id },
        { ...body },
        { new: true }
      );
      return res.status(200).send(result);
    } catch (error) {
      return res.json(error.message);
    }
  },
};

module.exports = productController;
