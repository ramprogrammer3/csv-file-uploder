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


// file view controller

module.exports.view = async (req, res) => {
    try {

        let csvFile = await File.findOne({ file: req.params.id });

        const results = [];
        const header = [];
        fs.createReadStream(csvFile.filePath) //seeting up the path for file upload
            .pipe(csvParser())
            .on('headers', (headers) => {
                headers.map((head) => {
                    header.push(head);
                });
                // console.log(header);
            })
            .on('data', (data) =>
                results.push(data))
            .on('end', () => {
                // console.log(results.length);
                // console.log(results);
                res.render("file_viewer", {
                    title: "File Viewer",
                    fileName: csvFile.fileName,
                    head: header,
                    data: results,
                    length: results.length
                });
            });


    } catch (error) {
        console.log("error while file parsing ");
        return res.status(500).json('Internal server error');
    }
}


// delete a file 

module.exports.deleteFile = async (req, res) => {
    try {
        // console.log(req.params);
        let isFile = await File.findOne({ file: req.params.id });

        if (isFile) {
            await File.deleteOne({ file: req.params.id });
            return res.redirect("/");
        } else {
            console.log("File not found");
            return res.redirect("/");
        }
    } catch (error) {
        console.log("facing issue while deleting a file ");
        return;
    }
}

