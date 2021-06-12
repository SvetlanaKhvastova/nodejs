const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // проверить есть ли уже User:
    const candidate = await User.findOne({ email: email });

    if (candidate) {
      return res
        .status(401)
        .json({ message: `User with this email already exist` });
    }

    // зашифровать пароль
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await User.create({ email, password: hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // проверить email
    const candidate = await User.findOne({ email });

    if (!candidate) {
      return res.status(401).json({ message: `Wrong credentials` });
    }

    // проверить password
    const isPasswordCorrect = bcrypt.compareSync(password, candidate.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: `Wrong credentials` });
    }
    // сделать token
    const payload = { id: candidate._id, email: candidate.email };
    const token = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: 60 * 60,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { register, login };
