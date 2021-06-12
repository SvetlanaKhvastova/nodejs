const { Router } = require("express");
const productController = require("../controllers/product.controller");
const createProductMiddleware = require("../middlewares/createProduct.middleware");
const validateIdMiddleware = require("../middlewares/validateId.middleware");

const router = Router();

router.post(
  "/product",
  createProductMiddleware,
  productController.createProduct
);

router.get("/product", productController.getAllProducts);

router.delete(
  "/product/:id",
  validateIdMiddleware,
  productController.removeProduct
);

router.get(
  "/product/:id",
  validateIdMiddleware,
  productController.getByIdProduct
);

router.put("/product", validateIdMiddleware, productController.updateProduct);

module.exports = router;
