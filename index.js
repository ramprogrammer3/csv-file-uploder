// importing package 
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnection");
const path = require("path");


const port = process.env.port || 8080;

const app = express();

// connecting to mongodb atlas
dbConnect();

// accessing static files from assets folder
app.use(express.static(__dirname +'/assets')); 

// setting up view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))


// server activate
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})