// importing package and models

const File = require("../model/csv");
const csvParser = require('csv-parser');


// upload controllers
module.exports.upload = async (req, res) => {
    try {

        // fetching file if file is not present
        if (!req.file) {
            return res.status(400).json("Please select a file to upload");
        }

        // check file formate
        if (req.file.mimetype != "text/csv") {
            return res.status(400).send('Select CSV files only.');
        }

        // upload in database
        let file = await File.create({
            fileName: req.file.originalname,
            filePath: req.file.path,
            file: req.file.filename
        });
        return res.redirect('/');


    } catch (error) {
        console.log("Error in uploading file");
        return res.status(500).json({
            message: "Internal Server error",
        })
    }
}