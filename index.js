const express = require("express");
const multer = require("multer");
require("dotenv").config();

const PORT = process.env.PORT || 5002;

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}---${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ message: `HELLO` });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
