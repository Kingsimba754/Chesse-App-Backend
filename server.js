//DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose =require("mongoose");
const { PORT = 3000 } = process.env;

//DATABASE CONNECTION
mongoose.connect(MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
});

mongoose.connection
.on("open", ()=> console.log("You are connected to Mongoose"))
.on("close",()=> console.log("You are disconnected from mongoose"))
.on("error",(error)=> console.log(error));
//ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});

//LISTENER
app.listen(PORT,() => 
    console.log(`We are always listening on PORT: ${PORT}`));
