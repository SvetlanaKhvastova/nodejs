const { Product } = require("../models/product.model");

const validateIdMiddleware = async (req, res, next) => {
  let id = req.params.id || req.body.id;

  //   if (req.params.id) {
  //     id = req.params.id;
  //   }
  //   if (req.body.id) {
  //     id = req.body.id;
  //   }

  if (!id) {
    return res.json({ message: `Id does not exist` });
  }

  try {
    const result = await Product.findById(id);
    console.log(result);
    next();
  } catch (error) {
    return res.json({ message: `Wrong id` });
  }
};

module.exports = validateIdMiddleware;
