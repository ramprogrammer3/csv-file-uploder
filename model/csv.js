
// importing mongoose 
const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        trim: true,
        maxLength: 200,
    },

    filePath: {
        type: String,
    },

    file: {
        type: String,
    }
}, { timestamps: true }
)

module.exports = mongoose.model("File", fileSchema);