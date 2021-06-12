const express = require("express");
require("dotenv").config();
const { router } = require("./routes/routes");

const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
