const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const jwtVerify = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.json({ message: `Token is not provided` });
    }

    jwt.verify(token, JWT_SECRET_KEY);

    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};
// hhhhh
module.exports = { jwtVerify };
