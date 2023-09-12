

// importing express to create router
const express = require('express');
const router = express.Router();
const multer = require('multer');


// importing controllers
const { home } = require("../controllers/home_controller");
const { upload, view } = require("../controllers/file_controller");
const uploader = multer({ dest: 'uploads/files' })

// making routes
router.get("/", home);

router.post("/upload", uploader.single("file"), upload)

router.get("view/:id",view);


// exporting router
module.exports = router;