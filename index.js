// importing package 
const express = require("express");
require("dotenv").config();


const port = process.env.port || 8080;




const app = express();


// server activate
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})