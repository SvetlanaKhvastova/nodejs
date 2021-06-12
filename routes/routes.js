const { Router } = require("express");
const booksControllers = require("../controllers/books.controller");
const authControllers = require("../controllers/auth.controller");
const { jwtVerify } = require("../middlewares/jwt.middleware");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "OK!!!" });
});

router.post("/book", jwtVerify, booksControllers.createBook);
router.get("/book", jwtVerify, booksControllers.findAllBooks);

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);

module.exports = { router };
