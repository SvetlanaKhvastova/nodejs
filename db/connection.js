const mongoose = require("mongoose");
require("dotenv").config();

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const db = mongoose.connect(CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = { db };
