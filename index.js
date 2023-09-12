// importing package 
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnection");
const path = require("path");

const expressLayouts = require('express-ejs-layouts');
const csv = require("csv-parser");
const bodyParser = require("body-parser");


const port = process.env.port || 8080;

const app = express();

// connecting to mongodb atlas
dbConnect();


// setting layouts
app.use(expressLayouts);

// middleware for body parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

// accessing static files from assets folder
app.use(express.static(__dirname + '/assets'));

// setting up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


// setting up routes
app.use("/", require("./routes/index"))


// server activate
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})