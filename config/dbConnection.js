// importing mongoose and dotenv to connect mongodb atlas

const mongoose = require("mongoose");
require("dotenv").config();


const url = process.env.url;

// define function to connect mongodb atlas

const dbConnect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB connection successful");
    }).catch((error) => {
        console.log("DB connection failed");
        console.error(error);
        process.exit(1);
    })
}

// exporting dbConnect function 

module.exports = dbConnect;