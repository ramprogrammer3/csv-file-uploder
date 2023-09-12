

// importing express to create router
const express = require('express');
const router = express.Router();


// importing controllers
const { home } = require("../controllers/home_controller");


// making routes
router.get("/",home);



// exporting router
module.exports = router;