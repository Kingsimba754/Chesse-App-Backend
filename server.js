//DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose =require("mongoose");
const cors = require("cors");
const morgan = require("morgan")
const { PORT = 3000, MONGODB_URL } = process.env;




//DATABASE CONNECTION
mongoose.connect(MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
});

mongoose.connection
.on("open", ()=> console.log("You are connected to Mongoose"))
.on("close",()=> console.log("You are disconnected from mongoose"))
.on("error",(error)=> console.log(error));

//MODELS
const ChesseSchema = new mongoose.Schema({
    name: String,
    countryOfOrigin: String,
    image: String
});

const Chesse = mongoose.model("Chesse", ChesseSchema);

//Middleware 
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//ROUTES
//Test Route
app.get("/", (req, res) => {
  res.send("hello world");
});
//People Index people
app.get("/Chesse", async(req,res)=>{
    try{
        res.json(await Chesse.find({}));
    } catch(error){
        res.status(400).json(error)
    }
})

//LISTENER
app.listen(PORT,() => 
    console.log(`We are always listening on PORT: ${PORT}`));
