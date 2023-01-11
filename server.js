//DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const { PORT = 3000 } = process.env;

//ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});
