const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");
const connectDB = require("./config/config.js");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;

connectDB();

app.use("/", routes);

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
