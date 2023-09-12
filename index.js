// importing package 
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnection");


const port = process.env.port || 8080;

const app = express();

// connecting to mongodb atlas
dbConnect();


// server activate
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})