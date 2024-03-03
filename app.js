const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();
const PORT = 3000;
// const errorHandler = require('')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use(router);
app.listen(PORT, () => {
  console.log("This app is running on PORT: ", PORT);
});
