require("dotenv").config()

const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 8080;
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use(router);
app.use(errorHandler)
app.listen(PORT, () => {
  console.log("This app is running on PORT: ", PORT);
});
